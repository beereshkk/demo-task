import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import PrivateOutlet from "./Helpers/PrivateOutlet/PrivateOutlet";
import configureStore from "./Redux Files/Store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

// store.subscribe(() => {
//   console.log(store.getState());
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<PrivateOutlet />}>
            <Route path="home" element={<Home />}></Route>
            <Route path="/account" element={<Account />}></Route>
            <Route path="*" element={<Navigate to="/" replace />}></Route>
          </Route>
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
