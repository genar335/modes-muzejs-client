import React from "react";
import ActiveTests from "../../components/ActiveTests";
import Gallery from "../../components/Gallery";
import styles from "../styles/main.module.scss";
const main = () => {
  return (
    <div className={styles.MainContainer}>
      <ActiveTests />
      <Gallery />
    </div>
  );
};

export default main;
