import React from "react";
import BasicCard from "../../Components/BasicCard";
import BulletGraph from "./BulletGraph";

const WashroomStatus = (props) => {
  const tissueData = [
    {
      y: 45,
      target: 100,
    },
  ];

  const junkData = [
    {
      y: 55,
      target: 100,
    },
  ];

  const getContent = () => {
    return (
      <div className="py-4">
        <BulletGraph data={tissueData} titleText="Tissue" />
        <BulletGraph data={junkData} titleText="Dustbin" />
      </div>
    );
  };

  return <BasicCard content={getContent()} title="Washroom" />;
};

export default WashroomStatus;
