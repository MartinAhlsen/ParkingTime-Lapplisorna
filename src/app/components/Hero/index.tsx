import Image from 'next/image';

interface BannerProps {
  page: string;
}

const Banner: React.FC<BannerProps> = ({ page }) => {
  let src, alt, imageClass;

  switch (page) {
    case 'home':
      src = '/Images/hero-homepage.png';
      alt = 'Home Banner';
      imageClass = 'w-screen';
      break;
    case 'news':
      src = '/Images/hero-news.png';
      alt = 'New Banner';
      imageClass = 'w-2/5';
      break;
    case 'contact':
      src = '/Images/hero-contact.png';
      alt = 'Contact Banner';
      imageClass = 'w-2/5 hidden md:block';
      break;
    case 'about':
      src = '/Images/hero-aboutUs.png';
      alt = 'About Us Banner';
      imageClass = 'w-2/5';
      break;
    default:
      src = '/Images/hero.homepage.png';
      alt = 'Default Banner';
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={imageClass}
      width={500}
      height={300}
      layout="responsive"
    />
  );
};

export default Banner;


