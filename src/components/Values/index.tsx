import { useTranslations } from "next-intl";
import TitleSubtitle from "../TitleSubtitle";


const Values = () => {
    const t = useTranslations("about_us")
    return (
        <div className="flex flex-col md:flex-row bg-pt-background">
          <TitleSubtitle
        title={t("values_title")}
        subtitle={t("values_subtitle")}
        overtitle={null}
      />
        </div>
    )
};

export default Values
