import React, { useRef, useState } from "react";
import compStyles from "./styles/TestNamer.module.scss";
import styles from "../pages/styles/create_test.module.scss";
import { TLangOption } from "../@types/test";
import { useEffect } from "react";

const TestNamer = (currentLang: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedLang, setSelectedLang] = useState<TLangOption["value"]>();

  const testLang: TLangOption["value"][] = ["ru", "lv", "en"];

  let langButtons: Array<HTMLElement | null> = [];
  useEffect(() => {
    langButtons = testLang.map((lang: string) => document.getElementById(lang));
    console.log(langButtons);
  });

  const handleLangBtnClick = (
    btn: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(btn.target?.id);
    langButtons[testLang.indexOf(btn.target?.id)]?.classList.toggle(
      compStyles.ButtonPressed
    );
    setSelectedLang(btn.target?.id);
  };

  return (
    <div className={styles.TestNaming}>
      {isOpen ? (
        <div className={compStyles.ModalContainerBG}>
          <div className={compStyles.ModalContainer}>
            <button
              className={compStyles.CloseBTN}
              onClick={() => setIsOpen(false)}
            >
              𝖷
            </button>

            <div className={compStyles.Modal}>
              <div className={compStyles.LangSelect}>
                <button
                  onClick={handleLangBtnClick}
                  id="ru"
                  className={compStyles.LangButton}
                >
                  RUS
                </button>
                <button
                  onClick={handleLangBtnClick}
                  id="lv"
                  className={compStyles.LangButton}
                >
                  LAT
                </button>
                <button
                  onClick={handleLangBtnClick}
                  id="en"
                  className={compStyles.LangButton}
                >
                  ENG
                </button>
              </div>
              <input
                type="text"
                placeholder="TestName"
                className={compStyles.TNameInput}
              />
              <button
                className={compStyles.NextLang}
                // onClick={handleArrowClick}
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={compStyles.ModalOpener}>
          <span>Test name</span>
          <button onClick={() => setIsOpen(true)}>+</button>
        </div>
      )}
    </div>
  );
};

export default TestNamer;
