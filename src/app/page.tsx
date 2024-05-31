"client component";

import Button from "@/components/Button";

interface ButtonProperties {
  text: string;
  url?: string;
  colorTheme: "light" | "dark";
  formCategoryState?: string;
  buttonSize: "small" | "large";
}

const TestButton: ButtonProperties = {
  text: "Test",
  // url?: string;
  colorTheme: "dark",
  // formCategoryState?: string;
  buttonSize: "small",
};

export default function Home() {
  return (
    <>
      <main>Parking Time</main>
      <Button
        text={TestButton.text}
        colorTheme={TestButton.colorTheme}
        buttonSize={TestButton.buttonSize}
      />
    </>
  );
}
