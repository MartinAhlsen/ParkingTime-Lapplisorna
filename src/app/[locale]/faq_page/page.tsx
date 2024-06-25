import React from "react";

import Banner from "../../../components/Hero";
import Header from "../../../components/header";

import { useTranslations } from "next-intl";

import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

const Faq_page = () => {
const t = useTranslations("home")

  return (
    <>
      <Header />
      <Banner page="news" />
      <FAQ />
      <Footer/>
    </>
  );
};

export default Faq_page;