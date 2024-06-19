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
      setArticle(fetchedProjects);
    };

    fetchProjects();
  }, [params.slug]);


  return (
    <>
      <Header />
      
                        <p className='h6 pt-4 pb-4'>{params.slug} </p>
                        <p className='p2 max-w-[300px]'>{params.slug}</p>
     
      
     
    </>
  );
};

export default SingleNews;