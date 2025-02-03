import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "All fields are required." }, { status: 400 });
        }

        console.log(`New contact form submission:
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `);

        return NextResponse.json({ message: "Message received successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Error processing contact form:", error);
        return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 });
    }
}