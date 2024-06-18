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
        <div className="flex flex-col p-2 md:p-20 items-center">
            <div className="bg-white mb-2 md:mb-4 rounded-[18px] border-pt-lightgrayborder border-2">
                <Image
                    src={imageLink}
                    className="object-cover rounded-lg"
                    width={120}
                    height={120}
                    alt={title}
                />
            </div>
            
            <div className="text-center max-w-48">
                <p className="bg-pt-background pb-2 text-lg font-bold">{title}</p>
                <p className="bg-pt-background text-sm md:text-base">{paragraph}</p>
            </div>
        </div>
    );
};

export default ValuesCard;

