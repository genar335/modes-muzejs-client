import React, { useRef, useState } from "react";
import compStyles from "./styles/TestNamer.module.scss";
import styles from "../pages/styles/create_test.module.scss";
import { TLangOption } from "../@types/test";
import { useEffect } from "react";
import LangBtnController from "./LangBtnController";

const TestNamer = (currentLang: any) => {
  const [isOpen, setIsOpen] = useState(false);

  // * State containing current chosen language
  const [selectedLang, setSelectedLang] = useState<TLangOption["value"]>();

  const [isSubmitBtnStateDone, setIsSubmitBtnStateDone] = useState<boolean>(
    false
  );

  interface INameInfo {
    ru: string;
    en: string;
    lv: string;
  }

  const [currentNames, setCurrentNames] = useState<INameInfo>({
    ru: "",
    en: "",
    lv: "",
  });

  const testLang: TLangOption["value"][] = ["ru", "lv", "en"];

  // * Sets the state of arrow button/tick button depending on whether the name input is entered in all languages.
  useEffect(() => {
    for (const keys in Object(currentNames)) {
      if (Object(currentNames)[keys] === "") {
        console.log("empty");
        setIsSubmitBtnStateDone(false);
        return;
      }
      setIsSubmitBtnStateDone(true);
    }
  }, [currentNames]);

  /**
   * Sets the modal state to specified language
   * @param chooseLanguage One of the available languages to set the modal state to
   */
  const setSelectedLanguage = (chooseLanguage: TLangOption["value"]): void => {
    setSelectedLang(chooseLanguage);
  };

  const handleNameChange = (nameInput: string): void => {
    setCurrentNames({
      ...currentNames,
      [selectedLang as string]: nameInput,
    });
  };

  const inputEnabler = () => {};

  const handleNameEntry = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <div className={`${styles.TestNaming}`}>
      {/* {isOpen ? ( */}
      <div
        className={`${compStyles.ModalContainerBG} ${
          !isOpen ? compStyles.Hidden : null
        }`}
      >
        <div className={compStyles.ModalContainer}>
          {closeBtn(setIsOpen)}

          <div className={compStyles.Modal}>
            <LangBtnController
              BtnArray={["ru", "lv", "en"]}
              active={"ru"}
              langSelector={setSelectedLanguage}
              inputEnabler={inputEnabler}
            />
            <form onSubmit={handleNameEntry} className={compStyles.NameForm}>
              <input
                // disabled={isNameEntryEnabled}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleNameChange(e.currentTarget.value)
                }
                type="text"
                placeholder="TestName"
                className={compStyles.TNameInput}
              />
              <button
                className={compStyles.NextLang}
                type="submit"
                value={isSubmitBtnStateDone ? "✔️" : "→"}
                id="arrowButton"
              >
                {!isSubmitBtnStateDone ? ArrowBtn() : SaveBtn()}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={compStyles.ModalOpener}>
        <span>Test name</span>
        <button onClick={() => setIsOpen(true)}>+</button>
      </div>
    </div>
  );
};

