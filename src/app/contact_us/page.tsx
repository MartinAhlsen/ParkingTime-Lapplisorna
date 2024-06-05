"use client";

import TitleSubtitle from "../components/TitleSubtitle";
import ContactForm from "../components/ContactForm";

const Contact_us = () => {
  return (
    <>
      <div className="contactUs bg-pt-gray2">
        <TitleSubtitle
          title="Contact us"
          subtitle="Whether you have a question, feedback, or need assistance, please fill out the form below, and our team will get back to you as soon as possible."
        />
      </div>
      <ContactForm />
    </>
  );
};

export default Contact_us;
