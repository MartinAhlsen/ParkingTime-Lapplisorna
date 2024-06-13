import { useTranslations } from "next-intl";
import TitleSubtitle from "../TitleSubtitle";
import TestimonialCard from "./TestimonialCard/index.";
import Jonas from "../../../public/Images/testimonials/jonas-profile.png"
import Maria from "../../../public/Images/testimonials/maria-profile.png"
import Folk from "../../../public/Images/TrustedByLogotypes/falköping.png"
import Nass from "../../../public/Images/TrustedByLogotypes/nässjö-logoBlå.png"

const Testimonial = () => {
    const t = useTranslations("testimonials");
    return (
        <div className="min-h-[1000px] bg-pt-background flex flex-col">
           <TitleSubtitle
          title={t("title")}
          subtitle={t("subtitle")}
          overtitle={null}
        />
            <div className="flex flex-col md:flex-row justify-evenly items-center pt-4">
            <TestimonialCard imageMain={Folk} imageTestimonial={Maria} mainText={t("main_text1")} name={"Maria Lundin"} role={t("role1")} />
            <TestimonialCard imageMain={Nass} imageTestimonial={Jonas} mainText={t("main_text2")} name={"Jonas Eriksson"} role={t("role2")} />
            </div>
        </div>
    )
};

export default Testimonial
