"client component";

import type { Metadata } from "next";
import "./globals.css";
import TitleSubtitle from "./components/TitleSubtitle";
import WhyParkingTime from "./components/WhyParkingTime";
import Statistics from "./components/Statistics";
import FAQ from "./components/FAQ";
import React from "react";
import ReactDOM from "react-dom/client";
import { Lato, Roboto, MedievalSharp } from "next/font/google";
import Button from "@/app/components/Button";

interface ButtonProperties {
  text: string;
  url: string;
  colorTheme: "light" | "dark";
  formCategoryState?: string;
}

const TestButton: ButtonProperties = {
  text: "Test",
  url: "/se/news",
  colorTheme: "dark",
  // formCategoryState?: string;
};

export default function Home() {
  return (
    <>
      <main>Parking Time</main>
      <Button {...TestButton} />

      <TitleSubtitle title="How it works?" subtitle={null} overtitle={null} />
      <WhyParkingTime />
      <TitleSubtitle
        title="Customer testimonials"
        subtitle="Hear from some of our client"
        overtitle={null}
      />

      <TitleSubtitle
        title="Don´t miss"
        subtitle="We are expanding rapidly, subscribe to our newsletter."
        overtitle="News"
      />

      <Statistics />
      <TitleSubtitle
        title="Do you have a question?"
        subtitle="Here some common questions answered"
        overtitle="FAQ"
      />
      <FAQ />
    </>
  );
}
