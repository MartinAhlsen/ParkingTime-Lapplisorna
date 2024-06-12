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
import TitleSubtitle from '@/components/TitleSubtitle';
import WhyParkingTime from '@/components/WhyParkingTime';
import TrustedBy from '@/components/TrustedBy';
import Statistics from '@/components/Statistics';
import MatildaCEO from '@/components/MatildaCEO';
import FAQ from '@/components/FAQ';
import { trustedByOne, trustedByTwo } from "../../../public/data/trustedByData.js"
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
        window.scrollTo(0, 0);
      }, 2000);
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
        <TitleSubtitle
          title={t("Comp_2_title")}
          subtitle={null}
          overtitle={null}
        />
        <WhyParkingTime />
        <TitleSubtitle
          title={t("Comp_3_title")}
          subtitle={t("Comp_3_subtitle")}
          overtitle={null}
        />

        <TitleSubtitle
          title={t("Comp_4_title")}
          subtitle={t("Comp_4_subtitle")}
          overtitle={t("Comp_4_overtitle")}
        />

        {/*<TrustedBy arrayOne={trustedByOne} arrayTwo={trustedByTwo} /> */}
        <Statistics />
        <MatildaCEO />
        <TitleSubtitle
          title={t("Comp_5_title")}
          subtitle={t("Comp_5_subtitle")}
          overtitle={t("Comp_5_overtitle")}
        />
        <FAQ />
      </NextUIProvider>
    </div>
  );
}