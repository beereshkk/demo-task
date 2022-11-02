import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { useSelector, useDispatch } from "react-redux";
import { setLoginError } from "../Redux Files/Actions/errorsAction";
import { setRegistrationError } from "../Redux Files/Actions/errorsAction";

const InputForm = (props) => {
  const { validationSchema, formType, getData } = props;
  const [show, setShow] = useState(false);
  const [alertError, setAlertError] = useState("");
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();

  useEffect(() => {
    if (formType === "login" && errors.login) {
      setAlertError(errors.login);
      setShow(true);
    }

    if (formType === "registration" && errors.registration) {
      setAlertError(errors.registration);
      setShow(true);
    }
  }, [errors, formType]);

  const initialValues =
    formType === "registration"
      ? { name: "", email: "", password: "" }
      : { email: "", password: "" };

  const handleSubmit = (values, { resetForm }) => {
    getData(values);
    resetForm(initialValues);
  };

  const handleClose = () => {
    if (formType === "login") {
      dispatch(setLoginError(""));
    }

    if (formType === "registration") {
      dispatch(setRegistrationError(""));
    }
    setShow(false);
  };

  return (
    <Container>
      <div className="d-flex justify-content-center">
        <Card className="col-5 mt-5">
          <Card.Header className="text-capitalize fs-4 py-3">
            <span className="mx-3 my-2 text-primary">{formType}</span>
          </Card.Header>
          <Card.Body>
            {show && (
              <Alert variant="danger" onClose={handleClose} dismissible>
                <div className="text-center">{alertError}</div>
              </Alert>
            )}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form className="my-4 mx-3">
                  {formType === "registration" && (
                    <>
                      <span>
                        <label className="form-label fs-5">Name</label> <br />
                        <Field name="name" className="form-control" />
                        {errors.name && touched.name ? (
                          <div className="text-danger">{errors.name}</div>
                        ) : null}
                      </span>
                      <br />
                    </>
                  )}

                  <span>
                    <label className="form-label fs-5">Email ID</label> <br />
                    <Field name="email" type="email" className="form-control" />
                    {errors.email && touched.email ? (
                      <div className="text-danger">{errors.email}</div>
                    ) : null}
                  </span>
                  <br />
                  <span>
                    <label className="form-label fs-5">Password</label>
                    <br />
                    <Field
                      name="password"
                      type="password"
                      className="form-control"
                    />
                    {errors.password && touched.password ? (
                      <div className="text-danger">{errors.password}</div>
                    ) : null}
                  </span>
                  <br />
                  <span className="d-flex flex-row-reverse">
                    <Button
                      type="submit"
                      className="fs-6 btn-light btn-outline-primary px-4"
                    >
                      Submit
                    </Button>
                  </span>
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default InputForm;
