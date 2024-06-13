import { StaticImageData } from "next/image";
import Image from "next/image";

interface TestimonialCardProps {
    imageMain: StaticImageData,
    imageTestimonial:StaticImageData,
    mainText: string, 
    name:string, 
    role:string
}

const TestimonialCard = ({imageMain, imageTestimonial, mainText, name, role}:TestimonialCardProps) => {
    
    return (
        <div className='flex flex-col h-[614px] w-[315px] md:h-[376px] md:w-[500px] rounded-2xl bg-white'>
          <Image
            src={imageMain}
            width={100}
            height={100}
            alt="Picture of the author"
            />
          <p>{mainText}</p>
          <div className='flex flex-row'>
          <Image
          className="rounded-full"
            src={imageTestimonial}
            width={50}
            height={50}
            alt="Picture of the author"
            />
            <div className=''>
                <p>{name}</p>
                <p>{role}</p>
            </div>
          </div>
        </div>
    )
};

export default TestimonialCard
