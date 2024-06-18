import Image from "next/image";
import ImageCarPhone from "../../../public/Images/mobileDownloadNow-picture.png"
import Apple from "../../../public/Images/appleButton.png"
import Google from "../../../public/Images/googleButton.png"
import QRCode from "../../../public/Images/qrCode.png"
import { useTranslations } from "next-intl";


const DownloadNow = () => {
    const t = useTranslations("download_now")
    return (
        <div className="min-h-[881px] md:h-[80vh] pt-12 pb-12 flex flex-col-reverse items-center md:flex-row ">
            
            <div className="flex flex-col items-center m-4 md:basis-1/2 md:items-start ">
                <p className="h5 pb-8">{t("title")}</p>
                <p className="p2 w-[80%]">{t("p")}</p>
                <div className="mt-6 mb-6 flex">
                    <Image className="m-4"
                        src={Apple}
                        width={150}
                        height={150}
                        alt=""
                    />
                    <Image className="m-4"
                        src={Google}
                        width={150}
                        height={150}
                        alt=""
                    />
                </div>
                <Image className="m-4"
                        src={QRCode}
                        width={120}
                        height={120}
                        alt=""
                    />
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
