"use client";

import { useRouter } from "next/navigation";
interface ButtonProps {
  text: string;
  url?: string | undefined;
  colorTheme: "light" | "dark";
  formCategoryState?: string;
  type?: "button" | "submit";
}

const Button = ({
  text,
  url,
  colorTheme,
  formCategoryState,
  type,
}: ButtonProps) => {
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
            text-nowrap
        `}
    >
      {text}
    </button>
  );
};

export default Button;
