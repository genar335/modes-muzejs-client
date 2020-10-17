import React, { useState } from "react";
import compStyles from "./styles/TestNamer.module.scss";
import styles from "../pages/styles/create_test.module.scss";

const TestNamer = (currentLang: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(currentLang);
  return (
    <div className={styles.TestNaming}>
      {isOpen ? (
        <div className={compStyles.ModalContainerBG}>
          <div className={compStyles.ModalContainer}>
            <button
              className={compStyles.CloseBTN}
              onClick={() => setIsOpen(false)}
            >
              x
            </button>
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
        </div>
      ) : (
        <div className={compStyles.ModalOpener}>
          <span>Test name</span>
          <button onClick={() => setIsOpen(true)}>+</button>
        </div>
      )}
    </div>
  );
};

export default TestNamer;
