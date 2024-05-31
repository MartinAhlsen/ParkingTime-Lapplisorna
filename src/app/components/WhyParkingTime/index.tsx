import WhyCard from "./WhyCard";
import arrowG from "../../../../public/Images/arrowGrowth-icon.png";
import phone from "../../../../public/Images/phoneTap-icon.png"
import group from "../../../../public/Images/group-icon.png"
import computer from "../../../../public/Images/download-icon.png"; {/*FIND CORRECT ONE FOR THIS */}




const WhyParkingTime = () => {
    return (
        <div className="bg-pt-primary min-h-screen flex flex-col">
            <p className="h3 text-center text-white">Why Parking Time?</p>
          <WhyCard imageLink={arrowG} title="Increased revenue & reduced stress" paragraph="Our digital solution attracts more visitors by eliminating physical discs and reducing fines. This simplifies parking, boosts foot traffic, economic activity and city vibrancy  while reducing stress."/>
          <WhyCard imageLink={phone} title="Simplified parking for users" paragraph="Our app lets you effortlessly set, adjust, and monitor parking time. With a user-friendly interface, you can quickly find spots and manage parking. We continuously update based on customer feedback to ensure an efficient and hassle-free experience."/>
          <WhyCard imageLink={group} title="Integration with existing systems" paragraph="Our digital solution attracts more visitors by eliminating physical discs and reducing fines. This simplifies parking, boosts foot traffic, economic activity and city vibrancy  while reducing stress."/>
          <WhyCard imageLink={computer} title="Data-driven urban planning" paragraph="The digital parking disc can eventually optimize parking resources and urban planning through valuable usage data and behavior patterns, leading to a safer society with better control and access to parking spaces."/>
        </div>
    )
};

export default WhyParkingTime
