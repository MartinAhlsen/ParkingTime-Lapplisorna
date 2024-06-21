"use client";

import { useRouter } from "next/navigation";
import React from "react";
interface ButtonProps {
  text: string;
  url?: string | undefined;
  colorTheme: "light" | "dark";
  formCategoryState?: string;
  extraWide?: boolean;
  type?: "button" | "submit";
}

const Button = ({ text, url, colorTheme, formCategoryState, type, extraWide }: ButtonProps) => {
  const router = useRouter();
  const handleClick = (): void => {
    if (type !== "submit" && url) {
      router.push(url);
    }
  };
  return (
    <button
      {...(type ? { type } : {})}
      onClick={handleClick}
      className={`
            ${
              colorTheme === "dark"
                ? "bg-pt-secondary text-white hover:bg-gray-900 hover:border border-gray-800"
                : "bg-white text-pt-secondary hover:bg-gray-100 hover:border border-gray-500"
            }
            rounded-full 
            button-text 
            ${extraWide ? "md:w-[200px]" : "md:w-[160px]"}
            py-[15px]
            px-[32px]
            h-[48px]
            w-[300px]
            flex
            justify-center
            items-center
            text-nowrap
        `}
    >
      {text}
    </button>
  );
};

export default Button;
