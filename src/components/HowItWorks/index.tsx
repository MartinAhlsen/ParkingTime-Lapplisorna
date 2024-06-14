"use client"
import React from "react";
import Button from "../Button";

const HowItWorks: React.FC = () => {
    return (
        
     <div className="bg-pt-background min-h-[50vh]">
        <div className="h3 text-center">How it works</div>
        <div className="flex w-full mx-auto flex-col xl:flex-row container justify-evenly items-stretch">
            <div className="bg-white mx-auto w-[380px] p-6 rounded-[20px]">
                <div className="flex justify-between">
                <img src="/Images/pen-icon.png" alt="pen"
                className="w-[48px] h-[48px]" />
                <div className="text-pt-gray2 text-[100px] leading-none">01</div>
                </div>
                <div className="h5">Enter your registration number</div>
                <div className="p2">Open the app, register with your car's registration number.</div>
            </div>
            <div className="flex mx-auto p-4 items-center">
                <img src="/Images/right-icon.png" alt="right arrow"
                className="rotate-90 xl:rotate-0"/>
            </div>
            <div className="bg-white w-[380px] mx-auto p-6 rounded-[20px]">
            <div className="flex justify-between">
                <img src="/Images/parking-icon.png" alt="parking icon"
                className="w-[48px] h-[48px]" />
                <div className="flex text-pt-gray2 text-[100px] leading-none">02</div>
                </div>
                <div className="h5">Find your desired parking location</div>
                <div className="p2">Use the map, search function, or zone list to find your desired parking location</div>
            </div>
            <div className="flex mx-auto p-4 items-center">
                <img src="/Images/right-icon.png" alt="right arrow"
                className="rotate-90 xl:rotate-0"/>
            </div>
            <div className="bg-white w-[380px] mx-auto p-6 rounded-[20px]">
            <div className="flex justify-between">
                <img src="/Images/clock-icon.png" alt="clock icon"
                className="w-[48px] h-[48px]" />
                <div className="flex text-pt-gray2 text-[100px] leading-none">03</div>
                </div>
                <div className="h5">Start your digital parking disc</div>
                <div  className="p2">Once you select your parking zone, you can review any applicable rules, start parking, and then simply close the app.</div>
            </div>  
        </div>
        <div className="flex justify-center p-10">
        <Button 
          text="Download app" 
          url="https://play.google.com/store/apps/details?id=se.parkingtime.app&hl=en_US&pli=1" 
          colorTheme="dark" 
        />
        </div>
     </div>
    );
  };
  
  export default HowItWorks;
  