import type { Actions } from "./$types";
import { Resend } from "resend";
import { redirect } from "@sveltejs/kit";

export const actions = {
	default: async (event) => {
		// Submit contact form
		const resend = new Resend(import.meta.env.VITE_RESEND_EMAIL_API_KEY);
		const data = await event.request.formData();
		const email = data.get("email");
		const name = data.get("name");
		const message = data.get("message");
		const subject = data.get("subject");

		(async function () {
			const { data, error } = await resend.emails.send({
				from: "Pixel Mountain Creative <hello@pixelmountain.ca>",
				to: ["hello@pixelmountain.ca"],
				subject: `Pixel Mountain Contact Form: ${subject}`,
				html: `<strong>New Contact Form Submission:</strong><br><br><strong>Name:</strong><p>${name}</p><br><strong>Email:</strong><p>${email}</p><br><strong>Message:</strong><br><p>${message}</p>`
			});

			if (error) {
				return console.error({ error });
			}

			console.log({ data });
		})();
		throw redirect(303, "/contact/form-submit");
	}
} satisfies Actions;
