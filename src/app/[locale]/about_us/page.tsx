import React from "react";

import MatildaImg from "../../../../public/Images/Matilda-image.png";
import PlaceholderImg from "../../../../public/Images/Placeholder- Image.png";

import Header from "../../../components/header";
import Banner from "../../../components/Hero";
import RightTextLeftImage from "../../../components/RightTextLeftImage";
import TitleSubtitle from "../../../components/TitleSubtitle";

import Story from "@/components/Story";
import Quotation from "@/components/Quotation";
import StaffCardClassic from "@/components/StaffCardClassic";

const About_us = () => {
  return (
    <>
      <Header />
      <Banner page="about" />

      <Story />
      <TitleSubtitle
        title="Our Values"
        subtitle="The things we believe in."
        overtitle={null}
      />
      <Quotation />
      <TitleSubtitle
        title="Meet our team"
        subtitle="Each member brings a unique blend of expertise, passion, and forward-thinking mindset."
        overtitle={null}
      />
      <div className="flex flex-col px-[5%] md:grid  md:grid-cols-2 lg:gap-[32px] lg:grid-cols-4  bg-pt-background ">
        <StaffCardClassic StaffImage={MatildaImg} name={"Matilda Öhman"} role={"CEO"} />
        <StaffCardClassic StaffImage={PlaceholderImg} name={"Johan E. Bengtsson"} role={"Chief Technical Officer"} />
        <StaffCardClassic StaffImage={PlaceholderImg} name={"Ingemar Öhman"} role={"Accountant"} />
        <StaffCardClassic StaffImage={PlaceholderImg} name={"Fredrik Jodstam"} role={"Business Strategist"} />


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
