"client component";

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './components/header';

import Footer from "./components/Footer/Footer";
import Button from './components/Button';



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

      <div className="h1">Lorem ipsum dolor sit amet.</div>
      <div className="h2">Lorem ipsum dolor sit amet.</div>
      <div className="h3">Lorem ipsum dolor sit amet.</div>
      <div className="h4">Lorem ipsum dolor sit amet.</div>
      <div className="h5">Lorem ipsum dolor sit amet.</div>
      <div className="h6">Lorem ipsum dolor sit amet.</div>
      <div className="h7">Lorem ipsum dolor sit amet.</div>
      <div className="button-text">Lorem ipsum dolor sit amet.</div>
      <div className="p1">Lorem ipsum dolor sit amet.</div>
      <div className="links">Lorem ipsum dolor sit amet.</div>
      <div className="p2">Lorem ipsum dolor sit amet.</div>
      <div className="p3">Lorem ipsum dolor sit amet.</div>
      <div className="p3Italic">Lorem ipsum dolor sit amet.</div>
      <div className="p3Quote">Lorem ipsum dolor sit amet.</div>
  </div>
   
  );
}
