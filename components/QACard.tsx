import React, { useEffect, useRef, useState } from "react";
import { IQnA, TLangOption } from "../@types/test";
import compStyles from "./styles/TestPreview.module.scss";
import addCompStyles from "./styles/TestNamer.module.scss";
import { closeBtn, CreateLangSwitchers } from "./TestNamer";
import { read } from "fs";
import { readFile } from "fs/promises";
import PhotoManager from "./PhotoManager";

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
}) => {
  const charLimit = 90;
  const [isOpen, setIsOpen] = useState(false);
  console.log(props.cardContents);
  const textPreviewer = (text: string) => {
    if (text.length < 1) return <div className={compStyles.emptyText}>T</div>;
    if (text.length > charLimit) {
      return text.slice(0, 90) + "...";
    } else {
      return text;
    }
  };

  return (
    <div className={`${compStyles[props.cardType]}`}>
      <div
        id={String(props.iterator)}
        className={`${addCompStyles.ModalContainerBG} ${
          !isOpen ? addCompStyles.Hidden : null
        }`}
      >
        <div className={addCompStyles.ModalContainer}>
          {closeBtn(setIsOpen)}
          <div className={addCompStyles.Modal}>
            {CreateLangSwitchers(props.setSelectedLanguage, props.inputEnabler)}
            <div className={addCompStyles.NameForm}>
              {props.cardContents === "text" ? (
                props.q_a_TextEntry(props.cardType, props.iterator)
              ) : (
                <div onClick={(e) => props.togglePhotoManager(true)}>Hello</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <p className={compStyles.QADescription} onClick={(e) => setIsOpen(true)}>
        {props.cardContents === "text" ? (
          textPreviewer(props.qna[props.cardType])
        ) : (
          <p>+</p>
        )}
      </p>
    </div>
  );
};
export default QACard;
