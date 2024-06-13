import { useTranslations } from "next-intl";
import TitleSubtitle from "../TitleSubtitle";
import TestimonialCard from "./TestimonialCard/index.";
import Jonas from "../../../public/Images/testimonials/jonas-profile.png"
import Maria from "../../../public/Images/testimonials/maria-profile.png"
import Folk from "../../../public/Images/TrustedByLogotypes/falköping.png"
import Nass from "../../../public/Images/TrustedByLogotypes/nässjö-logoBlå.png"

const Testimonial = () => {
    const t = useTranslations("home");
    return (
        <div className="min-h-[1000px] bg-pt-background flex flex-col">
           <TitleSubtitle
          title={t("Comp_3_title")}
          subtitle={t("Comp_3_subtitle")}
          overtitle={null}
        />
        <div className="flex justify-evenly	">
            <TestimonialCard imageMain={Folk} imageTestimonial={Maria} mainText={""} name={""} role={""} />
            <TestimonialCard imageMain={Nass} imageTestimonial={Jonas} mainText={""} name={""} role={""} />
        </div>
        </div>
    )
};

export default Testimonial
