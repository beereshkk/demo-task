import React from "react";
import BasicCard from "../../Components/BasicCard";
import DonutChart from "./DonutChart";

const ESGBox = (props) => {
  const chartData = {
    e: [
      {
        y: 80,
        name: "share",
      },
      {
        y: 20,
        name: "",
      },
    ],
    s: [
      {
        y: 60,
        name: "share",
      },
      {
        y: 40,
        name: "",
      },
    ],
    g: [
      {
        y: 70,
        name: "share",
      },
      {
        y: 30,
        name: "",
      },
    ],
  };

  const getContent = () => {
    return (
      <div className="d-flex">
        <DonutChart chartData={chartData.e} colors={["#10FF4A", "#FFFFFF"]} />
        <DonutChart chartData={chartData.s} colors={["#31B9F0", "#FFFFFF"]} />
        <DonutChart chartData={chartData.g} colors={["#FF9824", "#FFFFFF"]} />
      </div>
    );
  };

  return (
    <BasicCard title="Environment Social Governance" content={getContent()} />
  );
};

export default ESGBox;
