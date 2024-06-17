import Image from "next/image";
import ImageCarPhone from "../../../public/Images/mobileDownloadNow-picture.png"


const RightTextLeftImage = () => {
    return (
        <div className="min-h-[881px] md:h-[80vh] pt-12 pb-12 flex flex-col-reverse items-center md:flex-row ">
            
            <div className="flex flex-col items-center m-4 md:basis-1/2 md:items-start">
                <p className="h5 pb-8">Our Vision </p>
                <p className="p2">Parking Time Sweden is a tech startup aiming to revolutionize the parking experience for all parties involved – the parker, the parking attendant, the municipality, and the property owner. 
                We currently offer a free digital parking disc within an app to complement the existing range of parking apps.</p>
                <p className="h5 pb-8">Our Story </p>
                <p className="p2">Parking Time Sweden was founded in 2021 in Luleå. Today, we operate throughout Sweden with the ambition to expand globally in the coming years and we hope to have you with us on our journey!</p>
            <div className="mt-6 mb-6">
        </div>
        
        
    </div>
    <Image className="mt-5 mb-10  md:w-[600px] "
      src={ImageCarPhone}
      width={300}
      height={300}
      alt=""
    />
        </div>
    )
};

export default RightTextLeftImage
