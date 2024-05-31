"use client"
import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import { AnimatePresence } from "framer-motion";
export default function Home() {
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
  return (<main>
    <AnimatePresence mode="wait">
          {isLoading && <SplashScreen />}
        </AnimatePresence>
    <div className="h-96 bg-red-600"></div>
    <div className="h-96 bg-blue-500"></div>
    <div className="h-96 bg-amber-800"></div>
    
    Parking Time
    
    
    
    </main>);
}
