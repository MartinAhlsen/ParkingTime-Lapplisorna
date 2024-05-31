import StatisticCard from "./StatisticCard";

const Statistics = () => {
    return (
        <div className="min-h-80 bg-pt-background flex flex-col md:flex-row justify-center items-center">
          <h1>statistics</h1>
          <div className="bg-white min-h-60 rounded-xl mx-14">
                <StatisticCard imageLink="" number={5000} subtitle="Downloads"/>
                <StatisticCard imageLink="" number={4700} subtitle="Downloads"/>
                <StatisticCard imageLink="" number={30} subtitle="Downloads"/>
          </div>
        </div>
    )
};

export default Statistics
