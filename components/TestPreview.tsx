import React, { useEffect } from "react";
import {
  IQnA,
  IQnAPairs,
  ITest,
  TLangOption,
  TTestTypes,
} from "../@types/test";
import styles from "../pages/styles/create_test.module.scss";
import FMLogo from "./FMlogo";
import compStyles from "./styles/TestPreview.module.scss";

const TestPreview = (props: {
  activePage: number;
  currentLanguage: TLangOption["value"] | undefined;
  currentTestState: ITest;
  saveChanges: (test: ITest) => void;
}) => {
  function handleTextAreaQuestionChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    // let tmpArray =
    //   props.currentTestState[props.currentLanguage!].pages[props.activePage]
    //     .QnAPairs;
    // console.log("tmp", tmpArray);
    // tmpArray.forEach((ele) => console.log(ele));
    const tmpArray = props.currentTestState[props.currentLanguage!].pages;
    // console.log(tmpArray);
    // console.log(tmpArray[props.activePage]);
    // console.log(tmpArray[props.activePage].QnAPairs[event.currentTarget.id]);
    tmpArray[props.activePage].QnAPairs[event.currentTarget.id].question =
      event.currentTarget.value;
    // console.log(tmpArray);
    props.saveChanges({
      ...props.currentTestState,
      [props.currentLanguage!]: {
        ...props.currentTestState[props.currentLanguage!],
        pages: tmpArray,
      },
    });
  }

  function questionRenderController(currentItem: number, currentPair: IQnA) {
    switch (props.currentTestState.type) {
      case "TT":
        return (
          <textarea
            id={String(currentItem)}
            onChange={handleTextAreaQuestionChange}
          >
            {currentPair.question}
          </textarea>
        );
        break;

      default:
        break;
    }
  }
  const pageBody = () => {
    return (
      <div className={compStyles.pageBody}>
        {props.currentTestState[props.currentLanguage || "ru"].pages[
          props.activePage
        ].QnAPairs.map((qnaPair: IQnA, index: number) => (
          <div className={compStyles.qnaPair} id={String(index)}>
            <div className={compStyles.Question}>
              {questionRenderController(index, qnaPair)}
            </div>
            <div className={compStyles.Answer}>Answer: {qnaPair.answer}</div>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    pageBody();
  }, [props.currentTestState]);

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
