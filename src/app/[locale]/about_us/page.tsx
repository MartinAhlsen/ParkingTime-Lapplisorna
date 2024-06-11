import React from "react";

import MatildaImg from "../../../../public/Images/Matilda-image.png";
import Nordea from "../../../../public/Images/nordea.jpg";
import Vattenfall from "../../../../public/Images/vattenfall.jpg";
import Swedbank from "../../../../public/Images/swedbank.jpg";
import Header from "../../../components/header";
import Banner from "../../../components/Hero";
import RightTextLeftImage from "../../../components/RightTextLeftImage";
import TitleSubtitle from "../../../components/TitleSubtitle";
import StaffCard from "../../../components/StaffCard";

const About_us = () => {
  return (
    <>
      <Header />
      
      <h2>About us</h2>

      <RightTextLeftImage />
      <TitleSubtitle
        title="Our Values"
        subtitle="The things we believe in."
        overtitle={null}
      />
      <TitleSubtitle
        title="Meet our team"
        subtitle="Each member brings a unique blend of expertise, passion, and forward-thinking mindset."
        overtitle={null}
      />
      <div className="flex flex-col px-[5%] lg:grid  lg:grid-cols-2 2xl:grid-cols-4  bg-pt-background ">
        <StaffCard
          staffImg={MatildaImg}
          hueA={20}
          hueB={40}
          text1="Matilda Öhman"
          text2="CEO"
        />
        <StaffCard
          staffImg={Swedbank}
          hueA={60}
          hueB={90}
          text1="Johan E. Bengtsson"
          text2="CTO"
        />
        <StaffCard
          staffImg={Nordea}
          hueA={80}
          hueB={120}
          text1="Ingemar Öhman"
          text2="Accountant"
        />
        <StaffCard
          staffImg={Vattenfall}
          hueA={100}
          hueB={140}
          text1="Fredrik Jodstam"
          text2="Buisseness strategist"
        />
      </div>
      <TitleSubtitle
        title="Want to know more?"
        subtitle="Contact us to find out more about our solution and how we can implement it in your municipality"
        overtitle={null}
      />
    </>
  );
};

export default About_us;
