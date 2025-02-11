import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  const { firstName, lastName, email, companySize, bookDemo } = await request.json();

  try {
    await resend.emails.send({
      from: "Inbound Lead <hello@essio.ai>",
      to: ["hello@essio.ai"],
      subject: `New Inbound Lead: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Lead Details</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 5px 0;"><strong>Company Size:</strong> ${companySize}</p>
          </div>
          <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
            <h3 style="color: #555;">Demo Request:</h3>
            <p style="line-height: 1.6;">${
              bookDemo ? "Yes, I would like to schedule a product demo." : "No, I do not need a demo."
            }</p>
          </div>
        </div>
      `,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({ success: false, message: "Failed to send email.", error: errorMessage });
  }

  try {
    await resend.emails.send({
      from: "Essio Onboarding <hello@essio.ai>",
      to: [email],
      subject: `Welcome to Essio! We Are Generating Your Report`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333; text-align: center;">Thank you for contacting Essio</h1>
          
          <div style="background: #f9f9f9; padding: 25px; border-radius: 10px; margin: 20px 0;">
            <p style="font-size: 16px; line-height: 1.6;">Dear ${firstName},</p>
            
            <p style="font-size: 16px; line-height: 1.6;">Thank you for contacting Essio. We've received your request for a report and our team will get in contact with you shortly.</p>
            
            <p style="font-size: 16px; line-height: 1.6;">We typically respond within 24-48 business hours. In the meantime, you can book a meeting with our team using the link below:</p>

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://calendar.app.google/KL6gEu9GGsLepgm18" 
                 style="background-color: #007bff; 
                        color: white; 
                        padding: 12px 25px; 
                        text-decoration: none; 
                        border-radius: 5px; 
                        font-weight: bold;">
                Book a Meeting
              </a>
            </div>

            <p style="font-size: 16px; line-height: 1.6;">You can also learn more about how we help brands optimize their visibility across AI platforms on our website.</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #666; font-size: 14px;">Best regards,<br>The Essio Team</p>
          </div>
        </div>
      `,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({ success: false, message: "Failed to send email.", error: errorMessage });
  }

  return NextResponse.json({ success: true });
}
