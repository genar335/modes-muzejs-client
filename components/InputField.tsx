import { ErrorMessage, Field, useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};

const InputField: React.FC<InputFieldProps> = (props) => {
  const [field, { error }] = useField(props);
  return (
    <div>
      <label htmlFor="username">username</label>
      <input {...field} id={field.name} placeholder="name" />
      {/* {error ? <ErrorMessage></ErrorMessage> : null} */}
    </div>
  );
};
