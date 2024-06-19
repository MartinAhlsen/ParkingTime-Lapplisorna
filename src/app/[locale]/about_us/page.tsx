import React from "react";

import MatildaImg from "../../../../public/Images/Matilda-image.png";
import PlaceholderImg from "../../../../public/Images/Placeholder- Image.png";
import Header from "../../../components/header";
import Banner from "../../../components/Hero";
import RightTextLeftImage from "../../../components/RightTextLeftImage";
import TitleSubtitle from "../../../components/TitleSubtitle";
import Story from "@/components/Story";
import Quotation from "@/components/Quotation";
import StaffCardClassic from "@/components/StaffCardClassic";
import Values from "@/components/Values";
import { useLocale, useTranslations } from "next-intl";
import Button from "@/components/Button";


const About_us = () => {
  const t = useTranslations("about_us");
  const b = useTranslations("buttons");
  const locale = useLocale();
  const team = useTranslations("team");
  const know = useTranslations("MatildaCEO");
  return (
    <>
      <Header />
      <Banner page="about" />

      <Story />
      <Values />
      <Quotation />
      <TitleSubtitle
        title={team("title")}
        subtitle={team("subtitle")}
        overtitle={null}
      />
      <div className="flex flex-col px-[5%] md:grid  md:grid-cols-2 lg:gap-[32px] lg:grid-cols-4  bg-pt-background ">
        <StaffCardClassic
          StaffImage={MatildaImg}
          name={"Matilda Öhman"}
          role={team("role1")}
        />
        <StaffCardClassic
          StaffImage={PlaceholderImg}
          name={"Johan E. Bengtsson"}
          role={team("role2")}
        />
        <StaffCardClassic
          StaffImage={PlaceholderImg}
          name={"Ingemar Öhman"}
          role={team("role3")}
        />
        <StaffCardClassic
          StaffImage={PlaceholderImg}
          name={"Fredrik Jodstam"}
          role={team("role4")}
        />
      </div>
      <TitleSubtitle
        title={know("title")}
        subtitle={know("paragraph")}
        overtitle={null}
      />
      <div className="flex justify-center py-12 bg-pt-background">
      <Button 
          text={b("contact_us")} 
          url={`/${locale}/contact_us`}
          colorTheme="dark" 
        />
      </div>
        
    </>
  );
};

export default About_us;
