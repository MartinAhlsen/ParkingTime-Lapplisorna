import React from "react";

import Banner from "../../../components/Hero";
import Header from "../../../components/header";
import TitleSubtitle from "@/components/TitleSubtitle";
import { useTranslations } from "next-intl";

const News = () => {
const t = useTranslations("home")

  return (
    <>
      <Header />
      <Banner page="news" />
     
      <TitleSubtitle
        title={t("Comp_4_title")}
        subtitle={t("Comp_4_subtitle")}
        overtitle={t("Comp_4_overtitle")}
      />
    </>
  );
};

export default News;