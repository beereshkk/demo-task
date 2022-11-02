import React from "react";
import BasicCard from "../../Components/BasicCard";

const BuildingModel = (props) => {
  const getContent = () => {
    return (
      <div style={{ height: "inherit" }}>
        <img src="/building.jpg" alt="building model" width="650px" />
      </div>
    );
  };
  return <BasicCard content={getContent()} />;
};

export default BuildingModel;
