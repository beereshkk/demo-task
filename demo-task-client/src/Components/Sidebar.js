import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import {
  List,
  HouseDoorFill,
  PersonBadge,
  ArrowLeftCircleFill,
  Building,
  Bug,
} from "react-bootstrap-icons";

const Sidebar = (props) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    const res = !open;
    setOpen(res);
  };

  return (
    <div className="h-100" style={{ height: "100vh" }}>
      <div className="d-flex justify-content-center">
        {!open ? (
          <span className="align-self-center mt-3" onClick={handleClick}>
            <List color="#2B2A29" size={25} />
          </span>
        ) : (
          <span className="align-self-center mt-3" onClick={handleClick}>
            <ArrowLeftCircleFill color="#2B2A29" size={25} />
          </span>
        )}
      </div>
      <hr />
      <div>
        <Nav defaultActiveKey="/home" className="d-flex flex-column">
          <Nav.Link
            onClick={() => {
              navigate("/home");
            }}
          >
            {open ? (
              <div className="d-flex justify-content-start m-3">
                <div>
                  <HouseDoorFill color="#2B2A29" size={25} />
                </div>
                <div className="text-dark text-start align-self-center ms-2">
                  {" "}
                  Home
                </div>
              </div>
            ) : (
              <HouseDoorFill color="#2B2A29" size={25} className="m-3" />
            )}
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/account");
            }}
          >
            {open ? (
              <div className="d-flex justify-content-start m-3">
                <div>
                  <PersonBadge color="#2B2A29" size={25} />
                </div>
                <div className="text-dark text-start align-self-center ms-2">
                  Account
                </div>
              </div>
            ) : (
              <PersonBadge color="#2B2A29" size={25} className="m-3" />
            )}
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/home");
            }}
          ></Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/home");
            }}
          ></Nav.Link>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
