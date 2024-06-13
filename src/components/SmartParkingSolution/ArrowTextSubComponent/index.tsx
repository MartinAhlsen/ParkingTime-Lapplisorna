import Image from "next/image";
import arrow from "../../../../public/Images/arrowRight.svg"

interface ArrowTextSubComponentProps {
    text: string,
}

const ArrowTextSubComponent = ({text}:ArrowTextSubComponentProps) => {
    return (
        <div className="flex">
            <Image className="h-16"
      src={arrow}
      width={40}
      height={40}
      alt="arrow"
    />
    <div>
    <p className="h7 pt-4 pb-2 m-0">{text}</p>

    </div>
          
        </div>
    )
};

export default ArrowTextSubComponent
