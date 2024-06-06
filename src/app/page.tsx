"use client";

import React from 'react';
import Header from './components/header';
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

const App = async () => {
  
  return (
    <div>
      <Header />
      <main>Parking Time</main>
      <Button {...TestButton} />
      
  </div>
  );
};

export default App;