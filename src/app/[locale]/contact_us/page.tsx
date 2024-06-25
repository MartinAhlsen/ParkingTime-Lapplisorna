"use client";

import React from "react";
import Header from "../../../components/header";
import Banner from "../../../components/Hero";
import ContactLink from "@/components/ContactLinks";
import MailIcon from "@/../public/Images/Email.png";
import PhoneIcon from "@/../public/Images/Phone.png";
import MapLocationIcon from "@/../public/Images/Pin.png";
import { Home2 } from "@/components/ContactForm";

const Contact_us = () => {
  return (
    <>
      <Header />
      <Banner page="contact" />
      <div className="contactContainer flex flex-col md:flex-row md:p-[80px] pt-[100px] px-[30px] pb-[80px] justify-evenly bg-pt-gray2">
        <div className="informationContainer flex flex-col md:basis-2/5">
          <h3 className="h3">Contact us</h3>
          <p className="p1">
            Wheter you have a question, or need assistance, please fill out the
            form below, and our team will get back to you as soon as possible
          </p>
          <div className="linkWrapper flex flex-col gap-10 py-10">
            <ContactLink
              imageLink={MailIcon}
              title={"mail icon"}
              paragraph={"info@parkingtime.se"}
            />
            <ContactLink
              imageLink={PhoneIcon}
              title={"phone icon"}
              paragraph={"+46 72 399 15 15"}
            />
            <ContactLink
              imageLink={MapLocationIcon}
              title={"maplocation icon"}
              paragraph={"Nyköpingsvägen 52 | 611 50"}
              paragraph2={"Nyköping"}
            />
          </div>
        </div>
        <div className="formWwrapper md:basis-2/5">
          <Home2 />
        </div>
      </div>
    </>
  );
};

export default Contact_us;
