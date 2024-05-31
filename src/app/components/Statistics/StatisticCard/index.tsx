import Image from "next/image"


interface StatisticCardProps {
    readonly number: number,
    readonly subtitle: string,
    readonly imageLink: string
}

const StatisticCard = ({number,subtitle,imageLink}:StatisticCardProps) => {
    return (
        <div>
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
