import Image from "next/image";
import SmartParkingImg from "../../../public/Images/smartParkingSolution-homepage.png"
import ArrowTextSubComponent from "./ArrowTextSubComponent";
import { useLocale, useTranslations } from "next-intl";
import Button from "../Button";


const SmartParkingSolution = () => {
    const t = useTranslations("smart_parking_solution");
    const b= useTranslations("buttons");
    const locale = useLocale();

    return (
        <div className="min-h-[881px] md:h-[80vh] pt-12 pb-12 flex flex-col items-center md:flex-row ">
            <Image className="mt-10 mb-10  md:basis-1/2"
      src={SmartParkingImg}
      width={800}
      height={800}
      alt=""
    />
    <div className="flex flex-col items-center m-4 md:basis-1/2 md:items-start">
        <p className="h4 pb-8">{t("title")}</p>
        <p className="p2">{t("paragraph")}</p>
        <div className="mt-6 mb-6">
        <ArrowTextSubComponent text={t("arrow1")}/>
        <ArrowTextSubComponent text={t("arrow2")}/>
        <ArrowTextSubComponent text={t("arrow3")}/>
        </div>
        
        <p className="p2 mb-6">{t("final_paragraph")}</p>
        
        <Button 
          text={b("contact_us")} 
          url={`/${locale}/contact_us`}
          colorTheme="dark" 
        />
        
    </div>
          
        </div>
    )
};

export default SmartParkingSolution
