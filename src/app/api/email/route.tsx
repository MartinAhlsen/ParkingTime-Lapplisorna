import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  console.log("Testing email");

  try {
    const { name, jobTitle, email, phoneNumber, reasonForContact, message } =
      await request.json();

    if (!email || !name || !message) {
      return NextResponse.json(
        { error: "Missing required fields: email, name, or message" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.MATILDA_EMAIL,
        pass: process.env.MATILDA_PASSWORD,
      },
    });

    const mailOptions: Mail.Options = {
      from: process.env.MATILDA_EMAIL,
      to: process.env.MY_GMAIL,
      subject: `Contact form message from ${name}`,
      text: `Name: ${name} \nEmail: ${email} \n${jobTitle ? `Job title: ${jobTitle} \n` : ""}${phoneNumber ? `Phone number: ${phoneNumber} \n` : ""}${reasonForContact ? `Reason for contact: ${reasonForContact} \n` : ""}\nMessage: ${message} \n`,
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
