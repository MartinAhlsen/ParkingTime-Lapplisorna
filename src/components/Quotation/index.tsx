import { useTranslations } from "next-intl";


const Quotation = () => {
    const t = useTranslations("about_us")
    return (
        <div className="min-h-[328px] bg-pt-gray">
          <p>{t("quotation")}</p>
          <p>{t("author")}</p>
        </div>
    )
};

export default Quotation
