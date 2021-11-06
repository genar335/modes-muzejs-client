import Axios from "axios";
import React from "react";
import emailIcon from "../GAssets/download-email.png";
import { productionURL } from "./constants";

import style from "./styles/EmailDownloadBtn.module.scss";

export const EmailDownloadBtn = () => {
  const handleClick = async () => {
    try {
      const emails = await Axios.get(`${productionURL}tests/allEmails`);
      console.log(emails);
      const emailsArr = emails.data.map((emailObj: any) => emailObj.email);
      let csvContent =
        "data:text/csv;charset=utf-8," +
        emailsArr.map((e: any) => e.join(",")).join("\n");
      var encodedUri = encodeURI(csvContent);
      window.open(encodedUri);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button className={style.dButton} onClick={handleClick}>
      <img src={emailIcon} alt="" />
    </button>
  );
};
