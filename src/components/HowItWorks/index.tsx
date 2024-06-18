"use client"
import React from "react";
import Button from "../Button";
import { useTranslations } from "next-intl";

const HowItWorks: React.FC = () => {
    const b= useTranslations("buttons")
    const t = useTranslations("howitworks")
    return (
        
     <div className="bg-pt-background min-h-[50vh]">
        <div className="h3 text-center ">{t("main_title")}</div>
        <div className="flex w-full mx-auto flex-col xl:flex-row container justify-evenly items-center">
            <div className="bg-white w-[380px] m-10 p-6 rounded-[20px]">
                <div className="flex justify-between">
                <img src="/Images/pen-icon.png" alt="pen"
                className="w-[48px] h-[48px]" />
                <div className="text-pt-gray2 text-[100px] leading-none">01</div>
                </div>
                <div className="h5">{t("t1")}</div>
                <div className="p2">{t("p1")}</div>
            </div>
            <div className="p-4">
                <img src="/Images/right-icon.png" alt="right arrow"
                className="rotate-90 xl:rotate-0"/>
            </div>
            <div className="bg-white w-[380px] m-10 p-6 rounded-[20px]">
            <div className="flex justify-between">
                <img src="/Images/parking-icon.png" alt="parking icon"
                className="w-[48px] h-[48px]" />
                <div className="flex text-pt-gray2 text-[100px] leading-none">02</div>
                </div>
                <div className="h5">{t("t2")}</div>
                <div className="p2">{t("p2")}</div>
            </div>
            <div className="p-4">
                <img src="/Images/right-icon.png" alt="right arrow"
                className="rotate-90 xl:rotate-0"/>
            </div>
            <div className="bg-white w-[380px] m-10 p-6 rounded-[20px]">
            <div className="flex justify-between">
                <img src="/Images/clock-icon.png" alt="clock icon"
                className="w-[48px] h-[48px]" />
                <div className="flex text-pt-gray2 text-[100px] leading-none">03</div>
                </div>
                <div className="h5">{t("t3")}</div>
                <div  className="p2">{t("p3")}</div>
            </div>  
        </div>
        <div className="flex justify-center pb-10">
        <Button 
          text={b("download")} 
          url="https://play.google.com/store/apps/details?id=se.parkingtime.app&hl=en_US&pli=1" 
          colorTheme="dark" 
          
        />
        </div>
     </div>
    );
  };
  
  export default HowItWorks;
  