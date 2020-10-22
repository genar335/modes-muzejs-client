import React, { useState } from "react";
import compStyle from "./styles/LanguageBtn.module.scss";

const LanguageBtn = (props: {
  btnID: string;
  //   handleBtnClick: (
  //     btn: React.MouseEvent<HTMLButtonElement, MouseEvent>
  //   ) => void;
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
    props.langSelect(btn.currentTarget.id);
    props.setActiveBtn(props.accessKey);
  };

  return (
    <button
      id={props.btnID}
      onClick={testClick}
      disabled={props.pressed}
      className={`${compStyle.LangButton} ${
        props.pressed ? compStyle.ButtonPressed : null
      }`}
    >
      {props.btnText}
    </button>
  );
};

export default LanguageBtn;
