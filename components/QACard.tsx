import React, { useState } from "react";
import { IQnA, TLangOption } from "../@types/test";
import compStyles from "./styles/TestPreview.module.scss";
import addCompStyles from "./styles/TestNamer.module.scss";
import { closeBtn, CreateLangSwitchers } from "./TestNamer";
import { AnyTxtRecord } from "dns";
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
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const textPreviewer = (text: string) => {
    return text.slice(0, 90) + "...";
  };
  return (
    <div /* className={`${compStyles[props.cardType]}`} */>
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
              {props.testType === "TT"
                ? props.q_a_TextEntry(props.cardType, props.iterator)
                : null}
            </div>
          </div>
        </div>
      </div>
      <span
        className={compStyles[props.cardType]}
        onClick={(e) => setIsOpen(true)}
      >
        {textPreviewer(props.qna[props.cardType])}
      </span>
    </div>
  );
};
export default QACard;
