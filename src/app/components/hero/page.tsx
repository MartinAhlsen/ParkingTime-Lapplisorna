import React from 'react';

interface HeroProps {
  currentPath: string;
}

const banners: { [key: string]: { src: string, style: string } } = {
  '/': { src: '/images/hero-homepage.png', style: 'h-screen' },
  '/about-us': { src: '/images/hero-aboutUs.png', style: 'h-2/5' },
  '/contact-us': { src: '/images/hero-contact.png', style: 'hidden md:block h-2/5' },
  '/news': { src: '/images/hero-news.png', style: 'h-2/5' },
};

const Hero = ({ currentPath }: HeroProps) => {
  const banner = banners[currentPath] || banners['/'];

  return (
    <div className={`relative w-full h-64 ${banner.style}`}>
      <img src={banner.src} alt="Banner" className="w-full h-full object-cover" />
    </div>
  );
};

export default Hero;