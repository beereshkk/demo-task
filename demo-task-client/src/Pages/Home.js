import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BuildingModel from "../Graphs/BuildingModel/BuildingModel";
import PowerUsage from "../Graphs/PowerUsage/PowerUsage";
import BuildingActivity from "../Graphs/BuildingActivity/BuildingActivity";
import EnergySources from "../Graphs/EnergySources/EnergySources";
import AlertBox from "../Graphs/AlertBox";
import ESGBox from "../Graphs/ESG/ESGbox";
import WashroomStatus from "../Graphs/WashroomStatus/WashroomStatus";

const Home = (props) => {
  return (
    <Container
      fluid
      className="me-4 p-4"
      style={{ backgroundColor: "#D6D9DA" }}
    >
      <Row className="mb-3">
        <Col lg={5}>
          <BuildingModel />
        </Col>
        <Col lg={4}>
          <Row className="mb-3">
            <Col md={6} lg={6}>
              <PowerUsage />
            </Col>
            <Col md={6} lg={6}>
              <EnergySources />
            </Col>
          </Row>
          <Row>
            <Col>
              <WashroomStatus />
            </Col>
          </Row>
        </Col>
        <Col lg={3}>
          <AlertBox />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg={5}>
          <BuildingActivity />
        </Col>

        <Col lg={5}>
          <ESGBox />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
