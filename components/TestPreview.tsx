import React from "react";
import { IQnA, ITest, TLangOption, TTestTypes } from "../@types/test";
import styles from "../pages/styles/create_test.module.scss";
import FMLogo from "./FMlogo";
import compStyles from "./styles/TestPreview.module.scss";

const TestPreview = (props: {
  activePage: number;
  currentLanguage: TLangOption["value"] | undefined;
  currentTestState: ITest;
}) => {
  const pageBody = () => {
    return (
      <div className={compStyles.pageBody}>
        {props.currentTestState[props.currentLanguage || "ru"].pages[
          props.activePage
        ].QnAPairs.map((qnaPair: IQnA, index: number) => (
          <div className={compStyles.qnaPair} id={String(index)}>
            <div className={compStyles.Question}>
              Question: {qnaPair.question}
            </div>
            <div className={compStyles.Answer}>Answer: {qnaPair.answer}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.TestPreview}>
      <h3>Page: {props.activePage + 1}</h3>
      <div className={compStyles.TestBGContainer}>
        <FMLogo />
        {pageBody()}
      </div>
    </div>
  );
};

export default TestPreview;
