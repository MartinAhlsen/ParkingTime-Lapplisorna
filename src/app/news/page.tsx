import React from 'react';
import Header from "../components/header/page";
import Hero from '../components/hero/page';

const News = () => {
  return (
    <>
      <Header />
      <Hero currentPath='/news'/>
      <h2>news</h2>
    </>
  );
};

export default News;
