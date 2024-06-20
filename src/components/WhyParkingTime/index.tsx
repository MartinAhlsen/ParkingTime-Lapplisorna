import WhyCard from "./WhyCard";
import arrowG from "../../../public/Images/arrowGrowth-icon.png";
import phone from "../../../public/Images/phoneTap-icon.png";
import group from "../../../public/Images/group-icon.png";
import computer from "../../../public/Images/desktop-icon.png";
import { useLocale, useTranslations } from "next-intl";
import Button from "../Button";

interface ButtonProperties {
  text: string;
  url: string;
  colorTheme: "light" | "dark";
  extraWide: boolean;
}

const WhyParkingTime = () => {
  const t = useTranslations("why_parking_time");
  const b = useTranslations("buttons");
  const locale = useLocale();

  const AboutUsButton: ButtonProperties = {
    text: b("learnmore"),
    url: `/${locale}/about_us`,
    colorTheme: "light",
    extraWide: true,
  };

  return (
    <div className="bg-pt-primary min-h-screen flex flex-col items-center" style={{ paddingTop: '112px', paddingBottom: '112px' }}>
      <p className="h3 font-bold text-center text-white p-10 leading-tight">
        {t("title")}
      </p>
      <div className="bg-pt-primary min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 p-4 md:p-10 lg:p-20">
        <WhyCard
          imageLink={arrowG}
          title={t("Comp_1_title")}
          paragraph={t("Comp_1_paragraph")}
        />
        <WhyCard
          imageLink={phone}
          title={t("Comp_2_title")}
          paragraph={t("Comp_2_paragraph")}
        />
        <WhyCard
          imageLink={computer}
          title={t("Comp_3_title")}
          paragraph={t("Comp_3_paragraph")}
        />
        <WhyCard
          imageLink={group}
          title={t("Comp_4_title")}
          paragraph={t("Comp_4_paragraph")}
        />
      </div>
      <div className="py-4 mb-8">
        <Button {...AboutUsButton} />
      </div>
    </div>
  );
};

export default WhyParkingTime;

