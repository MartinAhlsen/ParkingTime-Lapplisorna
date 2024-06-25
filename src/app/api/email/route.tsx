import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  console.log("Testing email");

  try {
    const { email, name, message } = await request.json();

    // Check if required fields are present
    if (!email || !name || !message) {
      return NextResponse.json(
        { error: "Missing required fields: email, name, or message" },
        { status: 400 }
      );
    }

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.MY_GMAIL,        // Your Gmail address
        pass: process.env.MY_GMAIL_PASSWORD,   // Your Gmail password or App Password
      },
    });

    // Setup email data with unicode symbols
    const mailOptions: Mail.Options = {
      from: process.env.MY_GMAIL,        // Sender address
      to: process.env.MY_GMAIL,          // List of receivers (in this case, yourself)
      subject: `Message from ${name} (${email})`, // Subject line
      text: message,                      // Plain text body
    };

    // Function to send email and handle promises
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
