import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/resend";

export async function POST(req: NextRequest) {
  try {
    const { firstname, lastname, email, phone, service, message } =
      await req.json();
    const subject = `New Hire Request from ${firstname} ${lastname}`;
    const htmlMessage = `
      <h2>Hire Inquiry</h2>
      <p><strong>Name:</strong> ${firstname} ${lastname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;
    await sendEmail({
      to: "johnsenberdin2930@gmail.com",
      subject,
      message: htmlMessage,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
