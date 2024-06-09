"use client";
import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import { AnimatePresence } from "framer-motion";
import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './components/header';
import Button from "./components/Button";
import Banner from "./components/Hero";
import { Ban } from "lucide";
import { NextUIProvider } from "@nextui-org/react";
import SmartParkingSolution from "./components/Statistics/SmartParkingSolution";
import TitleSubtitle from "./components/TitleSubtitle";
import WhyParkingTime from "./components/WhyParkingTime";
import TrustedBy from "./components/TrustedBy";
import Statistics from "./components/Statistics";
import MatildaCEO from "./components/MatildaCEO";
import FAQ from "./components/FAQ";
import { trustedByOne, trustedByTwo } from "../../public/data/trustedByData";

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
};
const App = () => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false)
        document.body.style.cursor = 'default'
        window.scrollTo(0, 0)
      }, 2000)
    })()
  }, [])
  return (<div>
    <AnimatePresence mode="wait">
          {isLoading && <SplashScreen />}
        </AnimatePresence>
    
        <Header />
        <Banner page={"home"}/>
      <main>Parking Time</main>
      <Button {...TestButton} />
      <NextUIProvider>
          
          <SmartParkingSolution />
          <TitleSubtitle
            title="How it works?"
            subtitle={null}
            overtitle={null}
          />
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

          <TrustedBy arrayOne={trustedByOne} arrayTwo={trustedByTwo} />
          <Statistics />
          <MatildaCEO />
          <TitleSubtitle
            title="Do you have a question?"
            subtitle="Here some common questions answered"
            overtitle="FAQ"
          />
          <FAQ />
        </NextUIProvider>
    </div>);
}

export default App;
