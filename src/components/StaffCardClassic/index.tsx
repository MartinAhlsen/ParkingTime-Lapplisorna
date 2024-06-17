import Image, { StaticImageData } from "next/image";

interface StaffCardClassicProps {
    StaffImage: StaticImageData,
    name: string,
    role: string
}


const StaffCardClassic = ({StaffImage, name, role}:StaffCardClassicProps) => {
    return (
        
          <div className="flex flex-col basis-1/2 items-left bg-white rounde:xl">
                <Image className="rounded-full p-8"
                    src={StaffImage}
                    width={250}
                    height={250}
                    alt="Picture of the author"
                />
                <p className="h5">{name}</p>
                <p className="h6">{role}</p>
            </div>
        
    )
};

export default StaffCardClassic
