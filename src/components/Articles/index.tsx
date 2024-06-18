"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getProjects } from '../../../sanity/sanity-utils';
import TitleSubtitle from '../TitleSubtitle';
import Image, { StaticImageData } from 'next/image';

import { Project } from '../../../types/Project';



const Articles: React.FC = () => {
  const pathname = usePathname();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const fetchedProjects = await getProjects();
      setProjects(fetchedProjects);
    };

    fetchProjects();
  }, []);

    return (
        <div className="min-h-[1000px] bg-pt-background">
            <TitleSubtitle
                title="Don’t miss"
                subtitle="We are expanding rapidly, subscribe to our newsletter."
                overtitle="News"
            />
            
            <div className="flex  flex-col md:flex-row justify-evenly bg-pt-background pt-14 pb-14 md:pb-10">
                {projects.map((project, index) => (
                    <div className="flex bg-white flex-col basis-1/3 p-10" key={index}>
                        
                        
                        <Image
                        className='rounded-xl'
                        src={project.image}
                        width={300}
                        height={300}
                        alt={project.name}
                        />
                        <p className='h6 pt-4 pb-4'>{project.name} </p>
                        <p className='p2 max-w-[300px]'>{project.text2}</p>
                        
                        <p className='links'>Read more</p>
                    
                    </div>
                    

                ))}
            </div>
        </div>
    );
};

export default Articles;
