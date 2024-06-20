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
  const x = useTranslations("read")
  const t = useTranslations("home")
  const locale = useLocale(); 


    return (
        <div className="min-h-[1000px] bg-pt-background">
            <TitleSubtitle
            title={t("Comp_4_title")}
            subtitle={t("Comp_4_subtitle")}
            overtitle={t("Comp_4_overtitle")}
            />
            
            <div className="flex  flex-col m-6 md:grid md:grid-cols-3 md:gap-6 rounded-lg justify-evenly bg-pt-background pt-14 pb-14 md:pb-10 items-center md:items-start">
                {projects.map((project, index) => (
                    <div className="flex bg-white flex-col basis-1/3 p-10 min-h-[580px] my-4" key={index}>
                        
                        
                        <Image
                        className='rounded-xl'
                        src={project.image_article}
                        width={300}
                        height={300}
                        alt={project.title_sv}
                        />
                        <p className='h6 pt-4 pb-4'>{project.title_sv} </p>
                        <p className='p2 max-w-[300px]'>{project.text_Short_sv}</p>
                        
                        <Link
                              href={`/${locale}/news/${project.slug}`}
                              className="hover:text-grey1 underline font-bold"
                                  >
                                {x("text")}
                    </Link>
                    
                    </div>
                    

                ))}
            </div>
        </div>
    );
};

export default Articles;
