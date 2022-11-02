import React from "react";
import BasicCard from "../../Components/BasicCard";
import PieChart from "./PieChart";

const EnergySources = (props) => {
  const data = [
    {
      y: 95,
      name: "Electricity",
    },
    {
      y: 5,
      name: "DG Gen",
    },
  ];

  const getTitle = () => {
    return "Energy Sources";
  };

  const getContent = () => {
    return (
      <>
        <PieChart chartData={data} />
      </>
    );
  };

  return <BasicCard title={getTitle()} content={getContent()} />;
};

export default EnergySources;
