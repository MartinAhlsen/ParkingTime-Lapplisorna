"use client"

import StatisticCard from "./StatisticCard";
import downloadImg from "../../../../public/Images/download-icon.png";
import mapImg from "../../../../public/Images/map-icon.png";
import parkingImg from "../../../../public/Images/parking-icon.png";
import { animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Statistics = () => {

  const count1 = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0);
  const rounded1 = useTransform(count1, Math.round);
  const rounded2 = useTransform(count2, Math.round);
  const rounded3 = useTransform(count3, Math.round);
  const [countValue1, setCountValue1] = useState(0);
  const [countValue2, setCountValue2] = useState(0);
  const [countValue3, setCountValue3] = useState(0);

  useEffect(() => {
    // Subscribe to changes in rounded and update the state
    const unsubscribe1 = rounded1.onChange((latest) => {
      setCountValue1(latest);
    });
    const unsubscribe2 = rounded2.onChange((latest) => {
      setCountValue2(latest);
    });
    const unsubscribe3 = rounded3.onChange((latest) => {
      setCountValue3(latest);
    });

    // Start the animation
    const animation1 = animate(count1, 5000, { duration: 6 });
    const animation2 = animate(count2, 4700, { duration: 4 });
    const animation3 = animate(count3, 30, { duration: 2 });

    // Clean up subscription and animation on unmount
    return () => {
      unsubscribe1();
      unsubscribe2()
      unsubscribe3()
      animation1.stop();
      animation2.stop();
      animation3.stop();
    };
  }, [rounded1, count1, rounded2, count2, rounded3, count3]);

  return (
    <div className="h-96 bg-pt-background flex flex-col md:flex-row justify-center items-center">
      <div className="bg-white h-80 rounded-xl mx-1 flex flex-col md:flex-row">
        <StatisticCard imageLink={downloadImg} number={countValue1} subtitle="Downloads" />
        <div className="basis-1/5"></div>
        <StatisticCard imageLink={parkingImg} number={countValue2} subtitle="Parking sessions" />
        <div className="basis-1/5"></div>
        <StatisticCard imageLink={mapImg} number={countValue3} subtitle="Parking zones" />
      </div>
    </div>
  );
};

export default Statistics;