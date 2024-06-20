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
      
                        
                        
     
      {locale==="sv" &&
      <p className='p2 max-w-[300px]'>{article.text_Short_sv}</p>
      
      }

      {locale!=="sv" &&
      
      <p className='p2 max-w-[300px]'>{article.text_Short_en}</p>
      }
     
    </>
  );
};

export default SingleNews;