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
        <div className='flex flex-col h-[550px] w-[315px] md:h-[500px] md:w-[500px] lg:h-[450px] rounded-2xl bg-white m-6'>
          <Image className="m-8"
            src={imageMain}
            width={100}
            height={100}
            alt="Picture of the author"
            />
          <p className="p3Quote p-6">{mainText}</p>
          <div className='flex flex-row'>
          <Image
          className="rounded-full m-4 md:mx-4 md:m-0"
            src={imageTestimonial}
            width={50}
            height={50}
            alt="Picture of the author"
            />
            <div className='flex flex-col'>
                <p className="links text-[#F85252]">{name}</p>
                <p className="p2">{role}</p>
            </div>
          </div>
        </div>
    )
};

export default TestimonialCard
