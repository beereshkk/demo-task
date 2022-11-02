import React from "react";
import BasicCard from "../Components/BasicCard";
import { ExclamationTriangle } from "react-bootstrap-icons";
import { Telephone, PersonCheckFill } from "react-bootstrap-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AlertBox = (props) => {
  const alertData = [
    {
      title: "Airpressure from A1UYY sensor ",
      value: 955,
      type: "high",
    },
    {
      title: "Temperature from A1UYY sensor ",
      value: 45,
      type: "low",
    },
    {
      title: "Lumins from A1UYY sensor ",
      value: 200,
      type: "low",
    },
  ];

  const getContent = () => {
    return (
      <div style={{ height: "auto" }}>
        {alertData.map((data, i) => (
          <div className="" key={i}>
            <Row>
              <Col xs={1} lg={1}>
                <div>
                  {data.type === "low" ? (
                    <ExclamationTriangle color="#f7e00a" size={25} />
                  ) : data.type === "high" ? (
                    <ExclamationTriangle color="#e81613" size={25} />
                  ) : (
                    <ExclamationTriangle color="#2068d4" size={25} />
                  )}
                </div>
              </Col>
              <Col xs={8} lg={8}>
                <div>
                  <div>{data.title}</div>
                  <div>{data.value}</div>
                  <span>a few seconds ago</span>
                </div>
              </Col>
              <Col xs={3} lg={3}>
                <div className="d-flex" style={{ gap: "10px" }}>
                  <span className="rounded bg-dark p-2">
                    <Telephone color="#fff" />
                  </span>
                  <span className="rounded bg-dark p-2">
                    <PersonCheckFill color="#fff" />
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </div>
    );
  };

  return <BasicCard title="Alerts" content={getContent()} />;
};

export default AlertBox;
