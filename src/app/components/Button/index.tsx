"use client";

import { useRouter } from "next/navigation";
interface ButtonProps {
  text: string;
  url: string;
  colorTheme: "light" | "dark";
  formCategoryState?: string;
}

const Button = ({ text, url, colorTheme, formCategoryState }: ButtonProps) => {
  const router = useRouter();
  const handleClick = (): void => {
    router.push(url);
  };
  return (
    <button
      onClick={handleClick}
      className={`
            ${
              colorTheme === "dark"
                ? "bg-pt-secondary text-white"
                : "bg-white text-pt-secondary"
            }
            rounded-full 
            button-text 
            py-[15px]
            px-[32px]
            h-[48px]
            w-[300px]
            md:w-[160px]
            flex
            justify-center
            items-center

        `}
    >
      {text}
    </button>
  );
};

export default Button;
