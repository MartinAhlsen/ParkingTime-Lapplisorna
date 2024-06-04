"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './components/header';
import Button from './components/Button';

import { getProjects } from '../../sanity/sanity-utils';
import project from '../../sanity/schemas/project-schema';

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
  const pathname = usePathname();
  const projects = await getProjects();
  return (
    <div>
      <Header />
      <main>Parking Time</main>
      <Button {...TestButton} />
      <div>
        {projects.map((project)=> (
          <div key={project._id}>{project.name}</div>

        ))}


      </div>
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
};

export default App;