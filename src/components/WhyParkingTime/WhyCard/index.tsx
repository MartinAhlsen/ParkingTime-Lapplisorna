import { StaticImageData } from "next/image";

import Image from "next/image"


interface WhyCardProps {
    imageLink: StaticImageData,
    title: string,
    paragraph: string
}

const WhyCard = ({imageLink, title, paragraph}:WhyCardProps) => {
    return (
        <div className="flex flex-col p-4 m-4 md:m-10 md:p-10">
            <Image src={imageLink} 
                width={50} 
                height={50} 
                alt={title} 
                />
            <p className="h5 py-4">{title}</p>
            <p className="p2">{paragraph}</p>
          
        </div>
    )
};

export default WhyCard
