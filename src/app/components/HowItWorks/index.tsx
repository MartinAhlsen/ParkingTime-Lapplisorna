"use client"
import React from "react";
import Button from "../Button";

const HowItWorks: React.FC = () => {
    return (
        
     <div className="bg-pt-background min-h-[50vh]">
        <div className="h3 text-center ">How it works</div>
        <div className="flex w-full mx-auto flex-col xl:flex-row container justify-evenly items-center">
            <div className="bg-white w-[380px] m-10 p-6 rounded-[20px]">
                <div className="flex justify-between">
                <img src="./images/pen-icon.png" alt="pen"
                className="w-[48px] h-[48px]" />
                <div className="text-pt-gray2 text-[100px] leading-none">01</div>
                </div>
                <div className="h5">Enter your registration number</div>
                <div className="p2">Open the app, register with your car's registration number.</div>
            </div>
            <div className="p-4">
                <img src="./images/right-icon.png" alt="right arrow"
                className="rotate-90 xl:rotate-0"/>
            </div>
            <div className="bg-white w-[380px] m-10 p-6 rounded-[20px]">
            <div className="flex justify-between">
                <img src="./images/parking-icon.png" alt="parking icon"
                className="w-[48px] h-[48px]" />
                <div className="flex text-pt-gray2 text-[100px] leading-none">02</div>
                </div>
                <div className="h5">Find your desired parking location</div>
                <div className="p2">Use the map, search function, or zone list to find your desired parking location</div>
            </div>
            <div className="p-4">
                <img src="./images/right-icon.png" alt="right arrow"
                className="rotate-90 xl:rotate-0"/>
            </div>
            <div className="bg-white w-[380px] m-10 p-6 rounded-[20px]">
            <div className="flex justify-between">
                <img src="./images/clock-icon.png" alt="clock icon"
                className="w-[48px] h-[48px]" />
                <div className="flex text-pt-gray2 text-[100px] leading-none">03</div>
                </div>
                <div className="h5">Start your digital parking disc</div>
                <div  className="p2">Once you select your parking zone, you can review any applicable rules, start parking, and then simply close the app.</div>
            </div>  
        </div>
        <div className="flex justify-center pb-10 xl:py-0">
        <Button 
          text="Download app" 
          url="/learn-more" 
          colorTheme="dark" 
        />
        </div>
     </div>
    );
  };
  
  export default HowItWorks;
  