import { useLocale, useTranslations } from "next-intl";
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

const Banner: React.FC<BannerProps> = ({ page }) => {
  let src, alt, imageClass, bannerContent;
  const t = useTranslations("hero")
  const b = useTranslations("buttons")
  const locale = useLocale()
  const ContactButton: ButtonProperties = {
    text: b("contact_us"),
    url: `/${locale}/contact_us`,
    colorTheme: "light",
  }
  const DownloadButton: ButtonProperties = {
    text: b("download"),
    url: "https://play.google.com/store/apps/details?id=se.parkingtime.app&hl=en_US&pli=1" ,
    colorTheme: "dark",
  };
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
          <Button {...DownloadButton}/>
            <Button {...ContactButton}/>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-32 md:h-16 flex flex-wrap md:flex-nowrap justify-around items-center text-white p-4 bg-zinc-800 bg-opacity-20 backdrop-blur-sm md:backdrop-blur-md">
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
        <div className="absolute inset-0 md:inset-y-0 md:left-0 md:w-2/5 lg:w-1/3 xl:w-2/5 bg-zinc-800 bg-opacity-20 backdrop-blur-sm md:backdrop-blur-md flex flex-col items-start justify-center text-white text-left p-4 md:p-8 lg:p-10 xl:p-12">
          <div className="flex items-center mb-4">
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
      imageClass = 'h-[40vh] object-cover max-w-full';
      bannerContent = (
        <div className="absolute inset-0 md:inset-y-0 md:left-0 md:w-2/5 lg:w-1/3 xl:w-2/5 bg-zinc-800 bg-opacity-20 backdrop-blur-sm md:backdrop-blur-md flex flex-col items-start justify-center text-white text-left p-4 md:p-8 lg:p-10 xl:p-12">
          <div className="md:flex items-center mb-4">
            <span className="text-lg button-text">{t("contact1")}</span>
          </div>
          <h1 className="md:block button-text text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">{t("contact2")}</h1>
          <h1 className="md:block button-text text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-10">{t("contact3")}</h1>
        </div>
      );
      break;
    case 'about':
      src = '/Images/hero-aboutUs.png';
      alt = 'About Us Banner';
      imageClass = 'h-[40vh] object-cover max-w-full';
      bannerContent = (
        <div className="absolute inset-0 md:inset-y-0 md:left-0 md:w-2/5 lg:w-1/3 xl:w-2/5 bg-zinc-900 bg-opacity-20 backdrop-blur-sm md:backdrop-blur-md flex flex-col items-start justify-center text-white text-left p-4 md:p-8 lg:p-10 xl:p-12">
          <div className="flex items-center mb-4 md:mt-2">
            <span className="text-lg button-text">{t("about1")}</span>
          </div>
          <h1 className="button-text text-3xl md:text-2xl lg:text-4xl xl:text-5xl font-bold mb-4">{t("about2")}</h1>
          <p className="button-text mb-2">{t("about3")}</p>
          <p className="button-text mb-2">{t("about4")}</p>
          <p className="button-text mb-2">{t("about5")}</p>
        </div>
      );
      break;
      case 'faq_page':
      src = '/Images/hero-FAQ.png';
      alt = 'Contact Banner';
      imageClass = 'h-[40vh] object-cover max-w-full';
      bannerContent = (
        <div className="absolute inset-0 md:inset-y-0 md:left-0 md:w-2/5 lg:w-1/3 xl:w-2/5 backdrop-blur flex flex-col items-start justify-center text-white text-left p-4 md:p-8 lg:p-10 xl:p-12">
          <div className="flex items-center mb-4">
          
          </div>
          <h1 className="button-text text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">{t("faq_page2")}</h1>
          <h1 className="button-text text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-10">{t("faq_page3")}</h1>
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
