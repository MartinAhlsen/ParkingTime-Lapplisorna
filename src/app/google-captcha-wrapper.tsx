"use client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import React from "react";

export default function GoogleCaptchaWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const recaptchaKey = process.env.RECAPTCHA_SECRET_KEY;
  console.log("RECAPTCHA_SECRET_KEY" + recaptchaKey)
  if (!recaptchaKey) {
    console.error("reCAPTCHA site key is not defined");
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaKey ?? ""}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
