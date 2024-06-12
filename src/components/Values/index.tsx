import { useTranslations } from "next-intl";
import TitleSubtitle from "../TitleSubtitle";
import ValuesCard from "./ValuesCard";
import Simplicity from "../../../public/Images/values/simplicity-icon.png";
import Innovation from "../../../public/Images/values/innovation-icon.png"
import Friendly from "../../../public/Images/values/userFriendly-icon.png"


const Values = () => {
    const t = useTranslations("about_us")
    return (
        <div className="flex flex-col  bg-pt-background items-center">
          <TitleSubtitle
        title={t("values_title")}
        subtitle={t("values_subtitle")}
        overtitle={null}
      />
      <div className="flex flex-col md:flex-row sm:place-content-evenly px-6">
        <ValuesCard imageLink={Simplicity} title={t("card_1_title")} paragraph={t("card_1_p")} />
        <ValuesCard imageLink={Innovation} title={t("card_2_title")} paragraph={t("card_2_p")} />
        <ValuesCard imageLink={Friendly} title={t("card_3_title")} paragraph={t("card_3_p")} />
      </div>
      
        </div>
    )
};

export default Values
