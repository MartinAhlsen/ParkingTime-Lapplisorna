"use client"

import {useTranslations} from 'next-intl';
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NextUIProvider } from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from '@/components/SplashScreen/SplashScreen';
import Header from '@/components/header';
import Banner from '@/components/Hero';
import SmartParkingSolution from '@/components/SmartParkingSolution';
import HowItWorks from '@/components/HowItWorks';
import TitleSubtitle from '@/components/TitleSubtitle';
import WhyParkingTime from '@/components/WhyParkingTime';
import TrustedBy from '@/components/TrustedBy';
import Statistics from '@/components/Statistics';
import MatildaCEO from '@/components/MatildaCEO';
import FAQ from '@/components/FAQ';
import { trustedByOne, trustedByTwo } from "../../../public/data/trustedByData"
import Testimonial from '@/components/Testimonial';
import DownloadNow from '@/components/DownloadNow';
import Articles from '@/components/Articles';
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
  const [isAnimationAlreadyRun, setAnimationAlreadyRun] = useState(false);

  
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


  
  
  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && <SplashScreen />}
      </AnimatePresence>
      <Header />
      <Banner page={"home"} />
      <NextUIProvider>
        <SmartParkingSolution />
        <HowItWorks/>
        <WhyParkingTime />
       
        <Testimonial />

        <TrustedBy arrayOne={trustedByOne} arrayTwo={trustedByTwo} />
        <Statistics />
        <DownloadNow />
        <Articles />
        <MatildaCEO />
        
        
        
        <FAQ />
      </NextUIProvider>
    </div>
  );
}