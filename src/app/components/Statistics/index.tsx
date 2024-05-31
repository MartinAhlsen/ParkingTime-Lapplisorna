import StatisticCard from "./StatisticCard";
import downloadImg from "../../../../public/Images/download-icon.png";
import mapImg from "../../../../public/Images/map-icon.png";
import parkingImg from "../../../../public/Images/parking-icon.png"

const Statistics = () => {
    return (
        <div className="min-h-80 bg-pt-background flex flex-col md:flex-row justify-center items-center">
          <h1>statistics</h1>
          <div className="bg-white min-h-60 rounded-xl mx-2">
                <StatisticCard imageLink={downloadImg} number={5000} subtitle="Downloads"/>
                <StatisticCard imageLink={parkingImg} number={4700} subtitle="Downloads"/>
                <StatisticCard imageLink={mapImg} number={30} subtitle="Downloads"/>
          </div>
        </div>
    )
};

export default Statistics
