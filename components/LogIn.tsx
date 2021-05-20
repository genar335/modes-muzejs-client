import React, { useState } from "react";
import axios from "axios";
import styles from "./styles/LogIn.module.scss";
//import loadingIcon from "../GAssets/loading_cat.gif";
import loadingTriangle from "../GAssets/ball-triangle.svg";
import Router from "next/router";
import PleaseWaitModal from "./PleaseWaitModal";
import { producionURL } from "./constants";

// axios.defaults.withCredentials = true;

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
    // console.log(inputData);
    setIsLoading(true);
    try {
      // const response = await axios.post(
      //   // "http://192.168.8.100:4000/users/log_in",
      //   `${producionURL}users/log_in`,
      //   {
      //     name: inputData.name as string,
      //     password: inputData.pass as string,
      //   } /* ,
      //   {
      //     withCredentials: true,

      //   } */
      // );
      const response = await fetch(`${producionURL}users/log_in`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          name: inputData.name as string,
          password: inputData.pass as string,
        }),
      });
      console.log(response.status);
      console.log(response);
      // await Router.push("/");
      //setIsLoading(false);
    } catch (error) {
      console.error(error);
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
      <PleaseWaitModal isDisplayed={isLoading} />
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