export default TestNamer;
function SaveBtn(): React.ReactNode {
  return (
    <svg
      width="200"
      height="56"
      viewBox="0 0 200 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="200" height="56" rx="28" fill="#2F4858" />
      <path
        d="M43.2257 36.192C41.5457 36.192 40.0257 35.824 38.6657 35.088C37.3217 34.336 36.2657 33.312 35.4977 32.016C34.7297 30.704 34.3457 29.232 34.3457 27.6C34.3457 25.968 34.7297 24.504 35.4977 23.208C36.2657 21.896 37.3297 20.872 38.6897 20.136C40.0497 19.384 41.5697 19.008 43.2497 19.008C44.5617 19.008 45.7617 19.232 46.8497 19.68C47.9377 20.112 48.8657 20.76 49.6337 21.624L48.0737 23.136C46.8097 21.808 45.2337 21.144 43.3457 21.144C42.0977 21.144 40.9697 21.424 39.9617 21.984C38.9537 22.544 38.1617 23.32 37.5857 24.312C37.0257 25.288 36.7457 26.384 36.7457 27.6C36.7457 28.816 37.0257 29.92 37.5857 30.912C38.1617 31.888 38.9537 32.656 39.9617 33.216C40.9697 33.776 42.0977 34.056 43.3457 34.056C45.2177 34.056 46.7937 33.384 48.0737 32.04L49.6337 33.552C48.8657 34.416 47.9297 35.072 46.8257 35.52C45.7377 35.968 44.5377 36.192 43.2257 36.192ZM57.4652 36.144C56.2012 36.144 55.0652 35.864 54.0572 35.304C53.0492 34.744 52.2572 33.976 51.6812 33C51.1212 32.008 50.8412 30.888 50.8412 29.64C50.8412 28.392 51.1212 27.28 51.6812 26.304C52.2572 25.312 53.0492 24.544 54.0572 24C55.0652 23.44 56.2012 23.16 57.4652 23.16C58.7292 23.16 59.8572 23.44 60.8492 24C61.8572 24.544 62.6412 25.312 63.2012 26.304C63.7772 27.28 64.0652 28.392 64.0652 29.64C64.0652 30.888 63.7772 32.008 63.2012 33C62.6412 33.976 61.8572 34.744 60.8492 35.304C59.8572 35.864 58.7292 36.144 57.4652 36.144ZM57.4652 34.128C58.2812 34.128 59.0092 33.944 59.6492 33.576C60.3052 33.192 60.8172 32.664 61.1852 31.992C61.5532 31.304 61.7372 30.52 61.7372 29.64C61.7372 28.76 61.5532 27.984 61.1852 27.312C60.8172 26.624 60.3052 26.096 59.6492 25.728C59.0092 25.36 58.2812 25.176 57.4652 25.176C56.6492 25.176 55.9132 25.36 55.2572 25.728C54.6172 26.096 54.1052 26.624 53.7212 27.312C53.3532 27.984 53.1692 28.76 53.1692 29.64C53.1692 30.52 53.3532 31.304 53.7212 31.992C54.1052 32.664 54.6172 33.192 55.2572 33.576C55.9132 33.944 56.6492 34.128 57.4652 34.128ZM74.9143 36L71.2423 31.128L67.5223 36H64.9543L69.9703 29.496L65.1943 23.28H67.7623L71.2663 27.864L74.7463 23.28H77.2663L72.4663 29.496L77.5303 36H74.9143ZM86.6987 23.16C87.9307 23.16 89.0347 23.432 90.0107 23.976C90.9867 24.52 91.7467 25.28 92.2907 26.256C92.8507 27.232 93.1307 28.36 93.1307 29.64C93.1307 30.92 92.8507 32.056 92.2907 33.048C91.7467 34.024 90.9867 34.784 90.0107 35.328C89.0347 35.872 87.9307 36.144 86.6987 36.144C85.7867 36.144 84.9467 35.968 84.1787 35.616C83.4267 35.264 82.7867 34.752 82.2587 34.08V40.656H79.9547V23.28H82.1627V25.296C82.6747 24.592 83.3227 24.064 84.1067 23.712C84.8907 23.344 85.7547 23.16 86.6987 23.16ZM86.5067 34.128C87.3227 34.128 88.0507 33.944 88.6907 33.576C89.3467 33.192 89.8587 32.664 90.2267 31.992C90.6107 31.304 90.8027 30.52 90.8027 29.64C90.8027 28.76 90.6107 27.984 90.2267 27.312C89.8587 26.624 89.3467 26.096 88.6907 25.728C88.0507 25.36 87.3227 25.176 86.5067 25.176C85.7067 25.176 84.9787 25.368 84.3227 25.752C83.6827 26.12 83.1707 26.64 82.7867 27.312C82.4187 27.984 82.2347 28.76 82.2347 29.64C82.2347 30.52 82.4187 31.304 82.7867 31.992C83.1547 32.664 83.6667 33.192 84.3227 33.576C84.9787 33.944 85.7067 34.128 86.5067 34.128ZM100.897 23.16C102.657 23.16 104.001 23.592 104.929 24.456C105.873 25.32 106.345 26.608 106.345 28.32V36H104.161V34.32C103.777 34.912 103.225 35.368 102.505 35.688C101.801 35.992 100.961 36.144 99.9849 36.144C98.5609 36.144 97.4169 35.8 96.5529 35.112C95.7049 34.424 95.2809 33.52 95.2809 32.4C95.2809 31.28 95.6889 30.384 96.5049 29.712C97.3209 29.024 98.6169 28.68 100.393 28.68H104.041V28.224C104.041 27.232 103.753 26.472 103.177 25.944C102.601 25.416 101.753 25.152 100.633 25.152C99.8809 25.152 99.1449 25.28 98.4249 25.536C97.7049 25.776 97.0969 26.104 96.6009 26.52L95.6409 24.792C96.2969 24.264 97.0809 23.864 97.9929 23.592C98.9049 23.304 99.8729 23.16 100.897 23.16ZM100.369 34.368C101.249 34.368 102.009 34.176 102.649 33.792C103.289 33.392 103.753 32.832 104.041 32.112V30.336H100.489C98.5369 30.336 97.5609 30.992 97.5609 32.304C97.5609 32.944 97.8089 33.448 98.3049 33.816C98.8009 34.184 99.4889 34.368 100.369 34.368ZM110.494 23.28H112.798V28.68H120.046V23.28H122.35V36H120.046V30.672H112.798V36H110.494V23.28ZM126.83 23.28H129.134V32.544L136.934 23.28H139.022V36H136.718V26.736L128.942 36H126.83V23.28ZM152.974 25.296H148.318V36H146.014V25.296H141.358V23.28H152.974V25.296ZM161.21 27.6C162.826 27.616 164.058 27.984 164.906 28.704C165.754 29.424 166.178 30.44 166.178 31.752C166.178 33.128 165.714 34.192 164.786 34.944C163.874 35.68 162.562 36.04 160.85 36.024L155.33 36V23.28H157.634V27.576L161.21 27.6ZM160.658 34.272C161.698 34.288 162.482 34.08 163.01 33.648C163.554 33.216 163.826 32.576 163.826 31.728C163.826 30.896 163.562 30.288 163.034 29.904C162.522 29.52 161.73 29.32 160.658 29.304L157.634 29.256V34.248L160.658 34.272Z"
        fill="white"
      />
    </svg>
  );
}

