import React, { useState, useEffect } from "react";
import InputForm from "../Components/InputForm";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { startLoginUser } from "../Redux Files/Actions/tokenAction";

const Login = (props) => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({});

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is mandatory"),
    password: Yup.string()
      .min(8, "Password should be minimum 8 chars")
      .max(64, "Password should be maximum 64 chars")
      .required("Password is mandatory"),
  });
  const getloginData = (obj) => {
    setLoginData({ ...obj });
  };

  useEffect(() => {
    if (loginData.email && loginData.password) {
      dispatch(startLoginUser(loginData));
    }
  }, [dispatch, loginData]);

  return (
    <div>
      <InputForm
        validationSchema={loginSchema}
        formType="login"
        getData={getloginData}
      />
    </div>
  );
};

export default Login;
