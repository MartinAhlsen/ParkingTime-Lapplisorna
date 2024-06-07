"use client"

import React from "react";
import Image from "next/image";
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

const Card= () => {
  const background = `linear-gradient(306deg, hsl(20, 100%, 50%), hsl(40, 100%, 50%))`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card flex flex-col basis-1/2 items-center" variants={cardVariants}>
      <Image
          className="rounded-full p-8"
          src={MatildaImg}
          width={300}
          height={300}
          alt="Picture of the author"
        />
        <p className="h5 text-black">Matilda Öhman, CEO</p>
        <p className="h6 text-black">Matilda@email.123</p>
      </motion.div>
    </motion.div>
  );
};

const MatildaCEO: React.FC = () => {
  return (
    <div className="h-[840px] md:h-[494px] bg-pt-primary flex flex-col text-center text-white items-center p-6 md:flex-row ">
      

      <div className="flex flex-col basis-1/2 items-center">
      <Card />
      </div>

      <div className="flex flex-col basis-1/2 items-start">
        <p className="h4 pb-10 pt-6 md:pt-0 text-left">Want to know more?</p>
        <p className="p2 text-left">Contact us to find out more about our solution and how we can implement it in your municipality.</p>
      </div>
    </div>
  );
};

export default MatildaCEO;
