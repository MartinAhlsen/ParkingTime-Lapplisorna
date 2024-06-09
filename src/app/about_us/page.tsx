import React from "react";
import Header from "../components/header";
import Banner from "../components/Hero";
import TitleSubtitle from "../components/TitleSubtitle";
import Footer from "../components/Footer";
import RightTextLeftImage from "../components/RightTextLeftImage";

const About_us = () => {
  
    return (
        <>
        <Header/>
        <Banner page="about "/>
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
          <TitleSubtitle
            title="Want to know more?"
            subtitle="Contact us to find out more about our solution and how we can implement it in your municipality"
            overtitle={null}
            />
            <Footer />
          
        </>
    )
};

export default About_us
