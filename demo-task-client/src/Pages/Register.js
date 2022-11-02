import React, { useState, useEffect } from "react";
import InputForm from "../Components/InputForm";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { startRegisterUser } from "../Redux Files/Actions/registerAction";

const Register = (props) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const registrationErr = useSelector((state) => state.errors.registration);
  const registerSchema = Yup.object().shape({
    name: Yup.string().required("Name cannot be empty"),
    email: Yup.string().email("Invalid email").required("Email is mandatory"),
    password: Yup.string()
      .min(8, "Password should be minimum 8 chars")
      .max(64, "Password should be maximum 64 chars")
      .required("Password is mandatory"),
  });

  const getUserData = (obj) => {
    setUserData({ ...obj });
  };

  useEffect(() => {
    if (userData.name && userData.email && userData.password) {
      console.log(userData);
      dispatch(startRegisterUser(userData));
    }
  }, [dispatch, userData]);

  return (
    <div>
      <InputForm
        validationSchema={registerSchema}
        formType="registration"
        getData={getUserData}
        alertError={registrationErr}
      />
    </div>
  );
};

export default Register;
