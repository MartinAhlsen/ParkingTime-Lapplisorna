"use client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import React from "react";
import "dotenv/config";

const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
if (!recaptchaKey) {
  console.error("reCAPTCHA site key is not defined");
}

export default function GoogleCaptchaWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  // const recaptchaKey = "6LeNVPMpAAAAAMXmnLDV2PSLLBDsqjPGcMCJIBTY";
  console.log("logging key" + process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY)
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
