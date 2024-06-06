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
      <div className='bg-red-500'>
        {projects.map((project)=> (
          <div key={project._id}>{project.name}</div>

        ))}


      </div>
  </div>
  );
};

export default App;