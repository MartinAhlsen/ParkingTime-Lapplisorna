"use client";

import React, { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";
import GoogleCaptchaWrapper from "@/app/google-captcha-wrapper";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/app/utils/sendEmail";
import Button from "@/components/Button";

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
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
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
        email,
        phoneNumber,
        reasonForContact,
        message,
        terms,
        gRecaptchaToken,
      });

      if (response.data.success) {
        setNotification(`Success with score: ${response.data.score}`);
      } else {
        setNotification(`Failure with score: ${response.data.score}`);
      }
    } catch (error) {
      console.log("Form submission error:", error);
      setNotification("Form submission error");
    }
  };

  return (
    <div className="container">
      <main className="mt-5">
        <form onSubmit={handleSubmitForm} className="bg-pt-gray2 p-4">
          <div className="wrapperName mb-5">
            <label
              htmlFor="name"
              className="mb-5 block text-base font-medium text-black p1"
            >
              First and last name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control w-full border border-pt-primary rounded-md bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md p2"
              placeholder="First and last name"
              //   {...register("name", { required: true })}
            />
          </div>
          <div className="wrapper flex flex-col md:flex-row md:gap-3">
            <div className="flex-grow wrapperEmail mb-5">
              <label
                htmlFor="email"
                className="mb-5 block text-base font-medium text-black p1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control w-full border border-pt-primary rounded-md bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md p2"
                placeholder="example@domain.com"
                //   {...register("email", { required: true })}
              />
            </div>
            <div className="wrapperPhoneNumber mb-5">
              <label
                htmlFor="phoneNumber"
                className="mb-5 block text-base font-medium text-black p1"
              >
                Phone number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setphoneNumber(e.target.value)}
                className="form-control w-full border border-pt-primary rounded-md bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md p2"
                placeholder="+46708123456"
                //   {...register("phoneNumber", { required: true })}
              />
            </div>
          </div>
          <div className="wrapperRFC mb-5">
            <label
              htmlFor="reasonForContact"
              className="mb-5 block text-base font-medium text-black p1"
            >
              Reason for contact
            </label>
            <input
              type="text"
              name="reasonForContact"
              value={reasonForContact}
              onChange={(e) => setReasonForContact(e.target.value)}
              className="form-control w-full border border-pt-primary rounded-md bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md p2"
              placeholder="Reason for contact"
              //   {...register("name", { required: true })}
            />
          </div>
          <div className="wrapperMessage mb-5">
            <label
              htmlFor="message"
              className="mb-5 block text-base font-medium text-black p1"
            >
              Write us a message
            </label>
            <textarea
              rows={4}
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-control w-full border border-pt-primary rounded-md bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md p2"
              //   {...register("phoneNumber", { required: true })}
              placeholder="Type your message"
              //   {...register("message", { required: true })}
            />
          </div>
          <div className="wrapperTems mb-5 form-check">
            <input
              type="checkbox"
              name="terms"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
              className="form-check-input"
            />
            <label className="form-check-label">I accept the terms</label>
          </div>
          <div className="wrapperButton">
            <Button colorTheme="dark" type="submit" text="Send message" />
          </div>
          {notification && <p className="mt-3 text-info">{notification}</p>}
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
