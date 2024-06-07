"use client"

import React from "react";
import Image from "next/image";
import MatildaImg from "../../../../public/Images/Matilda-image.png";
import "./styles.css";
import { motion, Variants } from "framer-motion";
import StaffCard from "../StaffCard";


const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -5,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};



const MatildaCEO: React.FC = () => {
  return (
    <div className="h-[840px] md:h-[494px] bg-pt-primary flex flex-col text-center text-white items-center p-6 md:flex-row ">
      

      <div className="flex flex-col basis-1/2 items-center">
      <StaffCard staffImg={MatildaImg} hueA={20} hueB={40} />
      </div>

      <div className="flex flex-col basis-1/2 items-start">
        <p className="h4 pb-10 pt-6 md:pt-0 text-left">Want to know more?</p>
        <p className="p2 text-left">Contact us to find out more about our solution and how we can implement it in your municipality.</p>
      </div>
    </div>
  );
};

export default MatildaCEO;
