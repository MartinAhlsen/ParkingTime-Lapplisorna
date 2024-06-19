"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getProjects } from '../../../sanity/sanity-utils';
import TitleSubtitle from '../TitleSubtitle';
import Image, { StaticImageData } from 'next/image';

import { Project } from '../../../types/Project';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';



const Articles: React.FC = () => {
  const pathname = usePathname();
  const [projects, setProjects] = useState<Project[]>([]);
  const [singleArticle, setSingleArticle] = useState<any>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const fetchedProjects = await getProjects();
      setProjects(fetchedProjects);
    };

    fetchProjects();
  }, []);

  const t = useTranslations("home")
  const locale = useLocale(); 


    return (
        <div className="min-h-[1000px] bg-pt-background">
            <TitleSubtitle
            title={t("Comp_4_title")}
            subtitle={t("Comp_4_subtitle")}
            overtitle={t("Comp_4_overtitle")}
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
                        
                        <Link
                              href={`/${locale}/news/${project.slug}`}
                              className="hover:text-grey1 underline"
                                  >
                                Read more
                    </Link>
                    
                    </div>
                    

                ))}
            </div>
        </div>
    );
};

export default Articles;
