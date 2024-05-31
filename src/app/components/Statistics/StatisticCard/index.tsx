import Image, { StaticImageData } from "next/image"


interface StatisticCardProps {
    readonly number: number,
    readonly subtitle: string,
    readonly imageLink: StaticImageData
}

const StatisticCard = ({number,subtitle,imageLink}:StatisticCardProps) => {
    return (
        <div className="flex justify-center items-center">
          <Image src={imageLink}
                width={50}
                height={50}
                alt={subtitle}/>
            <p className="text-base font-bold">{number}+</p>
            <p className="text-base font-bold">{subtitle}</p>
        </div>
    )
};

export default StatisticCard
