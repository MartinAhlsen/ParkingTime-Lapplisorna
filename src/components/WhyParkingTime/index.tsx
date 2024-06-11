import WhyCard from "./WhyCard";
import arrowG from "../../../public/Images/arrowGrowth-icon.png";
import phone from "../../../public/Images/phoneTap-icon.png"
import group from "../../../public/Images/group-icon.png"
import computer from "../../../public/Images/download-icon.png";  {/*FIND CORRECT ONE  */}
import { useTranslations } from "next-intl";





const WhyParkingTime = () => {
    const t = useTranslations("why_parking_time");
    return (
        <div className="bg-pt-primary min-h-screen flex flex-col">
            <p className="h3 text-center text-white p-6 leading-tight">{t("title")}</p>
            <div className="bg-pt-primary min-h-screen flex flex-col md:grid md:grid-cols-2">
          <WhyCard imageLink={arrowG} title={t("Comp_1_title")} paragraph={t("Comp_1_paragraph")} />
          <WhyCard imageLink={phone} title={t("Comp_2_title")} paragraph={t("Comp_2_paragraph")}/>
          <WhyCard imageLink={group} title={t("Comp_3_title")} paragraph={t("Comp_3_paragraph")}/>
          <WhyCard imageLink={computer} title={t("Comp_4_title")} paragraph={t("Comp_4_paragraph")}/>
          </div>
        </div>
    )
};

export default WhyParkingTime
