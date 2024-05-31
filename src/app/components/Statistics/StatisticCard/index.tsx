import { MotionValue } from "framer-motion";
import Image, { StaticImageData } from "next/image"


interface StatisticCardProps {
    readonly number: number | MotionValue<number>,
    readonly subtitle: string,
    readonly imageLink: StaticImageData
}

const StatisticCard = ({number,subtitle,imageLink}:StatisticCardProps) => {
    return (
        <div className="flex flex-row justify-center items-center bais-1-5 p-8">
          <Image src={imageLink}
                width={50}
                height={50}
                alt={subtitle}/>
                <div className="flex flex-col">
                    <p className="text-xl font-bold">{number}+</p>
                    <p className="text-base font-medium">{subtitle}</p>

                </div>
            
        </div>
    )
};

export default StatisticCard
