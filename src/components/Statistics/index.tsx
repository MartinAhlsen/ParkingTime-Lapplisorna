"use client";

import StatisticCard from "./StatisticCard";
import downloadImg from "../../../public/Images/download-icon.png";
import mapImg from "../../../public/Images/map-icon.png";
import parkingImg from "../../../public/Images/parking-icon.png";
import { animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState, useRef, RefObject } from "react";
import { useTranslations } from "next-intl";


const Statistics: React.FC = () => {
  const count1 = useMotionValue(4980);
  const count2 = useMotionValue(4650);
  const count3 = useMotionValue(0);

  const rounded1 = useTransform(count1, Math.round);
  const rounded2 = useTransform(count2, Math.round);
  const rounded3 = useTransform(count3, Math.round);

  const [countValue1, setCountValue1] = useState<number>(0);
  const [countValue2, setCountValue2] = useState<number>(0);
  const [countValue3, setCountValue3] = useState<number>(0);

  const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  useEffect(() => {
    if (inView) {
      const unsubscribe1 = rounded1.on("change", (latest) => setCountValue1(latest));
      const unsubscribe2 = rounded2.on("change", (latest) => setCountValue2(latest));
      const unsubscribe3 = rounded3.on("change", (latest) => setCountValue3(latest));

      const animation1 = animate(count1, 5000, { duration: 2.5 });
      const animation2 = animate(count2, 4700, { duration: 2.5 });
      const animation3 = animate(count3, 30, { duration: 2.5 });

      return () => {
        unsubscribe1();
        unsubscribe2();
        unsubscribe3();
        animation1.stop();
        animation2.stop();
        animation3.stop();
      };
    }
  }, [inView, rounded1, count1, rounded2, count2, rounded3, count3]);
  const t = useTranslations("statistics");
  return (
    <div ref={ref} className="min-h-96 bg-pt-background flex flex-col md:flex-row justify-center items-center">
      <div className="bg-white min-h-80 pt-8 pb-8 mt-12 mb-12 rounded-xl mx-1 flex flex-col md:flex-row">
        <StatisticCard imageLink={downloadImg} number={countValue1} subtitle={t("stat1")} />
        <div className="basis-1/5"></div>
        <StatisticCard imageLink={parkingImg} number={countValue2} subtitle={t("stat2")} />
        <div className="basis-1/5"></div>
        <StatisticCard imageLink={mapImg} number={countValue3} subtitle={t("stat3")} />
      </div>
    </div>
  );
};

export default Statistics;
