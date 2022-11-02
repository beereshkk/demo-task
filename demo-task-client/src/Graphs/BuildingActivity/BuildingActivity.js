import React from "react";
import BasicCard from "../../Components/BasicCard";
import LineChart from "./LineChart";

const BuildingActivity = (props) => {
  const getContent = () => {
    return (
      <div>
        <LineChart />
      </div>
    );
  };

  return <BasicCard title="Total Occupancy" content={getContent()} />;
};

export default BuildingActivity;
