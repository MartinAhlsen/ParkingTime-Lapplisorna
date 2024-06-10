import { MotionValue } from "framer-motion";
import Image, { StaticImageData } from "next/image"


interface StatisticCardProps {
    readonly number: number ,
    readonly subtitle: string,
    readonly imageLink: StaticImageData
}

const StatisticCard = ({number,subtitle,imageLink}:StatisticCardProps) => {
    return (
        <div className="flex flex-row justify-center items-center basis-1-5 p-8">
          <Image  className="md:w-[65px] md:h-[65px]" src={imageLink}
                width={50}
                height={50}
                alt={subtitle}/>
                <div className="flex flex-col">
                    <p className="h6">{number}+</p>
                    <p className="p1">{subtitle}</p>

                </div>
            
        </div>
    )
};

export default StatisticCard
