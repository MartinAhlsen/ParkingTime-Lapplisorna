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
            overtitle={null}
            />
            
            <div className="m-6 flex flex-col md:grid md:grid-cols-3 md:gap-6 rounded-lg bg-pt-background pt-14 pb-14 md:pb-10 justify-evenly items-center md:items-start">
    {projects.map((project, index) => (
        <div  className="bg-white flex flex-col p-10 my-4  w-full sm:w-[580px] md:min-h-[750px] lg:min-h-[650px] md:max-w-none md:w-auto" key={index}>
                        {locale==="sv" &&
                        <>
                          <Image
                          className='rounded-xl w-full h-[300px] object-cover'
                          src={project.image_article}
                          width={800}
                          height={800}
                          alt={project.title_sv}
                          />
                          <p className='h6 pt-4 pb-4'>{project.title_sv} </p>
                          <p className='p2 max-w-[300px]'>{project.text_Short_sv}</p>
                        </>
                        }
                        {locale!=="sv" &&
                        <>
                          <Image
                          className='rounded-xl w-full h-[300px] object-cover'
                          src={project.image_article}
                          width={800}
                          height={800}
                          alt={project.title_en}
                          />
                          <p className='h6 pt-4 pb-4'>{project.title_en} </p>
                          <p className='p2 max-w-[300px]'>{project.text_Short_en}</p>
                        </>
                        }
                        
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
