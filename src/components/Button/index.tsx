"use client";

interface ButtonProps {
  text: string;
  url?: string;
  colorTheme: "light" | "dark";
  formCategoryState?: string;
  buttonSize: "small" | "large";
}

const Button = ({
  text,
  url,
  colorTheme,
  formCategoryState,
  buttonSize,
}: ButtonProps) => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <button
      onClick={handleClick}
      className={`
            ${buttonSize === "small" ? "px-3 py-1" : "p-6"} 
            ${
              colorTheme === "dark"
                ? "bg-black text-white"
                : "bg-white text-black"
            }
            rounded-full 
            button-text
        `}
    >
      {text}
    </button>
  );
};

export default Button;
