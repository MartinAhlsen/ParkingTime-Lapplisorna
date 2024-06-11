import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer className="bg-pt-primary text-white py-8 mx-auto px-8">
    <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-start">
      <div className="flex flex-col md:flex-row items-start ">
        <img src="../../Images/P-icon.png" alt="Logo" className="w-[80px] h-[80px] mb-4 md:mb-0 md:mr-4" />
        <div className="text-sm mt-4 md:mt-0 md:ml-8 align-top">
          <p className="p1">Address:</p>
          <p>Nyköpingsvägen 52 | 611 50</p>
          <p>NYKÖPING</p>
        </div>
        <div className="text-sm mt-4 md:mt-0 md:ml-8">
          <p className="p1">{t("contact")}:</p>
          <p>+46 72 399 15 15</p>
          <p>info@parkingtime.se</p>
          <div className="flex space-x-2 mt-2">
            <a href="https://instagram.com" aria-label="Instagram">
              <img src="../../Images/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
            <img src="../../Images/linkedIn-icon.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-sm mt-8 md:mt-0">
        <p className=" p1 pb-4">Links</p>
        <ul className="flex flex-col md:flex-row align-baseline space-y-4 md:space-y-0 md:py-4">
          <li><a href="/" className="md:pr-4 p2 font-size-[14px] md:underline">{t("contact")}</a></li>
          <li><a href="/" className="md:pr-4 p2 font-size-[14px] md:underline">{t("about_us")}</a></li>
          <li><a href="/" className="md:pr-4 p2 font-size-[14px] md:underline">{t("news")}</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-accent-white mt-8 pt-4 text-sm text-left">
      <div className="container mx-auto px-8 flex flex-col md:flex-row md:justify-between">
      <p className="md:text-right md:flex-row mt-4 md:mt-0 ">© 2024 Parking Time AB</p>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:flex md:space-x-4">
          <a href="#" className="py-2 underline">{t("policy")}</a>
        </div>
        
      </div>
    </div>
  </footer>
);
};

export default Footer;
