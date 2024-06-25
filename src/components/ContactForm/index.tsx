"use client";

import React, { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";
import GoogleCaptchaWrapper from "@/app/google-captcha-wrapper";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/app/utils/sendEmail";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";

interface PostData {
  gRecaptchaToken: string;
  name: string;
  email: string;
  terms: boolean;
}

export function Home2() {
  return (
    <GoogleCaptchaWrapper>
      <HomeInside />
    </GoogleCaptchaWrapper>
  );
}

function HomeInside() {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState(""); // New state for job title
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [reasonForContact, setReasonForContact] = useState("");
  const [message, setMessage] = useState("");
  const [terms, setTerms] = useState(false);
  const [notification, setNotification] = useState("");

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      console.log("Execute recaptcha not available yet");
      setNotification(
        "Execute recaptcha not available yet likely meaning key not recaptcha key not set"
      );
      return;
    }
    try {
      const gRecaptchaToken = await executeRecaptcha("enquiryFormSubmit");
      await submitEnquiryForm(gRecaptchaToken);
    } catch (error) {
      console.log("Recaptcha execution error:", error);
      setNotification("Recaptcha execution error");
    }
  };

  const submitEnquiryForm = async (gRecaptchaToken: string) => {
    try {
      const response = await axios.post("/api/contactFormSubmit", {
        name,
        jobTitle,
        email,
        phoneNumber,
        reasonForContact,
        message,
        terms,
        gRecaptchaToken,
      });

      if (response.data.success) {
        setNotification(`Success with score: ${response.data.score}`);
        const responseEmail = await axios.post("/api/email", {
          name,
          jobTitle,
          email,
          phoneNumber,
          reasonForContact,
          message,
          terms,
        });
      } else {
        setNotification(`Failure with score: ${response.data.score}`);
      }
    } catch (error) {
      console.log("Form submission error:", error);
      setNotification("Form submission error");
    }
  };

  const t = useTranslations("contact_us");
  const tb = useTranslations("buttons");

  return (
    <div className="container">
      <main className="mt-5">
        <form id="contactForm" onSubmit={handleSubmitForm} className="bg-pt-gray2 p-4">
          <div className="wrapperName mb-5">
            <label
              htmlFor="name"
              className="mb-5 block text-base font-medium text-black p1"
            >
              {t("name")}
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control w-full border border-black rounded-md bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md p2"
              placeholder={t("namePlaceholder")}
            />
          </div>
          <div className="wrapperJobTitle mb-5"> {/* New Job Title field */}
            <label
              htmlFor="jobTitle"
              className="mb-5 block text-base font-medium text-black p1"
            >
              {t("jobTitle")}
            </label>
            <input
              type="text"
              name="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="form-control w-full border border-black rounded-md bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md p2"
              placeholder={t("jobTitlePlaceholder")}
            />
          </div>
          <div className="wrapper flex flex-col md:flex-row md:gap-3">
            <div className="flex-grow wrapperEmail mb-5">
              <label
                htmlFor="email"
                className="mb-5 block text-base font-medium text-black p1"
                id="email"
              >
                {t("email")}
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control w-full border border-black rounded-md bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md p2"
                placeholder={t("emailPlaceholder")}
              />
            </div>
            <div className="wrapperPhoneNumber mb-5">
              <label
                htmlFor="phoneNumber"
                className="mb-5 block text-base font-medium text-black p1"
                id="phoneNumber"
              >
                {t("phoneNumber")}
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="form-control w-full border border-black rounded-md bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md p2"
                placeholder={t("phoneNumberPlaceholder")}
              />
            </div>
          </div>
          <div className="wrapperRFC mb-5">
            <label
              htmlFor="reasonForContact"
              className="mb-5 block text-base font-medium text-black p1"
              id="reasonForContact"
            >
              {t("reasonForContact")}
            </label>
            <input
              type="text"
              name="reasonForContact"
              value={reasonForContact}
              onChange={(e) => setReasonForContact(e.target.value)}
              className="form-control w-full border border-black rounded-md bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md p2"
              placeholder={t("reasonForContactPlaceholder")}
            />
          </div>
          <div className="wrapperMessage mb-5">
            <label
              htmlFor="message"
              className="mb-5 block text-base font-medium text-black p1"
              id="message"
            >
              {t("writeMessage")}
            </label>
            <textarea
              rows={4}
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-control w-full border border-black rounded-md bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md p2"
              placeholder={t("writeMessagePlaceholder")}
            />
          </div>
          <p className="p3 mb-5">
            {t("recaptcha1")}
            <a className="text-blue-500" href="https://policies.google.com/privacy">
              {` ${t("recaptcha2")} `}
            </a>
            {t("recaptcha3")}
            <a className="text-blue-500" href="https://policies.google.com/terms">
              {` ${t("recaptcha4")} `}
            </a>
            {t("recaptcha5")}
          </p>
          {notification && <p className="mt-3 text-info">{notification}</p>}
          <div className="wrapperTerms mb-5 form-check">
            <input
              type="checkbox"
              name="terms"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
              className="form-check-input"
            />
            <label className="form-check-label ml-1">{t("terms")}</label>
          </div>
          <div className="wrapperButton">
            <Button colorTheme="dark" type="submit" text={tb("sendMessage")} />
          </div>
        </form>
      </main>
    </div>
  );
}

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }
};
