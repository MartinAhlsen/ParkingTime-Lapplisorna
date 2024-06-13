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
        <div className='flex flex-col h-[550px] rounded-2xl bg-white m-4'>
          <Image className="m-6"
            src={imageMain}
            width={100}
            height={100}
            alt="Picture of the author"
            />
          <p className="p3Quote p-8">{mainText}</p>
          <div className='flex flex-row'>
          <Image
          className="rounded-full m-5 md:mx-4 md:m-0"
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
