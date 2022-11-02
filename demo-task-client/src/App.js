import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./Redux Files/Actions/tokenAction";

const App = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(setToken(localStorage.getItem("token")));
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    if (token) {
      setUserLoggedIn(true);
      navigate("/home");
    }
  }, [token, navigate]);

  return (
    <div>
      {userLoggedIn ? (
        <div>
          <div>
            <Header />
          </div>
          <div className="d-flex">
            <Sidebar />
            <Outlet />
          </div>
        </div>
      ) : (
        <div>
          <Header />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default App;
