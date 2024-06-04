"client component";

import Button from "@/app/components/Button";
import TitleSubtitle from "./components/TitleSubtitle";
import WhyParkingTime from "./components/WhyParkingTime";
import Statistics from "./components/Statistics";
import FAQ from "./components/FAQ";
import TrustedBy from "./components/TrustedBy";
import { trustedByOne, trustedByTwo } from "@/../public/data/trustedByData";

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
      <TitleSubtitle title="How it works?" subtitle={null} overtitle={null} />
      <WhyParkingTime />
      <TitleSubtitle
        title="Customer testimonials"
        subtitle="Hear from some of our client"
        overtitle={null}
      />

      <TitleSubtitle
        title="Don´t miss"
        subtitle="We are expanding rapidly, subscribe to our newsletter."
        overtitle="News"
      />
      <TrustedBy arrayOne={trustedByOne} arrayTwo={trustedByTwo} />
      <Statistics />
      <TitleSubtitle
        title="Do you have a question?"
        subtitle="Here some common questions answered"
        overtitle="FAQ"
      />
      <FAQ />
    </>
  );
}
