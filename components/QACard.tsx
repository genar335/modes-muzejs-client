import React, { useEffect, useRef, useState } from "react";
import { IQnA, TLangOption } from "../@types/test";
import compStyles from "./styles/TestPreview.module.scss";
import addCompStyles from "./styles/TestNamer.module.scss";
import { closeBtn, CreateLangSwitchers, SaveBtn } from "./TestNamer";
import { URLCheck } from "./constants";

const QACard = (props: {
  cardType: "answer" | "question";
  cardContents: "img" | "text";
  // saveData: (data) => void;
  iterator: number;
  setSelectedLanguage: (chooseLanguage: TLangOption["value"]) => void;
  inputEnabler: () => void;
  qna: IQnA;
  testType: any;
  q_a_TextEntry: (type: "answer" | "question", id: number) => JSX.Element;
  togglePhotoManager: (toggle: boolean) => void;
  setCurrentCard: React.Dispatch<React.SetStateAction<undefined>>;
  pageContents: string;
  currentLang: TLangOption["value"];
}) => {
  const charLimit = 90;
  const [isOpen, setIsOpen] = useState(false);
  console.log(props.cardContents);
  console.log("Test for page contents", props.pageContents);
  const textPreviewer = (text: string) => {
    if (text.length < 1) return <div className={compStyles.emptyText}>T</div>;
    if (text.length > charLimit) {
      return text.slice(0, 90) + "...";
    } else {
      return text;
    }
  };

  const QACardRef = useRef(null);

  useEffect(() => {
    console.log("Yayyy");
  }, [QACardRef.current]);

  const handleCardReference = () => {
    props.setCurrentCard(QACardRef);
    props.togglePhotoManager(false);
  };

  return (
    <div className={`${compStyles[props.cardType]}`}>
      <div
        // ref={QACardRef}
        id={`${props.cardType}_${props.iterator}`}
        className={`${addCompStyles.ModalContainerBG} ${
          !isOpen ? addCompStyles.Hidden : null
        }`}
      >
        <div className={addCompStyles.ModalContainer}>
          {closeBtn(setIsOpen)}
          <div className={addCompStyles.Modal}>
            {CreateLangSwitchers(
              props.setSelectedLanguage,
              props.inputEnabler,
              props.currentLang
            )}
            <div className={addCompStyles.NameForm}>
              {props.cardContents === "text" ? (
                props.q_a_TextEntry(props.cardType, props.iterator)
              ) : (
                <p>Hello</p>
              )}
            </div>
            <button
              onClick={(e) => setIsOpen(!isOpen)}
              className={addCompStyles.SaveBtn}
            >
              {SaveBtn()}
            </button>
          </div>
        </div>
      </div>
      <div
        className={compStyles.QADescription}
        onClick={(e) => {
          props.cardContents === "img"
            ? handleCardReference()
            : setIsOpen(true);
        }}
      >
        {props.cardContents === "text" ? (
          textPreviewer(props.qna[props.cardType])
        ) : (
          <img
            id={`${props.cardType}_${props.iterator}`}
            // onChange={(e) => console.log("YAyyy")}
            className={compStyles.SelectedIMGPreview}
            src={props.pageContents || ""}
            // src={props.pageContents.match(URLCheck) ? props.pageContents : ""}
            alt="No image"
            ref={QACardRef}
          />
        )}
      </div>
    </div>
  );
};
export default QACard;
