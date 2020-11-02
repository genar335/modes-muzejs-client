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
  // currentTestState: ITest;
  pageToRender: any;
  testType: ITest["type"];
  saveChanges: (test: ITest) => void;
}) => {
  console.log(props.pageToRender);

  // function handleTextAreaQuestionChange(
  //   event: React.ChangeEvent<HTMLTextAreaElement>
  // ) {
  //   // let tmpArray =
  //   //   props.currentTestState[props.currentLanguage!].pages[props.activePage]
  //   //     .QnAPairs;
  //   // console.log("tmp", tmpArray);
  //   // tmpArray.forEach((ele) => console.log(ele));
  //   const tmpArray = props.currentTestState[props.currentLanguage!].pages;
  //   // console.log(tmpArray);
  //   // console.log(tmpArray[props.activePage]);
  //   // console.log(tmpArray[props.activePage].QnAPairs[event.currentTarget.id]);
  //   tmpArray[props.activePage].QnAPairs[event.currentTarget.id].question =
  //     event.currentTarget.value;
  //   // console.log(tmpArray);
  //   props.saveChanges({
  //     ...props.currentTestState,
  //     [props.currentLanguage!]: {
  //       ...props.currentTestState[props.currentLanguage!],
  //       pages: tmpArray,
  //     },
  //   });
  // }
  function textQuestion(
    iterator: number,
    // handleQuestionChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    qna: IQnA
  ) {
    return (
      <textarea
        id={String(iterator)}
        onChange={handleQuestionChange}
        className={compStyles.Question}
      >
        {qna.question}
      </textarea>
    );
  }

  function textAnswer(iterator: number, qna: IQnA) {
    return (
      <textarea
        id={String(iterator)}
        // onChange={handleAnswerChange}
        className={compStyles.Answer}
      >
        {qna.answer}
      </textarea>
    );
  }

  function imgQuestion(
    iterator: number,
    // handleQuestionChange: (
    // event: React.ChangeEvent<HTMLTextAreaElement>
    // ) => void,
    qna: IQnA
  ) {
    return (
      <div id={String(iterator)} className={compStyles.Question}>
        <span>＋</span>
      </div>
    );
  }
  function imgAnswer(
    iterator: number,
    // handleQuestionChange: (
    //   event: React.ChangeEvent<HTMLTextAreaElement>
    // ) => void,
    qna: IQnA
  ) {
    return (
      <div id={String(iterator)} className={compStyles.Question}>
        <span>＋</span>
      </div>
    );
  }

  const handleQuestionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log(`${event.currentTarget.id}:`, event.currentTarget.value);
  };

  const pageBody = () =>
    props.pageToRender.QnAPairs.map((qna: IQnA, iterator: number) => (
      <div key={iterator} id={String(iterator)} className={compStyles.qnaPair}>
        {/* For question rendering */}
        {props.testType === "TT" ? textQuestion(iterator, qna) : null}
        {props.testType === "PP" || props.testType === "PT"
          ? imgQuestion(iterator, qna)
          : null}
        {/* For answer rendering */}
        {props.testType === "TT" || props.testType === "PT"
          ? textAnswer(iterator, qna)
          : null}
        {props.testType === "PP" ? imgAnswer(iterator, qna) : null}
      </div>
    ));

  props.testType === ""
    ? console.log("no test type")
    : console.log(props.testType);

  return (
    <div className={styles.TestPreview}>
      <h3>Page: {props.activePage + 1}</h3>

      <div className={`${compStyles.TestBGContainer}`}>
        <FMLogo />
        <div className={compStyles.pageBody}>
          {props.testType === "" ? (
            <div className={compStyles.tTypeWarning}>
              <h1>Please choose a test type</h1>
            </div>
          ) : (
            pageBody()
          )}
          {/* {pageBody()} */}
        </div>
      </div>
    </div>
  );
};

export default TestPreview;
