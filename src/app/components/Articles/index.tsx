"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getProjects } from '../../../../sanity/sanity-utils';
import TitleSubtitle from '../TitleSubtitle';
import Image, { StaticImageData } from 'next/image';
interface Project {
  image: StaticImageData;
  id: string;
  name: string;
  
  // Add other project properties as needed
}

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
        <div className="min-h-[1000px] bg-pt-grey2">
            <TitleSubtitle
                title="Don’t miss"
                subtitle="We are expanding rapidly, subscribe to our newsletter."
                overtitle="News"
            />
            {/* You can render the projects here if needed */}
            <div>
                {projects.map(project => (
                    <div key={project.id}>{project.name}  
                    <Image
                        src={project.image}
                        width={100}
                    height={100}
      alt="Picture of the author"
    />
                    
                    </div>
                    

                ))}
            </div>
        </div>
    );
};

export default Articles;
