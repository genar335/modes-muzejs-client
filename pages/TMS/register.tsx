import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="username">Username:</label>
          <Field type="text" name="username" />
          <label htmlFor="password">Password:</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />{" "}
          <button type="submit" disabled={isSubmitting}>
            Register!
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
