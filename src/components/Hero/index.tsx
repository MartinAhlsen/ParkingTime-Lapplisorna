import { useTranslations } from "next-intl";
import Button from "../Button";

interface BannerProps {
  page: string;
}

interface ButtonProperties {
  text: string;
  url: string;
  colorTheme: "light" | "dark";
  formCategoryState?: string;
}
 
const ContactButton: ButtonProperties = {
  text: "Contact us",
  url: "/contact_us",
  colorTheme: "light",
}
const DownloadButton: ButtonProperties = {
  text: "Download app",
  url: " ",
  colorTheme: "dark",
};

const Banner: React.FC<BannerProps> = ({ page }) => {
  let src, alt, imageClass, bannerContent, greenBar;
  const t = useTranslations("hero")

  switch (page) {
    case 'home':
      src = '/Images/hero-homepage.png';
      alt = 'Home Banner';
      imageClass = 'h-screen object-cover md:h-[calc(100vh-80px)]';
      bannerContent = (
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white text-left px-4 md:px-8 lg:px-20 xl:px-32" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
          <h1 className="button-text text-4xl md:text-7xl font-bold mb-4">{t("text1")}</h1>
          <h1 className="button-text text-4xl md:text-7xl font-bold mb-10">{t("text2")}</h1>
          <p className="text-lg md:text-2xl">{t("text3")}</p>
          <p className="text-lg md:text-2xl mb-10">{t("text4")}</p>
          <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4">
            <Button {...ContactButton}/>
            <Button {...DownloadButton}/>
          </div>
          <div className="bg-pt-green bg-opacity-80 absolute inset-x-0 bottom-0 h-32 md:h-16 flex flex-wrap md:flex-nowrap justify-around md:justify-center items-center md:space-x-20 text-white p-4">
            <div className="w-1/2 md:w-auto text-center md:text-left mb-2 md:mb-0">
              <p>• {t("sub1")}</p>
            </div>
            <div className="w-1/2 md:w-auto text-center md:text-right mb-2 md:mb-0">
              <p>• {t("sub2")}</p>
            </div>
            <div className="w-1/2 md:w-auto text-center md:text-left">
              <p>• {t("sub3")}</p>
            </div>
            <div className="w-1/2 md:w-auto text-center md:text-right">
              <p>• {t("sub4")}</p>
            </div>
          </div>
              </div>
            );
      break;
    case 'news':
      src = '/Images/hero-news.png';
      alt = 'News Banner';
      imageClass = 'h-[40vh] object-cover md:h-auto';
      bannerContent = (
        <div className="absolute inset-0 md:inset-y-0 md:left-0 md:w-2/5 lg:w-1/3 xl:w-2/5 backdrop-blur flex flex-col items-start justify-center text-white text-left p-4 md:p-8 lg:p-10 xl:p-12">
          <div className="flex items-center mb-4">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-lg button-text">{t("news1")}</span>
          </div>
          <h1 className="button-text text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">{t("news2")}</h1>
          <h1 className="button-text text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-10">{t("news3")}</h1>
        </div>
      );
      break;
    case 'contact':
      src = '/Images/hero-contact.png';
      alt = 'Contact Banner';
      imageClass = 'hidden md:block';
      bannerContent = (
        <div className="absolute inset-0 md:inset-y-0 md:left-0 md:w-2/5 lg:w-1/3 xl:w-2/5 backdrop-blur flex flex-col items-start justify-center text-white text-left p-4 md:p-8 lg:p-10 xl:p-12">
          <div className="flex items-center mb-4">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-lg button-text">{t("contact1")}</span>
          </div>
          <h1 className="button-text text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">{t("contact2")}</h1>
          <h1 className="button-text text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-10">{t("contact3")}</h1>
        </div>
      );
      break;
    case 'about':
      src = '/Images/hero-aboutUs.png';
      alt = 'About Us Banner';
      imageClass = 'h-[40vh] object-cover md:h-auto max-w-full';
      bannerContent = (
        <div className="absolute inset-0 md:inset-y-0 md:left-0 md:w-2/5 lg:w-1/3 xl:w-2/5 backdrop-blur flex flex-col items-start justify-center text-white text-left p-4 md:p-8 lg:p-10 xl:p-12">
          <div className="flex items-center mb-4 md:mt-2">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-lg button-text">News</span>
          </div>
          <h1 className="button-text text-3xl md:text-2xl lg:text-4xl xl:text-5xl font-bold mb-4">Parking Time Sweden</h1>
          <p className="button-text mb-2">We are a tech startup dedicated to transforming the parking</p>
          <p className="button-text mb-2">experience for all stakeholders - parkers, parking attendants,</p>
          <p className="button-text mb-2">municipalities and property owners.</p>
        </div>
      );
      break;
    default:
      src = '/Images/hero.homepage.png';
      alt = 'Default Banner';  
  }

  return (
    <div className="relative">
      <img src={src} alt={alt} className={`w-full ${imageClass}`} />
      {bannerContent}
    </div>
  );
};

export default Banner;
