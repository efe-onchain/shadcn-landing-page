import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  const { firstName, lastName, email, subject, message } = await request.json();

  try {
    await resend.emails.send({
      from: "Inbound Lead <hello@essio.ai>",
      to: ["hello@essio.ai"],
      subject: `New Inbound Lead: ${subject}`,
      html: `<p>Message from ${firstName} ${lastName} (${email}):</p><p>${message}</p>`,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({ success: false, message: "Failed to send email.", error: errorMessage });
  }
}
