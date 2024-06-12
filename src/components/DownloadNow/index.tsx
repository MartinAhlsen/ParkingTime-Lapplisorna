import Image from "next/image";
import ImageCarPhone from "../../../public/Images/mobileDownloadNow-picture.png"
import { useTranslations } from "next-intl";


const DownloadNow = () => {
    const t = useTranslations("donwloand_now")
    return (
        <div className="min-h-[881px] md:h-[80vh] pt-12 pb-12 flex flex-col-reverse items-center md:flex-row ">
            
            <div className="flex flex-col items-center m-4 md:basis-1/2 md:items-start">
                <p className="h5 pb-8">{t("title")}</p>
                <p className="p2">T{t("p")}</p>
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
