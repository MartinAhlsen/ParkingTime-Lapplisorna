import { StaticImageData } from "next/image";
import Image from "next/image";

interface TestimonialCardProps {
    imageMain: StaticImageData,
    imageTestimonial:StaticImageData,
    mainText: string, 
    name:string, 
    role:string
}

const TestimonialCard = ({ imageMain, imageTestimonial, mainText, name, role }: TestimonialCardProps) => {
  return (
    <div className="h-auto w-auto md:max-w-[500px] xl:max-w-[480px] rounded-2xl bg-white m-4 shadow-lg p-10">
          <div className="flex justify-between items-start mb-4">
              <Image
                  src={imageMain}
                  width={100}
                  height={100}
                  alt="Main image"
                  className='object-contain'
              />
          </div>
          <p className="p3Quote mb-6">{mainText}</p>
          <div className='flex items-center mt-auto'>
              <Image
                  className="rounded-full mr-4"
                  src={imageTestimonial}
                  width={50}
                  height={50}
                  alt="Testimonial image"
              />
              <div className='flex flex-col'>
                  <p className="text-lg font-semibold text-[#F85252]">{name}</p>
                  <p className="text-sm text-gray-600">{role}</p>
              </div>
          </div>
      </div>
  );
};

export default TestimonialCard;
