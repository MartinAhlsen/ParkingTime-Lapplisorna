"use client"
import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import { AnimatePresence } from "framer-motion";
import { usePathname } from 'next/navigation';
import React from 'react';
import Header from './components/header';
import Button from "./components/Button";
import Banner from "./components/Hero";

interface ButtonProperties {
  text: string;
  url: string;
  colorTheme: "light" | "dark";
  formCategoryState?: string;
}

const TestButton: ButtonProperties = {
  text: "Test",
  url: "/se/news",
  colorTheme: "dark",
};
const App=()=> {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
      
      setTimeout(() => {
        setIsLoading(false)
        document.body.style.cursor = 'default'
        window.scrollTo(0, 0)
      }, 2000)
    })()
  }, [])
  return (<div>
    <AnimatePresence mode="wait">
          {isLoading && <SplashScreen />}
        </AnimatePresence>
    
        <Header />
        <Banner page="home"/>
      <main>Parking Time</main>
      <Button {...TestButton} />
    
    </div>);
}

export default App;