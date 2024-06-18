"use client";

import React from "react";
import Image from "next/image";
import MatildaImg from "../../../public/Images/Matilda-image.png";
import "./styles.css";
import { useLocale, useTranslations } from "next-intl";
import Button from "../Button";

const MatildaCEO: React.FC = () => {
  const t = useTranslations("MatildaCEO");
  const b = useTranslations("buttons");
  const locale = useLocale();

  return (
    <div className="h-[840px] md:h-[494px] bg-pt-primary flex flex-col text-center text-white items-center p-6 md:flex-row">
      <div className="flex flex-col basis-1/2 items-center">
                <Image className="rounded-[100%] p-8"
                    src={MatildaImg}
                    width={250}
                    height={250}
                    alt="Picture of the author"
                />
                <p className="h5">{t("text1")}</p>
                <p className="h6">{"Matilda@email.com"}</p>
            </div>

      <div className="flex flex-col basis-1/2 md:items-start text-center">
        <p className="h4 pb-10 pt-6 md:pt-0 text-center md:text-left">{t("title")}</p>
        <p className="p2 pb-10 pt-6 md:pt-0 text-center md:text-left lg:w-[40%]">{t("paragraph")}</p>
        <div className="flex justify-center pt-12">
        <Button 
          text={b("contact_us")} 
          url={`/${locale}/contact_us`} 
          colorTheme="light" 
        />
        </div>
      </div>
    </div>
  );
};

export default MatildaCEO;
