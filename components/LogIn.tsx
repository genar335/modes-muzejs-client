import React, { useState } from "react";
import axios from "axios";
import styles from "./styles/LogIn.module.scss";
//import loadingIcon from "../GAssets/loading_cat.gif";
import loadingTriangle from "../GAssets/ball-triangle.svg";
import Router from "next/router";

interface IUserLoginInfo {
  name?: string;
  pass?: string;
}

const LogIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputData, setInputData] = useState<IUserLoginInfo>({
    name: "",
    pass: "",
  });

  const sendData = async () => {
    console.log(inputData);
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4000/users/log_in",
        {
          name: inputData.name as string,
          password: inputData.pass as string,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response.status);
      await Router.push("/");
      //setIsLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  const handleFormSubmission = async (e: any) => {
    e.preventDefault();
    if (inputData.pass!.length <= 4 || inputData.name!.length <= 4) {
      alert("Username and password must be longer than 4 characters");
    } else {
      await sendData();
    }
  };

  return (
    <div className={styles.LogInFormContainer}>
      {isLoading ? (
        <div className={styles.loadingModal}>
          <img src={loadingTriangle} alt="cat" />
          <p>Please wait</p>
        </div>
      ) : null}
      <form onSubmit={handleFormSubmission} className={styles.infoForm}>
        <div id="u_name" className={styles.inputField}>
          <label htmlFor="name">Username:</label>
          <input
            name="name"
            type="text"
            onChange={(e) =>
              setInputData({
                name: e.target.value as string,
                pass: inputData.pass,
              })
            }
          />
        </div>

        <div id="u_pass" className={styles.inputField}>
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            onChange={(e) =>
              setInputData({
                pass: e.target.value as string,
                name: inputData.name,
              })
            }
          />
        </div>

        <button disabled={isLoading} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LogIn;