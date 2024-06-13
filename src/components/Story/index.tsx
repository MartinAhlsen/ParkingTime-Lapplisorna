"use client";
import Button from "../Button";

const Story: React.FC = () => {
  return (
    <div className="container mx-auto flex xl:flex-row w-full min-h-[60vh] justify-between items-center py-20 text-pt-darkblue2 bg-white">
      <div className="flex flex-col xl:w-1/2">

        <div className="p-10 xl:w-3/4">
          <p className="h5">Our Vision</p>

          <p className="p2 ">
            Parking Time Sweden is a tech startup aiming to revolutionize the
            parking experience for all parties involved – the parker, the
            parking attendant, the municipality, and the property owner.
          </p>

          <p className="p2">
            We currently offer a free digital parking disc within an app to
            complement the existing range of parking apps.
          </p>
        </div>

        <div className="xl:w-3/4 px-10 md:pb-0">
          <p className="h5">Our story</p>
          <p className="p2 pt-4">
            Parking Time Sweden was founded in 2021 in Luleå. Today, we operate
            throughout Sweden with the ambition to expand globally in the coming
            years, and we hope to have you with us on our journey!
          </p>
        </div>
        <div className="flex p-10 justify-center md:justify-normal">
        <Button
          text="Book a meeting" 
          url="/contact_us" 
          colorTheme="dark"
        />
        </div>
      </div> 

      <div className="flex-row hidden xl:flex w-1/2 items-start xl:justify-center ">
        <img className="w-[1000px] h-auto rounded-[100px]"
          src="/Images/parkbycar.png"
          alt="parking time!"
        />
      </div>
    </div>

  );
};

export default Story;

