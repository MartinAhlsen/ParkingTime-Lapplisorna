import { useTranslations } from "next-intl";


const Quotation = () => {
    const t = useTranslations("about_us")
    return (
        <div className="min-h-[328px] bg-pt-gray text-center flex flex-col items-center">
          <p className="p3Quote md:p3QuoteDesktop  pt-10 md:pt-14 w-[80%] md:w-[784px]">{t("quotation")}</p>
          <p className="p3Quote md:p3QuoteDesktop pt-10">{t("author")}</p>
        </div>
    )
};

export default Quotation
