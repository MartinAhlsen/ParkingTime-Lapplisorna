"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './components/header/page';
import Hero from './components/hero/page';

const App = () => {
  const pathname = usePathname();

  return (
    <div>
      <Header />
      <Hero currentPath={pathname} />
      {/* Other content of the page */}
    </div>
  );
};

export default App;
