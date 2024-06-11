<<<<<<< HEAD
"use client"

import React from "react";
import Image from "next/image";
import MatildaImg from "../../../../public/Images/Matilda-image.png";
import "./styles.css";
import StaffCard from "../StaffCard";



const MatildaCEO: React.FC = () => {
  return (
    <div className="h-[840px] md:h-[494px] bg-pt-primary flex flex-col text-center text-white items-center p-6 md:flex-row ">
      

      <div className="flex flex-col basis-1/2 items-center">
      <StaffCard staffImg={MatildaImg} hueA={20} hueB={40} text1={"Matilda Öhman"} text2={"Matilda@email.com"} />
      </div>

      <div className="flex flex-col basis-1/2 items-start">
        <p className="h4 pb-10 pt-6 md:pt-0 text-left">Want to know more?</p>
        <p className="p2 text-left">Contact us to find out more about our solution and how we can implement it in your municipality.</p>
      </div>
    </div>
  );
=======
import Image from "next/image";
import MatildaImg from "../../../../public/Images/Matilda-image.png"
import { useTranslations } from "next-intl";

const MatildaCEO = () => {
    const t = useTranslations("MatildaCEO");
    return (
        <div className="h-[840px] md:h-[494px] bg-pt-primary flex flex-col text-center text-white items-center p-6 md:flex-row	">
            <div className="flex flex-col basis-1/2 items-center">
                <Image className="rounded-full p-8"
                    src={MatildaImg}
                    width={250}
                    height={250}
                    alt="Picture of the author"
                />
                <p className="h5">Matilda Öhman, CEO</p>
                <p className="h6">Matilda@email.123</p>
            </div>
            <div className="flex flex-col basis-1/2 items-start">
                <p className="h4 pb-10 pt-6 md:pt-0 text-left">{t("title")}</p>
                <p className="p2 text-left">{t("paragraph")}</p>
            </div>
        </div>
    )
>>>>>>> feature/PAR-37-BETA-INT
};

export default MatildaCEO;
