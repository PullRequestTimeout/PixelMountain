import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request }) => {
	console.log("Received a request to send an email");
	try {
		const data = await request.json(); // Parse the JSON body

		// do something with the data

		// Simulate a server delay
		setTimeout(() => {
			console.log(data);
		}, 2000);

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ success: false, error: "Invalid request" }), {
			status: 400
		});
	}
};
