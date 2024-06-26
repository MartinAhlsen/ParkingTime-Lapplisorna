import React from "react";

import Banner from "../../../components/Hero";
import Header from "../../../components/header";
import TitleSubtitle from "@/components/TitleSubtitle";
import { useTranslations } from "next-intl";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";

const News = () => {
const t = useTranslations("home")

  return (
    <>
      <Header />
      <Banner page="news" />
      <Articles />
      <Footer/>
    </>
  );
};

export default News;