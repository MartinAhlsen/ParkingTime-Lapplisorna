"use client";

import React, { useEffect, useState } from "react";

import Header from "../../../../components/header";
import { getProjects } from "../../../../../sanity/sanity-utils";
import Image, { StaticImageData } from 'next/image';



const SingleNews = ({ params }: { params: { slug: string } }) => {
  
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

  return (
    <>
      <Header />
      
                        <p className='h6 pt-4 pb-4'>{article.name} </p>
                        <p className='p2 max-w-[300px]'>{article.text2}</p>
     
      
     
    </>
  );
};

export default SingleNews;