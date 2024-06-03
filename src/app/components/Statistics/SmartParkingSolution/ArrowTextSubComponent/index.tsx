import Image from "next/image";
import arrow from "../../../../../../public/Images/arrowRight.svg"

interface ArrowTextSubComponentProps {
    text: string,
}

const ArrowTextSubComponent = ({text}:ArrowTextSubComponentProps) => {
    return (
        <div className="flex">
            <Image
      src={arrow}
      width={45}
      height={45}
      alt="arrow"
    />
    <div>
    <p className="h7 pt-4 pb-2">{text}</p>

    </div>
          
        </div>
    )
};

export default ArrowTextSubComponent
