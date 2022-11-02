import React, { useState, useEffect } from "react";
import BasicCard from "../../Components/BasicCard";

const PowerUsage = (props) => {
  const [rnum, setRum] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      let res = (Math.random() * 25 + 25).toFixed(2);
      setRum(res);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getTitle = () => {
    return <div className="">Energy Consumption</div>;
  };

  const getContent = () => {
    return (
      <div className="d-flex justify-content-center">
        <div className="" style={{ marginTop: "50px" }}>
          <div className="fs-2 text-center">{rnum}</div>
          <div className=" fs-4 text-center">KW</div>
        </div>
      </div>
    );
  };

  return <BasicCard title={getTitle()} content={getContent()} />;
};

export default PowerUsage;
