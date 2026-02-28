import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
    name: string;
    email: string;
    message: string;
}

export async function POST(req: NextRequest) {
    try {
        const body: ContactPayload = await req.json();
        const { name, email, message } = body;

        // Server-side validation
        if (!name || name.trim().length < 2) {
            return NextResponse.json({ error: "Name must be at least 2 characters long." }, { status: 400 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
        }

        if (!message || message.trim().length < 10) {
            return NextResponse.json({ error: "Message must be at least 10 characters long." }, { status: 400 });
        }

        // Attempt to send email if SMTP environment variables exist
        const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env;

        if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_EMAIL) {
            console.warn("SMTP credentials not found in environment variables. Simulating success for development.");
            // Simulate network delay
            await new Promise((resolve) => setTimeout(resolve, 1500));
            return NextResponse.json({ success: true, message: "Simulated success (missing SMTP config)." }, { status: 200 });
        }

        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: parseInt(SMTP_PORT),
            secure: parseInt(SMTP_PORT) === 465, // true for 465, false for other ports
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${SMTP_USER}>`, // Send from authenticated user
            replyTo: email,
            to: CONTACT_EMAIL, // Your receiving email
            subject: `New Portfolio Contact Form Submission from ${name}`,
            text: `You have a new message from ${name} (${email}):\n\n${message}`,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
        });

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 });
    }
}
