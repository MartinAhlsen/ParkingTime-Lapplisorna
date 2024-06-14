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
import Quotation from "@/components/Quotation";
import Story from "@/components/Story";
import StaffCard2 from "@/components/StaffCard2";
import Quotation2 from "@/components/Quotation2";

const About_us = () => {
  return (
    <>
      <Header />
      <Banner page="about" />
      <Story/>
      <TitleSubtitle
        title="Our Values"
        subtitle="The things we believe in."
        overtitle={null}
      />
      <Quotation />
      <Quotation2 />
      <TitleSubtitle
        title="Meet our team"
        subtitle="Each member brings a unique blend of expertise, passion, and forward-thinking mindset."
        overtitle={null}
      />
      <div className="flex flex-col px-[5%] lg:grid  lg:grid-cols-2   bg-pt-background ">
        <StaffCard
          staffImg={MatildaImg}
          hueA={125}
          hueB={125}
          text1="Matilda Öhman"
          text2="CEO"
        />
        <StaffCard
          staffImg={Swedbank}
          hueA={115}
          hueB={115}
          text1="Johan E. Bengtsson"
          text2="CTO"
        />
        <StaffCard
          staffImg={Nordea}
          hueA={105}
          hueB={105}
          text1="Ingemar Öhman"
          text2="Accountant"
        />
        <StaffCard
          staffImg={Vattenfall}
          hueA={95}
          hueB={95}
          text1="Fredrik Jodstam"
          text2="Buisseness strategist"
        />
      </div>
      <TitleSubtitle
        title="Want to know more?"
        subtitle="Contact us to find out more about our solution and how we can implement it in your municipality"
        overtitle={null}
      />
      <div className="flex flex-col px-[5%] lg:grid  lg:grid-cols-2   bg-pt-background ">
        <StaffCard2
          staffImg={MatildaImg}
          hueA={125}
          hueB={125}
          text1="Matilda Öhman"
          text2="CEO"
        />
        <StaffCard2
          staffImg={Swedbank}
          hueA={115}
          hueB={115}
          text1="Johan E. Bengtsson"
          text2="CTO"
        />
        <StaffCard2
          staffImg={Nordea}
          hueA={105}
          hueB={105}
          text1="Ingemar Öhman"
          text2="Accountant"
        />
        <StaffCard2
          staffImg={Vattenfall}
          hueA={95}
          hueB={95}
          text1="Fredrik Jodstam"
          text2="Buisseness strategist"
        />
      </div>
    </>
  );
};

export default About_us;
