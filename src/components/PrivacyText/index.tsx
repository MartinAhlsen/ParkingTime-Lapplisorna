import React from 'react';
import { useTranslations } from 'next-intl';


const PrivacyText: React.FC = () => {
  const t = useTranslations("privacypolicy");
  return (
    <div className="button-text mx-auto px-8 md:px-20 py-20">
        <h1 className="text-4xl font-bold mb-4">{t("h1")}</h1>
        <p className="mb-20">{t("p0")}</p>

        <div className="max-w-4xl mx-auto px-4 md:py-8">
        <h2 className="text-2xl font-bold mb-4">{t("h2-privacypolicy")}</h2>
        <p className="mb-8 font-bold text-gray-800">{t("p1")}</p>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">{t("h2-personaldata")}</h2>
        <p className="mb-8">{t("p2")}</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">{t("h2-responsible")}</h2>
        <p className="mb-8">{t("p3")}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">{t("h2-whatispersonaldata")}</h2>
        <p className="mb-8">{t("p4")}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">{t("h2-personaldatacomefrom")}</h2>
        <p className="mb-8">{t("p5")}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">{t("h2-parkingtimeinformation")}</h2>
        <p className="mb-8">{t("p6")}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">{t("h2-personaldatacollect")}</h2>
        <ul className="list-disc ml-6">
          <li>{t("li1")}</li>
          <li>{t("li2")}</li>
          <li>{t("li3")}</li>
          <li>{t("li4")}</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">{t("h2-cookies")}</h2>
        <p className="mb-8">{t("p8")}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">{t("h2-consent")}</h2>
        <p className="mb-8">{t("p9")}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">{t("h2-keepinformation")}</h2>
        <p className="mb-8">{t("p10")}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">{t("h2-sharepersonal")}</h2>
        <p className="mb-2">{t("p11")}</p>
        <ul className="list-disc ml-6 mb-8">
          <li>{t("li5")}</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">{t("h2-processpersonal")}</h2>
        <p className="mb-8">{t("p12")}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">{t("h2-rights")}</h2>
        <p className="mb-4">{t("p13")}</p>
        <ul className="list-disc mb-8">
          <p className="mb-2">{t("li6")}</p>
          <p className="mb-2">{t("li7")}</p>
          <p className="mb-2">{t("li8")}</p>
          <p className="mb-2">{t("li9")}</p>
          <p className="mb-2">{t("li10")}</p>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{t("h2-contactinformation")}</h2>
        <p className="mb-4">{t("p14")}</p>
        <address className="not-italic">
        {t("adress1")}<br />
        {t("adress2")}<br />
        {t("adress3")}<br />
          <a href="mailto:mail@domain.com" className="text-blue-600 underline">{t("mail")}</a>
        </address>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">{t("h2-purposelegal")}</h2>
          <p>{t("p15")}</p>
          <p>{t("p16")}</p>
          <ol className="list-decimal ml-6">
          <li>{t("li12")}
            <ul className="list-disc ml-6">
              <li>{t("li12-1")}</li>
            </ul>
          </li>
            <li>{t("li13")}
            <ul className="list-disc ml-6">
              <li>{t("li13-1")}</li>
              <li>{t("li13-2")}</li>
              <li className="ml-4">{t("li13-3")}</li>
              <li className="ml-4">{t("li13-4")}</li>
            </ul>
            </li>
            <li>{t("li14")}
            <ul className="list-disc ml-6">
              <li>{t("li14-1")}</li>
              <li>{t("li14-2")}</li>
            </ul>
            </li>
            <li>{t("li15")}
            <ul className="list-disc ml-6">
              <li>{t("li15-1")}</li>
              <li>{t("li15-2")}</li>
              <li className="ml-4">{t("li15-3")}</li>
              <li className="ml-4">{t("li15-4")}</li>
            </ul>
            </li>
            <li>{t("li16")}
            <ul className="list-disc ml-6">
              <li>{t("li16-1")}</li>
              <li>{t("li16-2")}</li>
            </ul>
            </li>
          </ol>
          <p className="mb-4">{t("p17")}</p>
      </section>
    </div>
  </div>
  );
};

export default PrivacyText;

