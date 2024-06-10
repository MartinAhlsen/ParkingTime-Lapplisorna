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

  switch (page) {
    case 'home':
      src = '/Images/hero-homepage.png';
      alt = 'Home Banner';
      imageClass = 'h-screen object-cover md:h-[calc(100vh-80px)]';
      bannerContent = (
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white text-left px-4 md:px-8 lg:px-20 xl:px-32" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
          <h1 className="button-text text-4xl md:text-7xl font-bold mb-4">What time is it?</h1>
          <h1 className="button-text text-4xl md:text-7xl font-bold mb-10">Parking time!</h1>
          <p className="text-lg md:text-2xl">Digital parking disc - directly on your mobile.</p>
          <p className="text-lg md:text-2xl mb-10">A winning concept in a new, digitalized format</p>
          <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4">
            <Button {...ContactButton}/>
            <Button {...DownloadButton}/>
          </div>
          <div className="bg-pt-green bg-opacity-80 absolute inset-x-0 bottom-0 h-32 md:h-16 flex flex-wrap md:flex-nowrap justify-around md:justify-center items-center md:space-x-20 text-white p-4">
            <div className="w-1/2 md:w-auto text-center md:text-left mb-2 md:mb-0">
              <p>• Easy to use</p>
            </div>
            <div className="w-1/2 md:w-auto text-center md:text-right mb-2 md:mb-0">
              <p>• Free to download</p>
            </div>
            <div className="w-1/2 md:w-auto text-center md:text-left">
              <p>• Convenience</p>
            </div>
            <div className="w-1/2 md:w-auto text-center md:text-right">
              <p>• Increased Revenue</p>
            </div>
          </div>
              </div>
            );
      break;
    case 'news':
      src = '/Images/hero-news.png';
      alt = 'News Banner';
      imageClass = 'h-[40vh] object-cover md:h-auto';
      break;
    case 'contact':
      src = '/Images/hero-contact.png';
      alt = 'Contact Banner';
      imageClass = 'hidden md:block';
      break;
    case 'about':
      src = '/Images/hero-aboutUs.png';
      alt = 'About Us Banner';
      imageClass = 'h-[40vh] object-cover md:h-auto max-w-full';
      break;
    default:
      src = '/Images/hero.homepage.png';
      alt = 'Default Banner';  
  }

  return (
    <div className="relative">
      <img src={src} alt={alt} className={`w-full ${imageClass}`} />
      {page === 'home' && bannerContent}
    </div>
  );
};

export default Banner;


