import Image from "next/image";
import MatildaImg from "../../../../public/Images/Matilda-image.png"

const MatildaCEO = () => {
    return (
        <div className="h-[840px] md:h-[494px] bg-pt-primary flex flex-col text-center text-white items-center p-6 md:flex-row	">
            <div className="flex flex-col basis-1/2 items-center">
                <Image className="rounded-full p-8"
                    src={MatildaImg}
                    width={250}
                    height={250}
                    alt="Picture of the author"
                />
                <p className="h5">Matilda Öhman, CEO</p>
                <p className="h6">askMatilda@permission.write.email</p>
            </div>
            <div className="flex flex-col basis-1/2 items-start">
                <p className="h4">Want to know more?</p>
                <p className="p2">Contact us to find out more about our solution and how we can implement it in your municipality.</p>
            </div>
        </div>
    )
};

export default MatildaCEO
