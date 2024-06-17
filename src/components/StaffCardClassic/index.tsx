import Image, { StaticImageData } from "next/image";

interface StaffCardClassicProps {
    StaffImage: StaticImageData,
    name: string,
    role: string
}


const StaffCardClassic = ({StaffImage, name, role}:StaffCardClassicProps) => {
    return (
        
          <div className="flex flex-col items-left bg-white rounded-xl items-center m-6">
                <Image className=""
                    src={StaffImage}
                    alt="Picture of the author"
                />
                <div className="flex flex-col w-[100%] my-6">
                    <p className="h6 text-left md:pl-[16px] pl-[32px]">{name}</p>
                    <p className="p2 text-left md:pl-[16px] pl-[32px]">{role}</p>
                </div>
                
            </div>
        
    )
};

export default StaffCardClassic
