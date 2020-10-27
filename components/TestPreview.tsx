import React from "react";
import { ITest, TLangOption, TTestTypes } from "../@types/test";
import styles from "../pages/styles/create_test.module.scss";
import compStyles from "./styles/TestPreview.module.scss";

const TestPreview = (props: {
  activePage: number;
  currentLanguage: TLangOption["value"] | undefined;
  currentTestState: ITest;
}) => {
  return (
    <div className={styles.TestPreview}>
      <h3>Test preview</h3>
    </div>
  );
};

export default TestPreview;
