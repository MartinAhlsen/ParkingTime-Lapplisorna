// src/app/api/contactFormSubmit/route.tsx
import { NextResponse, NextRequest } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
  console.log("testing POST")
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json({
      success: false,
      message: "reCAPTCHA secret key is not defined",
    });
  }

  const postData = await request.json();
  const { gRecaptchaToken, name, email, phoneNumber, reasonForContact, message, terms, notification  } =
    postData;

  console.log(
    "gRecaptchaToken, name, email, phoneNumber, reasonForContact, message, terms, notification:",
    gRecaptchaToken?.slice(0, 10) + "...",
    name,
    email,
    phoneNumber,
    reasonForContact,
    message,
    terms,
    notification
  );

  try {
    const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;
    const res = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (res.data?.success && res.data?.score > 0.5) {
      // Save data to the database from here
      console.log(
        "Saving data to the database:",
        name,
        email,

      );
      console.log("res.data?.score:", res.data?.score);

      return NextResponse.json({
        success: true,
        name,
        score: res.data?.score,
      });
    } else {
      console.log("fail: res.data?.score:", res.data?.score);
      return NextResponse.json({
        success: false,
        message: "reCAPTCHA verification failed",
        score: res.data?.score,
      });
    }
  } catch (err) {
    // Assert err as an instance of Error
    if (err instanceof Error) {
      console.log("recaptcha error:", err.message);
      return NextResponse.json({
        success: false,
        message: "Error verifying reCAPTCHA",
        error: err.message,
      });
    } else {
      console.log("recaptcha unknown error:", err);
      return NextResponse.json({
        success: false,
        message: "Unknown error verifying reCAPTCHA",
      });
    }
  }
}
