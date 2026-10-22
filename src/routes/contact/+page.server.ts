import type { Actions } from "./$types";
import { Resend } from "resend";
import { fail, redirect } from "@sveltejs/kit";
import { escapeHtml } from "$lib/utils/escapeHtml";
import { dev } from "$app/environment";

export const actions = {
	default: async (event) => {
		// Submit contact form
		const resend = new Resend(import.meta.env.VITE_RESEND_EMAIL_API_KEY);
		const data = await event.request.formData();

		// Honeypot filled in, so likely a bot: pretend it worked without sending
		if (data.get("website")) {
			throw redirect(303, "/contact/form-submit");
		}

		// Raw values are returned on failure so the form can be refilled
		const values = {
			name: String(data.get("name") ?? ""),
			email: String(data.get("email") ?? ""),
			subject: String(data.get("subject") ?? ""),
			message: String(data.get("message") ?? "")
		};
		const email = escapeHtml(values.email);
		const name = escapeHtml(values.name);
		const message = escapeHtml(values.message);
		// Subject goes in a header, not HTML, so just strip line breaks
		const subject = values.subject.replace(/[\r\n]+/g, " ");

		// Awaited so the serverless function isn't frozen before the email goes out
		try {
			const { error } = await resend.emails.send({
				from: "Pixel Mountain Creative <hello@pixelmountain.ca>",
				to: ["hello@pixelmountain.ca"],
				subject: `Pixel Mountain Contact Form: ${subject}`,
				html: `<strong>New Contact Form Submission:</strong><br><br><strong>Name:</strong><p>${name}</p><br><strong>Email:</strong><p>${email}</p><br><strong>Message:</strong><br><p>${message}</p>`
			});
			if (error) throw error;
		} catch (error) {
			console.error({ error });
			return fail(500, { error: true, values });
		}

		// Track the submission in Plausible via its Events API, so honeypot hits aren't counted.
		// Visitor's user agent and IP are forwarded so Plausible attributes it to them.
		// Awaited so the serverless function isn't frozen before the request goes out.
		if (!dev) {
			await fetch("https://plausible.io/api/event", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"User-Agent": event.request.headers.get("user-agent") ?? "",
					"X-Forwarded-For": event.getClientAddress()
				},
				body: JSON.stringify({
					name: "Form Submission",
					url: event.url.href,
					domain: "pixelmountain.ca",
					referrer: event.request.headers.get("referer") ?? undefined
				})
			}).catch((error) => console.error({ error }));
		}

		throw redirect(303, "/contact/form-submit");
	}
} satisfies Actions;
