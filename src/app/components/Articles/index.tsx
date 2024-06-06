"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getProjects } from '../../../../sanity/sanity-utils';
import TitleSubtitle from '../TitleSubtitle';
import Image, { StaticImageData } from 'next/image';
import { PortableTextBlock } from 'next-sanity';


interface Project {
  image: StaticImageData;
  id: string;
  name: string;
  alt: string;
  content: PortableTextBlock[];//type for arra?????

}

const Articles: React.FC = () => {
  const pathname = usePathname();
  const [projects, setProjects] = useState<Project[]>([]);
//DAVIDE-CHnage in normal dat fetching???
  useEffect(() => {
    const fetchProjects = async () => {
      const fetchedProjects = await getProjects();
      setProjects(fetchedProjects);
    };

    fetchProjects();
  }, []);

    return (
        <div className="min-h-[1000px] bg-pt-grey2">
            <TitleSubtitle
                title="Don’t miss"
                subtitle="We are expanding rapidly, subscribe to our newsletter."
                overtitle="News"
            />
            {/* You can render the projects here if needed */}
            <div className="flex  flex-col md:flex-row justify-evenly bg-pt-grey2">
                {projects.map(project => (
                    <div className="flex bg-white flex-col" key={project.id}>
                        
                        <p className='h6'>{project.name} </p>
                        <Image
                        src={project.image}
                        width={300}
                        height={300}
                        alt={project.name}
                        />
                        <p>{project.alt}</p>
                        <p className='links'>Read more</p>
                    
                    </div>
                    

                ))}
            </div>
        </div>
    );
};

export default Articles;
