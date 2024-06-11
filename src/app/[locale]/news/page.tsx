import React from "react";
import TitleSubtitle from "../../../components/TitleSubtitle";
import Banner from "../../../components/Hero";
import Header from "../../../components/header";

const News = () => {
  return (
    <>
      <Header />
      <Banner page="news" />
      <h2>news</h2>
      <TitleSubtitle
        title="Don´t miss"
        subtitle="We are expanding rapidly, subscribe to our newsletter."
        overtitle="News"
      />
    </>
  );
};

export default News;

