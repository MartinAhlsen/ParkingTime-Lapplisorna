"use client";

import React, { useEffect, useState } from "react";

import Header from "../../../../components/header";
import { getProjects } from "../../../../../sanity/sanity-utils";
import Image, { StaticImageData } from 'next/image';
import { useLocale } from "next-intl";



const SingleNews = ({ params }: { params: { slug: string } }) => {
  const locale = useLocale(); 
  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const fetchedProjects = await getProjects();
      const filteredArticle = fetchedProjects.find((project: any) => project.slug === params.slug);
      setArticle(filteredArticle);
    };

    fetchProjects();
  }, [params.slug]);

  if (!article) {
    return <p>Loading...</p>;
  }
`/${locale}/contact_us`
  return (
    <>
      <Header />
      
              <div className="flex flex-col items-center p-8 grow">         
                        
     
              {locale==="sv" &&
      <>
      <div className="flex flex-row items-center justify-start">
      <Image
                        className='rounded-full aspect-square object-cover border-black border-[1px] mr-2 '
                        src={article.image_author}
                        width={50}
                        height={50}
                        alt={article.title_sv}
                        />
      <p className='p1 max-w-[300px] items-center	'>{article.author}, {article.date}</p>
      </div>
      
      <p className='h4 max-w-[300px] md:max-w-[700px] py-6'>{article.title_sv}</p>
      <Image
                        className='rounded-xl md:w-[500px] md:h-[300px] lg:w-[700px] lg:h-[650px]'
                        src={article.image_article}
                        width={300}
                        height={300}
                        alt={article.title_sv}
                        />
      <p className='p2 max-w-[300px] md:max-w-[700px] py-6'>{article.text_Long_sv}</p>
      
      </>
      }

      {locale!=="sv" &&
      <>
      <div className="flex flex-row items-center justify-start">
      <Image
                        className='rounded-full aspect-square object-cover border-black border-[1px] mr-2 '
                        src={article.image_author}
                        width={50}
                        height={50}
                        alt={article.title_en}
                        />
      <p className='p1 max-w-[300px] items-center	'>{article.author}, {article.date}</p>
      </div>
      
      <p className='h4 max-w-[300px] md:max-w-[700px] py-6'>{article.title_en}</p>
      <Image
                        className='rounded-xl md:w-[500px] md:h-[300px] lg:w-[700px] lg:h-[650px]'
                        src={article.image_article}
                        width={300}
                        height={300}
                        alt={article.title_en}
                        />
      <p className='p2 max-w-[300px] md:max-w-[700px] py-6'>{article.text_Long_en}</p>
      
      </>
      }
     </div> 
    </>
  );
};

export default SingleNews;