function ArrowBtn() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      type="submit"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="28" cy="28" r="28" fill="#2F4858" />
      <path
        d="M22 41L35 28L22 15"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function closeBtn(setIsOpen: React.Dispatch<React.SetStateAction<boolean>>) {
  return (
    <svg
      className={compStyles.CloseBTN}
      onClick={() => setIsOpen(false)}
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="28" cy="28" r="28" fill="#2F4858" />
      <path
        d="M38.5626 36.4501L30.1126 28L38.5628 19.5498C39.1458 18.9669 39.1458 18.0203 38.5626 17.4372C37.9797 16.8543 37.0332 16.8543 36.4502 17.4372L28 25.8874L19.5498 17.4372C18.9668 16.8543 18.0203 16.8543 17.4374 17.4372C16.8542 18.0203 16.8542 18.9669 17.4372 19.5498L25.8874 28L17.4374 36.4501C16.8542 37.0332 16.8542 37.9797 17.4372 38.5627C18.0203 39.1458 18.9668 39.1458 19.55 38.5627L28 30.1126L36.45 38.5627C37.0332 39.1458 37.9797 39.1458 38.5628 38.5627C39.1458 37.9797 39.1458 37.0332 38.5626 36.4501Z"
        fill="white"
      />
    </svg>
  );
}
