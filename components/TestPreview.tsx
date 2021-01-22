import React, { useEffect, useState } from "react";
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
import { closeBtn, CreateLangSwitchers, SaveBtn } from "./TestNamer";
import QACard from "./QACard";
import { URLCheckForLocalhost } from "./constants";

const TestPreview = (props: {
  activePage: number;
  currentLanguage: TLangOption["value"] | undefined;
  // currentTestState: ITest;
  pageToRender: IQnA[];
  setCurrentLang: (lang: TLangOption["value"]) => void;
  testType: ITest["type"];
  saveChanges: (page: any, lang?: TLangOption["value"]) => void;
  togglePhotoManager: (toggle: boolean, cardID: string) => void;
  setCurrentCard: React.Dispatch<React.SetStateAction<undefined>>;
  fullTest: ITest;
}) => {
  const [isQOpen, setisQOpen] = useState(false);
  const [isAOpen, setisAOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<TLangOption["value"]>("ru");
  const setSelectedLanguage = (chooseLanguage: TLangOption["value"]): void => {
    setSelectedLang(chooseLanguage);
    props.setCurrentLang(chooseLanguage);
  };
  const inputEnabler = () => {};

  // console.log(props.pageToRender);
  // props.pageToRender.map((ele) => console.log(ele.question));

  // let tmp = props.pageToRender;

  const saveNewData = (
    qid: number,
    data: string,
    whatToSave: "answer" | "question",
    lang: "ru" | "lv" | "en" | "all" | undefined
  ) => {
    // console.log("from data saving", qid);
    console.log(data);
    console.log(lang);
    if (lang === "all") {
      let tmpLocal = props.fullTest.ru.pages[props.activePage].QnAPairs;
      tmpLocal[qid][whatToSave] = data;
      props.saveChanges(tmpLocal, "ru");
      tmpLocal = props.fullTest.en.pages[props.activePage].QnAPairs;
      tmpLocal[qid][whatToSave] = data;
      props.saveChanges(tmpLocal, "en");
      tmpLocal = props.fullTest.lv.pages[props.activePage].QnAPairs;
      tmpLocal[qid][whatToSave] = data;
      props.saveChanges(tmpLocal, "lv");
    } else {
      console.log(props.fullTest[lang!].pages[props.activePage].QnAPairs);
      let tmpLocal = props.fullTest[lang!].pages[props.activePage].QnAPairs;
      console.log(tmpLocal);
      tmpLocal[qid][whatToSave] = data;
      // console.log(tmp[qid][whatToSave]);
      // console.log("from save new data", tmp);
      props.saveChanges(tmpLocal, lang);
    }
  };

  const handleQuestionKeyPress = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    event.key === "Enter" ? console.log("Efnter") : undefined;
  };

  const textEntryCountLimit: number = 180;

  const qaTextEntryHeaderStyle: React.CSSProperties = {
    color: "whitesmoke",
    fontSize: "24px",
    margin: "0",
  };

  const qaTextEntryPContainer: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "7.5%",
    height: "3rem",
    border: "1px solid rgba(0,0,0,0)",
    borderRadius: "31px",
    backgroundColor: "rgb(214	180	156	)",
  };

  const qaTextEntryContainer: React.CSSProperties = {
    width: "90%",
    height: "35%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  };

  const qaTextEntryCharCounter: React.CSSProperties = {
    color: "rgb(47 71 88)",
    fontSize: "25px",
    margin: "0",
    width: "5%",
  };
  function q_a_TextEntry(type: "answer" | "question", id: number) {
    // console.log("id", id);
    return (
      <>
        <div style={qaTextEntryContainer}>
          <div style={qaTextEntryPContainer}>
            <p style={qaTextEntryHeaderStyle}>RUS</p>
          </div>
          <textarea
            // * RU
            autoFocus
            className={compStyles.textInputForQandA}
            name="qaTextEntry"
            id={String(id)}
            value={props.fullTest.ru.pages[props.activePage].QnAPairs[id][type]}
            // value={props.pageToRender[id][type]}
            maxLength={textEntryCountLimit}
            onChange={(e) => saveNewData(id, e.currentTarget.value, type, "ru")}
          />
          <p style={qaTextEntryCharCounter}>
            {
              props.fullTest.ru.pages[props.activePage].QnAPairs[id][type]
                .length
            }
            /{textEntryCountLimit}
          </p>
        </div>
        <div style={qaTextEntryContainer}>
          <div style={qaTextEntryPContainer}>
            <p style={qaTextEntryHeaderStyle}>ENG</p>
          </div>
          <textarea
            // * EN
            className={compStyles.textInputForQandA}
            name="qaTextEntry"
            id={String(id)}
            value={props.fullTest.en.pages[props.activePage].QnAPairs[id][type]}
            maxLength={textEntryCountLimit}
            onChange={(e) => saveNewData(id, e.currentTarget.value, type, "en")}
          />
          <p style={qaTextEntryCharCounter}>
            {
              props.fullTest.en.pages[props.activePage].QnAPairs[id][type]
                .length
            }
            /{textEntryCountLimit}
          </p>
        </div>
        <div style={qaTextEntryContainer}>
          <div style={qaTextEntryPContainer}>
            <p style={qaTextEntryHeaderStyle}>LAT</p>
          </div>
          <textarea
            // * LV
            className={compStyles.textInputForQandA}
            name="qaTextEntry"
            value={props.fullTest.lv.pages[props.activePage].QnAPairs[id][type]}
            maxLength={textEntryCountLimit}
            onChange={(e) => saveNewData(id, e.currentTarget.value, type, "lv")}
          />
          <p style={qaTextEntryCharCounter}>
            {
              props.fullTest.lv.pages[props.activePage].QnAPairs[id][type]
                .length
            }
            /{textEntryCountLimit}
          </p>
        </div>
        {/* <p className={compStyles.textInputQnACounter}>
          Character count: {props.pageToRender[id][type].length} /{" "}
          {textEntryCountLimit}
        </p> */}
      </>
    );
  }

  // const handleQuestionChange = (
  //   event: React.ChangeEvent<HTMLTextAreaElement>
  // ) => {
  //   // console.log(`${event.currentTarget.id}:`, event.currentTarget.value);
  //   saveNewData(
  //     Number(event.currentTarget.id),
  //     event.currentTarget.value,
  //     "question"
  //   );
  // };

  // const handleModalOpening = (
  //   event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  // ) => {
  //   if (event.currentTarget.classList.contains(compStyles.question)) {
  //     let tmpModalsArray = Array.from(
  //       document.getElementsByClassName(addCompStyles.ModalContainerBG)
  //     );
  //     tmpModalsArray.forEach((modal) => {
  //       if (modal.id !== event.currentTarget.id) {
  //         modal.classList.add(compStyles.HideModal);
  //       } else {
  //         modal.classList.remove(compStyles.HideModal);
  //       }
  //     });
  //     // console.log(tmpModalsArray);
  //     setisQOpen(true);
  //   }
  // };

  function testTypeToQaCard(tt: TTestTypes, cardType: "question" | "answer") {
    let content: "text" | "img";
    if (cardType === "question") {
      tt === ("TT" as String) || tt === ("TP" as String)
        ? (content = "text")
        : (content = "img");
      return content;
    } else if (cardType === "answer") {
      tt === ("TT" as String) || tt === ("PT" as String)
        ? (content = "text")
        : (content = "img");
      return content;
    }
    return "text";
  }

  const pageBody = () =>
    props.pageToRender.map((qna: IQnA, qnaIterator: number) => (
      <div
        key={qnaIterator}
        id={String(qnaIterator)}
        className={compStyles.qnaPair}
      >
        <QACard
          setCurrentCard={props.setCurrentCard}
          cardType="question"
          // cardContents={props.testType === "PP" ? "img" : "text"}
          cardContents={testTypeToQaCard(props.testType, "question")}
          iterator={qnaIterator}
          setSelectedLanguage={setSelectedLanguage}
          inputEnabler={inputEnabler}
          qna={qna}
          testType={props.testType}
          q_a_TextEntry={q_a_TextEntry}
          togglePhotoManager={props.togglePhotoManager}
          currentLang={props.currentLanguage || "ru"}
          pageContents={props.pageToRender[qnaIterator]["question"]}
          pageNumber={props.activePage}
          saveIMG={saveNewData}
        />
        {/* For answer rendering */}
        <QACard
          setCurrentCard={props.setCurrentCard}
          cardType="answer"
          // cardContents={props.testType === "TT" ? "text" : "img"}
          cardContents={testTypeToQaCard(props.testType, "answer")}
          iterator={qnaIterator}
          setSelectedLanguage={setSelectedLanguage}
          inputEnabler={inputEnabler}
          qna={qna}
          testType={props.testType}
          q_a_TextEntry={q_a_TextEntry}
          togglePhotoManager={props.togglePhotoManager}
          currentLang={props.currentLanguage!}
          pageContents={props.pageToRender[qnaIterator]["answer"]}
          pageNumber={props.activePage}
          saveIMG={saveNewData}
        />
      </div>
    ));

  return (
    <div className={styles.TestPreview}>
      <p className={styles.TPHeader}>Страница {props.activePage + 1}</p>

      <div className={`${compStyles.TestBGContainer}`}>
        <FMLogo />
        <div className={compStyles.pageBody}>
          {props.testType === "" ? (
            <div className={compStyles.tTypeWarning}>
              {/* <h1>Выберите тип теста</h1> */}
            </div>
          ) : (
            pageBody()
          )}
        </div>
      </div>
    </div>
  );
};

export default TestPreview;
