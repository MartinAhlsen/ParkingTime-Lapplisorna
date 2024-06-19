import React, { useEffect, useState } from "react";

import Header from "../../../components/header";



import { usePathname } from "next/navigation";
import { getProjects } from "../../../../sanity/sanity-utils";
import { Project } from "../../../../types/Project";

const News = () => {
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
    <>
      <Header />
      
     <p>Post: {project.slug}</p> 
      
     
    </>
  );
};

export default News;