interface ButtonProps {
  text: string;
  url?: string;
  colorTheme: "light" | "dark";
  formCategoryState?: string;
  size: "small" | "large";
}

const Button = ({
  text,
  url,
  colorTheme,
  formCategoryState,
  size,
}: ButtonProps) => {
  const handleClick = () => {};
  return (
    <button
      onClick={handleClick}
      className={`
            ${size === "small" ? "p-1" : "p2"} 
            ${
              colorTheme === "dark"
                ? "bg-black text-white"
                : "bg-white text-black"
            }
            rounded-full
        `}
    >
      {text}
    </button>
  );
};

export default Button;
