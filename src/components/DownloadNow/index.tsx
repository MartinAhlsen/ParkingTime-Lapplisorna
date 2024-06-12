import Image from "next/image";
import ImageCarPhone from "../../../public/Images/mobileDownloadNow-picture.png"


const DownloadNow = () => {
    return (
        <div className="min-h-[881px] md:h-[80vh] pt-12 pb-12 flex flex-col-reverse items-center md:flex-row ">
            
            <div className="flex flex-col items-center m-4 md:basis-1/2 md:items-start">
                <p className="h5 pb-8">Our Vision </p>
                <p className="p2">The app is free to download for you as a user. However, your municipality must be registered as a customer with us for our app to be valid in your area. If our app is not available in your municipality, you are welcome to contact us or suggest us to your municipality!</p>
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

export default DownloadNow
