import React from 'react';
import Header from "../components/header/page";
import HeroImage from '../components/hero/page';

const News: React.FC = () => {
  return (
    <>
      <Header />
      <HeroImage page="news" />
      <h2>news</h2>
    </>
  );
};

export default News;
