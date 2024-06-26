import React from "react";
import { useTranslations } from "next-intl";

const TermsOfServiceText: React.FC = () => {
  const t = useTranslations("termsOfService");
  return (
    <div className="button-text mx-auto px-8 md:px-20 py-20">
      <h1 className="text-4xl font-bold mb-4">{t("h1")}</h1>
      <p className="mb-20">{t("p0")}</p>

      <div className="max-w-4xl mx-auto px-4 md:py-8">
        <section className="mb-6">
          <p className="mb-8">{t("p1-1")}</p>
          <p className="mb-8">{t("p1-2")}</p>
          <p className="mb-8">{t("p1-3")}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{t("h2-godkannande")}</h2>
          <p className="mb-8">{t("p2-1")}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            {t("h2-personuppgifter")}
          </h2>
          <p className="mb-8">{t("p3-1")}</p>
          <p className="mb-8">{t("p3-2")}</p>
          <p className="mb-8">{t("p3-3")}</p>
          <p className="mb-8">{t("p3-4")}</p>
          <p className="mb-8">{t("p3-5")}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{t("h2-funktioner")}</h2>
          <p className="mb-8">{t("p4-1")}</p>
          <p className="mb-8">{t("p4-2")}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{t("h2-avgifter")}</h2>
          <p className="mb-8">{t("p5-1")}</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{t("h2-dataskydd")}</h2>
          <p className="mb-8">{t("p6-1")}</p>
          <p className="mb-8">{t("p6-2")}</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{t("h2-ansvar")}</h2>
          <p className="mb-8">{t("p7-1")}</p>
          <p className="mb-8">{t("p7-2")}</p>
          <p className="mb-8">{t("p7-3")}</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{t("h2-rattigheter")}</h2>
          <p className="mb-8">{t("p8-1")}</p>
          <ul className="list-disc ml-6 mb-8">
            <li>{t("li8-1")}</li>
            <li>{t("li8-2")}</li>
            <li>{t("li8-3")}</li>
            <li>{t("li8-4")}</li>
            <li>{t("li8-5")}</li>
          </ul>
          <p className="mb-8">{t("p8-2")}</p>
          <ul className="list-disc ml-6 mb-8">
            <li>{t("li8-6")}</li>
          </ul>
          <p className="mb-8">{t("p8-3")}</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            {t("h2-skyldigheter")}
          </h2>
          <p className="mb-8">{t("p9-1")}</p>
          <ul className="list-disc ml-6 mb-8">
            <li>{t("li9-1")}</li>
            <li>{t("li9-2")}</li>
            <li>{t("li9-3")}</li>
            <li>{t("li9-4")}</li>
            <li>{t("li9-5")}</li>
            <li>{t("li9-6")}</li>
            <li>{t("li9-7")}</li>
            <li>{t("li9-8")}</li>
            <li>{t("li9-9")}</li>
            <li>{t("li9-10")}</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{t("h2-andringar")}</h2>
          <p className="mb-8">{t("p10-1")}</p>
          <p className="mb-8">{t("p10-2")}</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{t("h2-overlatelse")}</h2>
          <p className="mb-8">{t("p11-1")}</p>
          <p className="mb-8">{t("p11-2")}</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            {t("h2-immaterialratt")}
          </h2>
          <p className="mb-8">{t("p12-1")}</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{t("h2-lag")}</h2>
          <p className="mb-8">{t("p13-1")}</p>
          <p className="mb-8">{t("p13-2")}</p>
          <p className="mb-8">{t("p13-3")}</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            {t("h2-kontaktuppgifter")}
          </h2>
          <p className="mb-8">{t("p14-1")}</p>
          <ul className="list-disc ml-6 mb-8">
            <li>{t("li14-1")}</li>
            <li>{t("li14-2")}</li>
            <li>{t("li14-3")}</li>
          </ul>
          <p className="mb-8">{t("p14-2")}</p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfServiceText;
