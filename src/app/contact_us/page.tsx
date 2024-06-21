"use client";


import { useTranslations } from "next-intl";
import TitleSubtitle from "../components/TitleSubtitle";

const Contact_us = () => {
  const t = useTranslations("contact_us")


  return (
    <>
      <div className="contactUs bg-pt-gray2  h-screen w-screen">
        <p>
        title={t("title")}
        </p>
        <TitleSubtitle
          title={t("title")}
          subtitle={t("paragraph")}
        />
        <h2>Hej</h2>
      </div>
    </>
  );
};

export default Contact_us;
