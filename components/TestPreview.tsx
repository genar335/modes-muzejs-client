import React, { useEffect, useState } from "react";
import { containerCSS } from "react-select/src/components/containers";
import {
  ILangSpecificBody,
  IQnA,
  IQnAPairs,
  ITest,
  TLangOption,
  TTestTypes,
} from "../@types/test";
import styles from "../pages/styles/create_test.module.scss";
import FMLogo from "./FMlogo";
import compStyles from "./styles/TestPreview.module.scss";
import addCompStyles from "./styles/TestNamer.module.scss";
import { closeBtn, CreateLangSwitchers } from "./TestNamer";

const TestPreview = (props: {
  activePage: number;
  currentLanguage: TLangOption["value"] | undefined;
  // currentTestState: ITest;
  pageToRender: IQnA[];
  setCurrentLang: (lang: TLangOption["value"]) => void;
  testType: ITest["type"];
  saveChanges: (page: any) => void;
}) => {
  const [isQOpen, setisQOpen] = useState(false);
  const [isAOpen, setisAOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<TLangOption["value"]>("ru");
  const setSelectedLanguage = (chooseLanguage: TLangOption["value"]): void => {
    setSelectedLang(chooseLanguage);
    props.setCurrentLang(chooseLanguage);
  };
  const inputEnabler = () => {};

  console.log(props.pageToRender);
  props.pageToRender.map((ele) => console.log(ele.question));

  let tmp = props.pageToRender;

  const saveNewData = (
    qid: number,
    data: string,
    whatToSave: "answer" | "question"
  ) => {
    tmp[qid][whatToSave] = data;
    // console.log(tmp[qid][whatToSave]);
    // console.log("from save new data", tmp);
    props.saveChanges(tmp);
  };

  const handleQuestionKeyPress = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    event.key === "Enter" ? console.log("Efnter") : undefined;
  };

  function textQuestion(
    iterator: number,
    // handleQuestionChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    qna: IQnA
  ) {
    return (
      <textarea
        defaultValue={"Enter your text"}
        id={String(iterator)}
        onChange={handleQuestionChange}
        className={compStyles.Question}
        onKeyPress={handleQuestionKeyPress}
      >
        {/* {qna.question} */}
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

  const handleAnswerChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    saveNewData(event.currentTarget.id, event.currentTarget.value, "answer");
  };

  function textAnswer(iterator: number, qna: IQnA) {
    // const [curValue, setCurValue] = useState("");

    // useEffect(() => {
    //   console.log(curValue);
    // }, [curValue]);

    return (
      <textarea
        // defaultValue={"Enter your text"}
        id={String(iterator)}
        onChange={(e) => {
          handleAnswerChange(e);
          // setCurValue(e.currentTarget.value);
        }}
        className={compStyles.Answer}
      >
        {qna.answer}
      </textarea>
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

  function q_a_TextEntry(type: "answer" | "question", id: number) {
    console.log("hello from a new beginninf", type);
    console.log(`${compStyles[type]}`);
    return (
      <textarea
        className={compStyles.textInputForQandA}
        // type="text"
        name="qaTextEntry"
        id={String(id)}
        value={props.pageToRender[id][type]}
        onChange={(e) => saveNewData(id, e.currentTarget.value, type)}
      />
    );
  }

  const handleQuestionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log(`${event.currentTarget.id}:`, event.currentTarget.value);
    saveNewData(event.currentTarget.id, event.currentTarget.value, "question");
  };

  const pageBody = () =>
    props.pageToRender.map((qna: IQnA, iterator: number) => (
      <div key={iterator} id={String(iterator)} className={compStyles.qnaPair}>
        {/* For answer rendering */}
        {/* {props.testType === "TT" || props.testType === "PT"
          ? q_a_TextEntry("answer", iterator)
          : null}
        {props.testType === "PP" ? imgAnswer(iterator, qna) : null} */}
        {
          /* For question rendering */
          <div
            className={`${addCompStyles.ModalContainerBG} ${
              !isQOpen ? addCompStyles.Hidden : null
            }`}
          >
            <div className={addCompStyles.ModalContainer}>
              {closeBtn(setisQOpen)}
              <div className={addCompStyles.Modal}>
                {CreateLangSwitchers(setSelectedLanguage, inputEnabler)}
                <div className={addCompStyles.NameForm}>
                  {props.testType === "TT"
                    ? q_a_TextEntry("question", iterator)
                    : null}
                </div>
              </div>
            </div>
          </div>
        }
        <span className={compStyles.question} onClick={(e) => setisQOpen(true)}>
          {qna.question}
        </span>
        {/* For answer rendering */}
        <div
          className={`${addCompStyles.ModalContainerBG} ${
            !isAOpen ? addCompStyles.Hidden : null
          }`}
        >
          <div className={addCompStyles.ModalContainer}>
            {closeBtn(setisAOpen)}
            <div className={addCompStyles.Modal}>
              {CreateLangSwitchers(setSelectedLanguage, inputEnabler)}
              <div className={addCompStyles.NameForm}>
                {props.testType === "TT"
                  ? q_a_TextEntry("answer", iterator)
                  : null}
              </div>
            </div>
          </div>
        </div>
        <span className={compStyles.answer} onClick={(e) => setisAOpen(true)}>
          {qna.answer}
        </span>
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
