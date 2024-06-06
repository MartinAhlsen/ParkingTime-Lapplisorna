"use client"
import React from 'react';
import { usePathname } from "next/navigation";
import { getProjects } from "../../../../sanity/sanity-utils";
import TitleSubtitle from "../TitleSubtitle";


const Articles = async() => {
    const pathname = usePathname();
    const projects = await getProjects();
    return (
        <div className="min-h-[1000px] bg-pt-grey2">
          <TitleSubtitle
            title="Don´t miss"
            subtitle="We are expanding rapidly, subscribe to our newsletter."
            overtitle="News"
          />
        </div>
    )
};

export default Articles
