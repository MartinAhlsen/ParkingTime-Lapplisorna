import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
    imageMain: StaticImageData,
    imageTestimonial: StaticImageData,
    mainText: string, 
    name: string, 
    role: string
}

const TestimonialCard = ({ imageMain, mainText, name, role }: TestimonialCardProps) => {
    return (
        <div className='flex flex-col h-[400px] md:h-[450px] md:w-[500px] lg:h-[410px] rounded-2xl bg-white m-6 sm:m-20 md:m-6 shadow-lg'>
            <Image className="m-8 sm:m-16 md:m-8"
                src={imageMain}
                width={100}
                height={100}
                alt="Picture of the author"
                />
                <div className="overflow-auto px-4 py-4 flex flex-col flex-grow justify-between">
                    <p className="p3Quote">{mainText}</p>
                    <div className="flex flex-col items-center mt-4">
                        <p className="links text-[#F85252] text-lg font-semibold text-center max-w-full break-words">{name}</p>
                        <p className="p2 text-center max-w-full break-words">{role}</p>
                    </div>
                </div>
            </div>
        )
    };
    
    export default TestimonialCard;
