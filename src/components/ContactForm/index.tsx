import React, { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";
import GoogleCaptchaWrapper from "@/app/google-captcha-wrapper";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";

interface FormData {
  name: string;
  jobTitle: string;
  email: string;
  phoneNumber?: string;
  reasonForContact?: string;
  message: string;
  terms: boolean;
  gRecaptchaToken: string;
}

export function Home2() {
  return (
    <GoogleCaptchaWrapper>
      <HomeInside />
    </GoogleCaptchaWrapper>
  );
}

function HomeInside() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [notification, setNotification] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showMessagePopup, setShowMessagePopup] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      if (executeRecaptcha) {
        const gRecaptchaToken = await executeRecaptcha("enquiryFormSubmit");
        await submitEnquiryForm({ ...data, gRecaptchaToken });
      }
    } catch (error) {
      console.log("Recaptcha execution error:", error);
      setNotification("Recaptcha execution error");
    } finally {
      setIsLoading(false);
    }
  };

  const submitEnquiryForm = async (formData: FormData) => {
    try {
      const response = await axios.post("/api/contactFormSubmit", formData);

      if (response.data.success) {
        setNotification(`Success with score: ${response.data.score}`);
        await axios.post("/api/email", formData);
        setShowMessagePopup(true);
        setTimeout(() => setShowMessagePopup(false), 8000);
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
        <form
          id="contactForm"
          onSubmit={handleSubmit(onSubmit)}
          className="bg-pt-gray2 p-4"
        >
          <div className="wrapperName mb-5">
            <label
              htmlFor="name"
              className="mb-5 block text-base font-medium text-black p1"
            >
              {t("name")}
              {
                <span
                  className={`ml-1 ${errors.name ? "text-red-500" : "text-black"}`}
                >
                  *
                </span>
              }
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              className={`form-control w-full border border-black rounded-md bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md p2 ${errors.name ? "border-red-500" : ""}`}
              placeholder={t("namePlaceholder")}
            />
            {errors.name && (
              <span className="text-red-500">{t("required")}</span>
            )}
          </div>
          <div className="wrapperJobTitle mb-5">
            <label
              htmlFor="jobTitle"
              className="mb-5 block text-base font-medium text-black p1"
            >
              {t("jobTitle")}
            </label>
            <input
              type="text"
              {...register("jobTitle")}
              className={`form-control w-full border border-black rounded-md bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md p2`}
              placeholder={t("jobTitlePlaceholder")}
            />
          </div>
          <div className="wrapper flex flex-col md:flex-row md:gap-3">
            <div className="flex-grow wrapperEmail mb-5">
              <label
                htmlFor="email"
                className="mb-5 block text-base font-medium text-black p1"
              >
                {t("email")}
                {
                  <span
                    className={`ml-1 ${errors.email ? "text-red-500" : "text-black"}`}
                  >
                    *
                  </span>
                }
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className={`form-control w-full border border-black rounded-md bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md p2 ${errors.email ? "border-red-500" : ""}`}
                placeholder={t("emailPlaceholder")}
              />
              {errors.email && (
                <span className="text-red-500">{t("required")}</span>
              )}
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
                {...register("phoneNumber")}
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
              {...register("reasonForContact")}
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
              {
                <span
                  className={`ml-1 ${errors.message ? "text-red-500" : "text-black"}`}
                >
                  *
                </span>
              }
            </label>
            <textarea
              rows={4}
              {...register("message", { required: true })}
              className={`form-control w-full border border-black rounded-md bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md p2 ${errors.message ? "border-red-500" : ""}`}
              placeholder={t("writeMessagePlaceholder")}
            />
            {errors.message && (
              <span className="text-red-500">{t("required")}</span>
            )}
          </div>
          <p className="p3 mb-5">
            {t("recaptcha1")}
            <a
              className="text-blue-500"
              href="https://policies.google.com/privacy"
            >{` ${t("recaptcha2")} `}</a>{" "}
            {t("recaptcha3")}
            <a
              className="text-blue-500"
              href="https://policies.google.com/terms"
            >{` ${t("recaptcha4")} `}</a>
            {t("recaptcha5")}
          </p>
          {/* {notification && <p className="mt-3 text-info">{notification}</p>} */}
          <div className="wrapperTerms mb-5 form-check">
            <input
              type="checkbox"
              {...register("terms", { required: true })}
              className="form-check-input"
            />
            <label className="form-check-label ml-1">{t("terms")}*</label>
            {errors.terms && (
              <span className="text-red-500 ml-1">{t("agreeToTerms")}</span>
            )}
          </div>

          <div className="wrapperButton flex items-center relative">
            <Button colorTheme="dark" type="submit" text={tb("sendMessage")} />
            {showMessagePopup && (
              <div className="popup bg-[#63d285] text-white  ml-3 absolute inset-y-0 left-[-13px] rounded-full button-text py-[15px] px-[32px] h-[48px] w-[303px] flex justify-center items-center text-nowrap">
                Message sent successfully!
              </div>
            )}
            {isLoading && (
              <div className="loading-spinner ml-3">
                <svg
                  className="animate-spin h-5 w-5 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              </div>
            )}
          </div>
        </form>
      </main>
    </div>
  );
}

export default HomeInside;
