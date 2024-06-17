"use client";

import React from "react";
import Image from "next/image";
import MatildaImg from "../../../public/Images/Matilda-image.png";
import "./styles.css";
import StaffCard from "../StaffCardanimated";
import { useTranslations } from "next-intl";

const MatildaCEO: React.FC = () => {
  const t = useTranslations("MatildaCEO");
  return (
    <div className="h-[840px] md:h-[494px] bg-pt-primary flex flex-col text-center text-white items-center p-6 md:flex-row ">
      <div className="flex flex-col basis-1/2 items-center">
        <StaffCard
          staffImg={MatildaImg}
          hueA={20}
          hueB={40}
          text1={t("text1")}
          text2={"Matilda@email.com"}
        />
      </div>

      <div className="flex flex-col basis-1/2 items-start">
        <p className="h4 pb-10 pt-6 md:pt-0 text-left">{t("title")}</p>
        <p className="p2 text-left">{t("paragraph")}</p>
      </div>
    </div>
  );
};

export default MatildaCEO;
