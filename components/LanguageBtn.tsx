import React from "react";
import { TLangOption } from "../@types/test";
import compStyle from "./styles/LanguageBtn.module.scss";

const LanguageBtn = (props: {
  btnID: string;
  btnText: string;
  pressed: boolean;
  langSelect: (chooseLanguage: TLangOption["value"]) => void;
  inputEnabler: (bool: boolean) => void;
  setActiveBtn: (id: number) => void;
  accessKey: number;
  key: number;
}) => {
  const testClick = (
    btn: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    console.log(btn.currentTarget.id, "from a btn");
    props.langSelect(btn.currentTarget.id as "ru" | "en" | "lv");
    props.setActiveBtn(props.accessKey);
  };

  return (
    <button
      id={props.btnID}
      onClick={testClick}
      // disabled={props.pressed}
      className={`${compStyle.LangButton} ${
        props.pressed ? compStyle.ButtonPressed : null
      }`}
    >
      {props.btnText}
    </button>
  );
};

export default LanguageBtn;
