import Image from "next/image";
import SmartParkingImg from "../../../../public/Images/smartParkingSolution-homepage.png"
import ArrowTextSubComponent from "./ArrowTextSubComponent";

const SmartParkingSolution = () => {
    return (
        <div className="min-h-[881px] md:h-[80vh] pt-12 pb-12 flex flex-col items-center md:flex-row ">
            <Image className="mt-10 mb-10  md:basis-1/2"
      src={SmartParkingImg}
      width={800}
      height={800}
      alt=""
    />
    <div className="flex flex-col items-center m-4 md:basis-1/2 md:items-start">
        <p className="h4 pb-8">Smart Parking</p>
        <p className="p2">The parking disc has long been a tool to promote circulation and activity in city centers. It's a fantastic invention that benefits residents, visitors, and local businesses alike. We want to be part of this evolution by creating a free digital parking disc.</p>
        <div className="mt-6 mb-6">
        <ArrowTextSubComponent text="We aim to support the growth and efficiency of urban areas."/>
        <ArrowTextSubComponent text="Our digital parking disc simplifies the parking process."/>
        <ArrowTextSubComponent text="Any parking attendant systems can easily be integrated with our system."/>
        </div>
        
        <p className="p2">We're excited to share more about our solution in a meeting.</p>
    </div>
          
        </div>
    )
};

export default SmartParkingSolution
