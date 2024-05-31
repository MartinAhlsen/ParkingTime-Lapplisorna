import { StaticImageData, Image } from "next/image";

interface WhyCardProps {
    imageLink: StaticImageData,
    title: string,
    paragraph: string
}

const WhyCard = ({imageLink, title, paragraph}:WhyCardProps) => {
    return (
        <div className="flex flex-col">
            <Image src={imageLink} 
                width={50} 
                height={50} 
                alt={title} 
                />
            <p className="h6">PLACEHOLDER</p>
            <p className="p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ea officia consectetur eaque! Eaque vero ipsum deserunt molestias reprehenderit suscipit.</p>
          
        </div>
    )
};

export default WhyCard
