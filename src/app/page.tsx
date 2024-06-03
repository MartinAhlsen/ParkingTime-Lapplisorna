"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './components/header/page';
import Button from '../components/Button';

interface ButtonProperties {
  text: string;
  url: string;
  colorTheme: "light" | "dark";
  formCategoryState?: string;
}

const TestButton: ButtonProperties = {
  text: "Test",
  url: "/se/news",
  colorTheme: "dark",
};

const App = () => {
  const pathname = usePathname();

  return (
    <div>
      <Header />
      <main>Parking Time</main>
      <Button {...TestButton} />
    </div>
  );
};

export default App;
