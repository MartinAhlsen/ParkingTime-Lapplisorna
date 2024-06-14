"use client"

import { useTranslations } from "next-intl";
import { TypeAnimation } from "react-type-animation";


const Quotation = () => {
    const t = useTranslations("about_us")
    return (
        <div className="min-h-[328px] bg-pt-gray text-center flex flex-col items-center">
          <p className="p3Quote md:p3QuoteDesktop  pt-10 md:pt-14 w-[80%] md:w-[784px]">{t("quotation")}</p>
          
          <TypeAnimation
    preRenderFirstString={true}
    sequence={[
      
      1000,
      '-Matilda - CEO & Founder - ',
      1000,
      '-Matilda - Envisioning the future -',
      
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
