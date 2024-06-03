import Image from "next/image";
import SmartParkingImg from "../../../../../public/Images/smartParkingSolution-homepage.png"

const SmartParkingSolution = () => {
    return (
        <div className="h-[80vh] flex flex-col items-center md:flex-row">
            <Image
      src={SmartParkingImg}
      width={340}
      height={340}
      alt=""
    />
    <div className="flex flex-col ">
        <h1>TEXT HERE</h1>
    </div>
          
        </div>
    )
};

export default SmartParkingSolution
