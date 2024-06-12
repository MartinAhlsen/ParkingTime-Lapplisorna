

"use client"

import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import styles from "./FAQ.module.css"


const FAQ = () => {
  const defaultContent1: string ="Parking Time is a new amazing tecnology that will help you in every day life to adjust you p-skiva";
  const defaultContent2: string ="Download the app and use it for free! Whenever you need to park adjust your digital p-skiva!";
  const defaultContent3: string ="Of course is for free!";
  const defaultContent4: string ="Contact your municaipality if you want to implent this amazing piece of tecnology in your area!";
  const defaultContent5: string ="No problem known with the app! Best App and website ever!";
  return (
    <div>
      <Accordion className="bg-[#ECF2F1] p-5 flex flex-col justify-center items-center" >
        <AccordionItem className="bg-white border h7 border-pt-lightgrayborder rounded-xl mb-2.5 transition-colors duration-300 ease-in-out flex flex-col  p-2.5 gap-2.5 text-lg font-bold w-[300px] md:w-[500px]" key="1" aria-label="Accordion 1" title="What is Parking Time?" >
          <div className="font-normal">{defaultContent1}</div>
        </AccordionItem>
        <AccordionItem className="bg-white border h7 border-pt-lightgrayborder rounded-xl mb-2.5 transition-colors duration-300 ease-in-out flex flex-col  p-2.5 gap-2.5 text-lg font-bold w-[300px] md:w-[500px]" key="2" aria-label="Accordion 2" title="How do I use Parking Time?" >
          <div className="font-normal">{defaultContent2}</div>
        </AccordionItem>
        <AccordionItem className="bg-white border h7 border-pt-lightgrayborder rounded-xl mb-2.5 transition-colors duration-300 ease-in-out flex flex-col  p-2.5 gap-2.5 text-lg font-bold w-[300px] md:w-[500px]" key="3" aria-label="Accordion 3" title="Is it free?" >
          <div className="font-normal">{defaultContent3}</div>
        </AccordionItem>
        <AccordionItem className="bg-white border h7 border-pt-lightgrayborder rounded-xl mb-2.5 transition-colors duration-300 ease-in-out flex flex-col  p-2.5 gap-2.5 text-lg font-bold w-[300px] md:w-[500px]" key="4" aria-label="Accordion 4" title="How do I get it in my municipality?">
          <div className="font-normal">{defaultContent4}</div>
        </AccordionItem>
        <AccordionItem className="bg-white border h7 border-pt-lightgrayborder rounded-xl mb-2.5 transition-colors duration-300 ease-in-out flex flex-col  p-2.5 gap-2.5 text-lg font-bold w-[300px] md:w-[500px]" key="5" aria-label="Accordion 5" title="Known problems with the app" >
          <div className="font-normal">{defaultContent5}</div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FAQ;