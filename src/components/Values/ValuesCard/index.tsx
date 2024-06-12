import { StaticImageData } from "next/image";

import Image from "next/image"


interface ValuesCardProps {
    imageLink: StaticImageData,
    title: string,
    paragraph: string
}

const ValuesCard = ({imageLink, title, paragraph}:ValuesCardProps) => {
    return (
        <div className="flex flex-col p-4 m-4 md:m-8 md:p-8">
            <div className="bg-white flex items-center">
            <Image src={imageLink} 
                width={50} 
                height={50} 
                alt={title} 
                />

            </div>
            
            <p className="p4 bg-pt-background">{title}</p>
            <p className="p2 bg-pt-background">{paragraph}</p>
          
        </div>
    )
};

export default ValuesCard

