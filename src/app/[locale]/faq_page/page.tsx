import React from "react";
import Header from "../../../components/header";
import Banner from "../../../components/Hero";
import FAQ from "@/components/FAQ";

const faq_page = () => {
  return (
    <>
      <Header />
      <Banner page="faq_page" />
      <FAQ />
      
    </>
  );
};

export default faq_page;
