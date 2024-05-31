"client component";

import Button from "@/components/Button";

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
  // formCategoryState?: string;
};

export default function Home() {
  return (
    <>
      <main>Parking Time</main>
      <Button {...TestButton} />
    </>
  );
}
