import StatisticCard from "./StatisticCard";
import downloadImg from "../../../../public/Images/download-icon.png";
import mapImg from "../../../../public/Images/map-icon.png";
import parkingImg from "../../../../public/Images/parking-icon.png"

const Statistics = () => {
    return (
        <div className="h-96 bg-pt-background flex flex-col md:flex-row justify-center items-center">
          <div className="bg-white h-80 rounded-xl mx-1 flex flex-col md:flex-row">
                <StatisticCard imageLink={downloadImg} number={5000} subtitle="Downloads"/>
                <div className="basis-1/5"></div>
                <StatisticCard imageLink={parkingImg} number={4700} subtitle="Parking sessions"/>
                <div className="basis-1/5"></div>
                <StatisticCard imageLink={mapImg} number={30} subtitle="Parking zones"/>
          </div>
        </div>
    )
};

export default Statistics
