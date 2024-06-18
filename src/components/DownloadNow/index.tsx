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
            
            <div className="flex flex-col items-center m-4 md:ml-[100px] md:basis-1/2 md:items-start ">
                <p className="h5 pb-8">{t("title")}</p>
                <p className="p2 w-[80%]">{t("p")}</p>
                <div className="mt-6 mb-6 flex">
                <a href="https://apps.apple.com/se/app/parking-time/id1611019108" target='_blank'rel="noopener noreferrer">
                    <Image className="m-4"
                        src={Apple}
                        width={150}
                        height={150}
                        alt="apple store link"
                    />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=se.parkingtime.app" target='_blank'rel="noopener noreferrer">
                    <Image className="m-4"
                        src={Google}
                        width={150}
                        height={150}
                        alt="google store link"
                    />
                    </a>
                </div>
                <Image className="m-4 md:m-0 md:ml-10  hidden md:inline-block "
                        src={QRCode}
                        width={120}
                        height={120}
                        alt="qr code"
                    />
            </div>
            <Image className="mt-5 mb-10  md:w-[600px] md:basis-1/2 "
                    src={ImageCarPhone}
                    width={300}
                    height={300}
                    alt="image"
                    />
        </div>
    )
};

export default DownloadNow
