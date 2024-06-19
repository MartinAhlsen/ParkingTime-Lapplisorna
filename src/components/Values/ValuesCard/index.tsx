import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

interface ValuesCardProps {
    imageLink: StaticImageData,
    title: string,
    paragraph: string
}

const ValuesCard = ({imageLink, title, paragraph}: ValuesCardProps) => {
    return (
        <div className="flex flex-col p-2 md:p-16 items-center">
            <div className="bg-white mb-4 md:mb-4 rounded-[18px] border-pt-lightgrayborder border-2">
                <Image
                    src={imageLink}
                    className="object-cover rounded-lg"
                    width={140}
                    height={140}
                    alt={title}
                />
            </div>
            
            <div className="text-center max-w-48 pb-4">
                <p className="bg-pt-background pb-2 text-2xl font-bold">{title}</p>
                <p className="bg-pt-background md:text-base">{paragraph}</p>
            </div>
        </div>
    );
};

export default ValuesCard;

