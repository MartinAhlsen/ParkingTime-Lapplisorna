import { StaticImageData } from "next/image";
import Image from "next/image"
import React from "react";


interface ValuesCardProps {
    imageLink: StaticImageData,
    title: string,
    paragraph: string
}

const ValuesCard = ({imageLink, title, paragraph}:ValuesCardProps) => {
    return (
        <div className="flex flex-col p-4 m-4 md:m-8 md:p-8 items-center flex-basis-1/3">
            <div className="bg-white flex items-center w-[95px] mb-6 rounded-[18px] border-pt-lightgrayborder border-2">
            <Image src={imageLink} 
            className="items-center "
                objectFit="cover"
                width={250} 
                height={250} 
                alt={title} 
                />

            </div>
            
            <p className="p4 bg-pt-background pb-6 w-[197px] text-center">{title}</p>
            <p className="p2 bg-pt-background text-center">{paragraph}</p>
          
        </div>
    )
};

export default ValuesCard

