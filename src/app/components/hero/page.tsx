import React from 'react';

interface HeroImageProps {
  page: string;
}

const HeroImage = ({ page }: HeroImageProps) => {
  let imageUrl;
  let imageClassName;

  switch (page) {
    case 'about':
      imageUrl = '/images/hero-aboutUs.png';
      imageClassName = "w-full";
      break;
    case 'contact':
      imageUrl = '/images/hero-contact.png';
      imageClassName = "hidden md:block md:w-full";
      break;
    case 'news':
      imageUrl = '/images/hero-news.png';
      imageClassName = "w-full";
      break;
    case 'home':
    default:
      imageUrl = '/images/hero-homepage.png';
      imageClassName = "h-90 md:h-screen w-full";
      break;
  }

  return (
    <div>
      <div>
        <img src={imageUrl} alt={`${page} hero`} className={imageClassName} />
      </div>
    </div>
  );
};

export default HeroImage;

