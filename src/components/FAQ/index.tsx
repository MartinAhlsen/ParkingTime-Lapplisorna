"use client"
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import styles from "./FAQ.module.css"
import { useLocale, useTranslations } from "next-intl";
import TitleSubtitle from "../TitleSubtitle";
import Button from "../Button";

const FAQ = () => {
  const b = useTranslations("buttons");
  const x = useTranslations("home");
  const t = useTranslations("FAQ");
  const locale = useLocale();
 
  return (
    <div >
      <TitleSubtitle
          title={x("Comp_5_title")}
          subtitle={x("Comp_5_subtitle")}
          overtitle={x("Comp_5_overtitle")}
        />
        <p id="faq"></p>
      <Accordion className="bg-[#ECF2F1] p-5 flex flex-col justify-center items-center" >
        <AccordionItem className="bg-white border h7 border-pt-lightgrayborder rounded-xl mb-2.5 transition-colors duration-300 ease-in-out flex flex-col  p-2.5 gap-2.5 text-lg font-bold w-[300px] md:w-[500px]" key="1" aria-label="Accordion 1" title={t("title1")} >
          <div className="font-normal">{t("answer1")}</div>
        </AccordionItem>
        <AccordionItem className="bg-white border h7 border-pt-lightgrayborder rounded-xl mb-2.5 transition-colors duration-300 ease-in-out flex flex-col  p-2.5 gap-2.5 text-lg font-bold w-[300px] md:w-[500px]" key="2" aria-label="Accordion 2" title={t("title2")}>
          <div className="font-normal">{t("answer2")}</div>
        </AccordionItem>
        <AccordionItem className="bg-white border h7 border-pt-lightgrayborder rounded-xl mb-2.5 transition-colors duration-300 ease-in-out flex flex-col  p-2.5 gap-2.5 text-lg font-bold w-[300px] md:w-[500px]" key="3" aria-label="Accordion 3" title={t("title3")} >
          <div className="font-normal">{t("answer3")}</div>
        </AccordionItem>
        <AccordionItem className="bg-white border h7 border-pt-lightgrayborder rounded-xl mb-2.5 transition-colors duration-300 ease-in-out flex flex-col  p-2.5 gap-2.5 text-lg font-bold w-[300px] md:w-[500px]" key="4" aria-label="Accordion 4" title={t("title4")}>
          <div className="font-normal">{t("answer4")}</div>
        </AccordionItem>
        <AccordionItem className="bg-white border h7 border-pt-lightgrayborder rounded-xl mb-2.5 transition-colors duration-300 ease-in-out flex flex-col  p-2.5 gap-2.5 text-lg font-bold w-[300px] md:w-[500px]" key="5" aria-label="Accordion 5" title={t("title5")} >
          <div className="font-normal">{t("answer5")}</div>
        </AccordionItem>
      </Accordion>
      <div className="flex justify-center pb-6">
      <Button 
          text={b("contact_us")} 
          url={`/${locale}/contact_us`}
          colorTheme="dark" 
        />
        </div>
    </div>
  );
}

export default FAQ;