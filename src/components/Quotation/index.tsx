"use client"

import { useTranslations } from "next-intl";
import { TypeAnimation } from "react-type-animation";


const Quotation = () => {
    const t = useTranslations("about_us")
    return (
        <div className="min-h-[328px] bg-pt-gray text-center flex flex-col items-center">
          <p className="p3Quote md:p3QuoteDesktop  pt-10 md:pt-14 w-[80%] md:w-[784px]">{t("quotation")}</p>
          <p className="p3Quote md:p3QuoteDesktop pt-10">{t("author")}</p>
          <TypeAnimation
    preRenderFirstString={true}
    sequence={[
      
      1000,
      '- Makes your Parking Time Easy!!!',
      1000,
      '- Makes your Parking Time Simple!!!',
      1000,
      '- Makes your Parking Time Fun!!!',
      1000,
      '- Makes your Parking Time Joy!!!',
      
    ]}
    speed={1}
    className="p3Quote md:p3QuoteDesktop "
    repeat={Infinity}
  />
          <div>
  
</div>
        </div>
    )
};

export default Quotation
