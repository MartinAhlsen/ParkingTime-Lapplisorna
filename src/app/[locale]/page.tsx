"use client"

import { useTranslations } from 'next-intl';
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NextUIProvider } from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from '@/components/SplashScreen/SplashScreen';
import Header from '@/components/header';
import Banner from '@/components/Hero';
import SmartParkingSolution from '@/components/SmartParkingSolution';
import HowItWorks from '@/components/HowItWorks';

import WhyParkingTime from '@/components/WhyParkingTime';
import TrustedBy from '@/components/TrustedBy';
import Statistics from '@/components/Statistics';
import MatildaCEO from '@/components/MatildaCEO';
import FAQ from '@/components/FAQ';
import { trustedByOne, trustedByTwo } from "../../../public/data/trustedByData"
import Testimonial from '@/components/Testimonial';
import DownloadNow from '@/components/DownloadNow';
import Articles from '@/components/Articles';
import Footer from '@/components/Footer';

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

export default function Home() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";

      }, 1500);
    })();
  }, []);

  const t = useTranslations("home");
 
 

  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && <SplashScreen />}
      </AnimatePresence>
      <Header />
      <Banner page={"home"} />
      <NextUIProvider>
        <SmartParkingSolution />
        <HowItWorks />
        <WhyParkingTime />
        <Testimonial />
        <TrustedBy arrayOne={trustedByOne} arrayTwo={trustedByTwo} />
        <Articles />
        <DownloadNow />
        <Statistics />
        <FAQ />
        <MatildaCEO />
      </NextUIProvider>
      <Footer />
    </div>
  );
}