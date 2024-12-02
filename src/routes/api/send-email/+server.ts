import type { RequestHandler } from "./$types";
import { Resend } from "resend";

export const POST: RequestHandler = async ({ request }) => {
	try {
		const data = await request.json(); // Parse the JSON body
		const resend = new Resend(import.meta.env.VITE_RESEND_EMAIL_API_KEY);
		const { packageName, businessName, businessIndustry, websiteGoal, name, email, phone } = data;

		// Send the email
		(async function () {
			const { data, error } = await resend.emails.send({
				from: "Pixel Mountain Creative <hello@pixelmountain.ca>",
				to: ["hello@pixelmountain.ca"],
				subject: `Package Inquiry from ${name}`,
				html: `<strong>New Package Inquiry:</strong><br><br><strong>Name:</strong><p>${name}</p><br><strong>Email:</strong><p>${email}</p><br><strong>Phone:</strong><p>${phone}</p><br><strong>Package:</strong><p>${packageName}</p><br><strong>Business Name:</strong><p>${businessName}</p><br><strong>Business Industry:</strong><p>${businessIndustry}</p><br><strong>Website Goal:</strong><p>${websiteGoal}</p>`
			});

			if (error) {
				return console.error({ error });
			}
		})();

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ success: false, error: "Invalid request" }), {
			status: 400
		});
	}
};
