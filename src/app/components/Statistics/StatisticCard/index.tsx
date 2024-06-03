import { MotionValue } from "framer-motion";
import Image, { StaticImageData } from "next/image"


interface StatisticCardProps {
    readonly number: number | MotionValue<number>,
    readonly subtitle: string,
    readonly imageLink: StaticImageData
}

const StatisticCard = ({number,subtitle,imageLink}:StatisticCardProps) => {
    return (
        <div className="flex flex-row justify-center items-center basis-1-5 p-8">
          <Image src={imageLink}
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
