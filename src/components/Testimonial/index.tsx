import { useTranslations } from "next-intl";
import TitleSubtitle from "../TitleSubtitle";


const Testimonial = () => {
    const t = useTranslations("home");
    return (
        <div className="min-h-[1000px] bg-pt-background flex flex-col">
           <TitleSubtitle
          title={t("Comp_3_title")}
          subtitle={t("Comp_3_subtitle")}
          overtitle={null}
        />
        <div>
            
        </div>
        </div>
    )
};

export default Testimonial
