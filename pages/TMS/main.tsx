import Axios from "axios";
import React, { useEffect } from "react";
import { ITest } from "../../@types/test";
import ActiveTests from "../../components/ActiveTests";
import Gallery from "../../components/Gallery";
import styles from "../styles/main.module.scss";
const main = () => {
  const getTestsByActive = async (isTestActive: boolean): Promise<any> => {
    try {
      const tests = await Axios.get(
        `http://localhost:4000/tests/getTest?active=${isTestActive}`
      );
      return tests.data as ITest[];
    } catch (error) {
      alert(error);
      return [];
    }
  };

  return (
    <div className={styles.MainContainer}>
      <ActiveTests getActiveTests={getTestsByActive} />
      <Gallery getInactiveTests={getTestsByActive} />
    </div>
  );
};

export default main;
