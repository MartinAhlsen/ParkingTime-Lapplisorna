
interface BannerProps {
  page: string;
}

const Banner: React.FC<BannerProps> = ({ page }) => {
  let src, alt, imageClass;

  switch (page) {
    case 'home':
      src = '/Images/hero-homepage.png';
      alt = 'Home Banner';
      imageClass = 'h-[calc(100vh-80px)]';
      break;
    case 'news':
      src = '/Images/hero-news.png';
      alt = 'News Banner';
      imageClass = 'h-[40vh] w-full object-cover md:h-auto';
      break;
    case 'contact':
      src = '/Images/hero-contact.png';
      alt = 'Contact Banner';
      imageClass = 'hidden md:block';
      break;
    case 'about':
      src = '/Images/hero-aboutUs.png';
      alt = 'About Us Banner';
      imageClass = 'h-[40vh] w-full object-cover md:h-auto max-w-full';
      break;
    default:
      src = '/Images/hero.homepage.png';
      alt = 'Default Banner';
  }

  return (
    <div>
      <img src={src} alt={alt} className={`w-full ${imageClass}`} />
    </div>
  );
};

export default Banner;


