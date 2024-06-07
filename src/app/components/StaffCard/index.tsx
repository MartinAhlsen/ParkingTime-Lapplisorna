"use client"

import React from "react";
import Image, { StaticImageData } from "next/image";
import MatildaImg from "../../../../public/Images/Matilda-image.png";
import "./styles.css";
import { motion, Variants } from "framer-motion";



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

interface StaffCardProps {
    staffImg: StaticImageData;
    hueA: number;
    hueB: number;
    text1: string;
    text2: string;
  }
const hue = (h: number) => `hsl(${h}, 100%, 50%)`;
const StaffCard= ({staffImg,hueA,hueB,text1, text2}:StaffCardProps) => {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 1 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card flex flex-col basis-1/2 items-center" variants={cardVariants}>
      <Image
          className="rounded-full p-8"
          src={staffImg}
          width={300}
          height={300}
          alt="Picture of the author"
        />
        <p className="h5 text-black">{text1}</p>
        <p className="h6 text-black">{text2}</p>
      </motion.div>
    </motion.div>
  );
};

export default StaffCard