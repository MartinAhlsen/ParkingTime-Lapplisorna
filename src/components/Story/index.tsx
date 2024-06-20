"use client";
import { useLocale, useTranslations } from "next-intl";
import Button from "../Button";

const Story: React.FC = () => {
  const t = useTranslations("story");
  const b = useTranslations("buttons");
  const locale = useLocale();


  return (
    <div className="container mx-auto flex xl:flex-row w-full min-h-[60vh] justify-between items-center py-20 text-pt-darkblue2 bg-white">
      <div className="flex flex-col xl:w-1/2">

        <div className="p-10 xl:w-3/4">
          <p className="h5">{t("title1")}</p>

          <p className="p2 ">
          {t("p1")}
          </p>

          <p className="p2">
          {t("p2")}
          </p>
        </div>

        <div className="xl:w-3/4 px-10 md:pb-0">
          <p className="h5">{t("title2")}</p>
          <p className="p2 pt-4">
          {t("p3")}
          </p>
        </div>
        <div className="flex p-10 justify-center md:justify-normal">
        <Button
          text={b("meeting")} 
          url={`/${locale}/contact_us`}
          colorTheme="dark"
        />
        </div>
      </div> 

      <div className="flex-row hidden xl:flex w-1/2 items-start xl:justify-center ">
        <img className="w-[1000px] h-auto rounded-[100px]"
          src="/Images/parkbycar.png"
          alt="parking time!"
        />
      </div>
    </div>

  );
};

export default Story;

