import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  console.log("testing email")
  try {
    const { email, name, message } = await request.json();

    if (!email || !name || !message) {
      return NextResponse.json(
        { error: "Missing required fields: email, name, or message" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.MY_GMAIL,
        pass: process.env.MY_GMAIL_PASSWORD,
      },
    });

    const mailOptions: Mail.Options = {
      from: process.env.MY_GMAIL,
      to: process.env.MY_GMAIL,
      subject: `Message from ${name} (${email})`,
      text: message,
    };

    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transporter.sendMail(mailOptions, function (err) {
          if (err) {
            reject(err);
          } else {
            resolve("Email sent");
          }
        });
      });

    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
