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

const About_us = () => {
  return (
    <>
      <Header />
      <Banner page="about" />
      

      <RightTextLeftImage />
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
      <div className="flex flex-col px-[5%] lg:grid  lg:grid-cols-2 2xl:grid-cols-4  bg-pt-background ">
        
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
