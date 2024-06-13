import React from "react";

import Banner from "../../../components/Hero";
import Header from "../../../components/header";
import TitleSubtitle from "@/components/TitleSubtitle";

const News = () => {
  return (
    <>
      <Header />
      <Banner page="news" />
     
      <TitleSubtitle
        title="Don´t miss"
        subtitle="We are expanding rapidly, subscribe to our newsletter."
        overtitle="News"
      />
    </>
  );
};

export default News;
