import React from "react";
import Header from "../components/header";
import Banner from "../components/Hero";
import StaffCard from "../components/StaffCard";
import MatildaImg from "../../../public/Images/Matilda-image.png"
import Will from "../../../public/Images/will.png"
import Beyonce from "../../../public/Images/beyonce.png"
import Brad from "../../../public/Images/man.png"
const About_us = () => {
  
    return (
        <>
        <Header/>
        <Banner page="about"/>
          <h2>About us</h2>
          <div className="flex flex-col md:grid md:grid-cols-2 bg-pt-background">
          <StaffCard staffImg={MatildaImg} hueA={20} hueB={40} text1="Matilda Öhman" text2="CEO"/>
          <StaffCard staffImg={Will} hueA={60} hueB={90} text1="Johan E. Bengtsson" text2="Chief Technical Officer"/>
          <StaffCard staffImg={Brad} hueA={80} hueB={120} text1="Ingemar Öhman" text2="Accountant"/>
          <StaffCard staffImg={Beyonce} hueA={100} hueB={140} text1="Fredrik Jodstam" text2="Buisseness strategist"/>

          </div>
          
        </>
    )
};

export default About_us
