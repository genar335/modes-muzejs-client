import React, { useState } from "react";
import compStyles from "./styles/TestNamer.module.scss";
import styles from "../pages/styles/create_test.module.scss";

const TestNamer = (currentLang: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(currentLang);
  return (
    <div className={styles.TestNaming}>
      <div className={compStyles.ModalOpener}>
        <button onClick={() => setIsOpen(true)}>Test name</button>
        <span>+</span>
      </div>
      {isOpen ? (
        <div className={compStyles.ModalContainer}>
          <div className={compStyles.Modal}>
            <div className={compStyles.LangSelect}>
              <button>RUS</button>
              <button>LAT</button>
              <button>ENG</button>
            </div>
            <input type="text" placeholder="TestName" />
            <button>&rarr;</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TestNamer;
