import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { ITest, TLangOption, TTestTypes } from "../../@types/test";
import FMLogo from "../../components/FMlogo";
import PagesController from "../../components/PagesController";
import PhotoManager from "../../components/PhotoManager";
import TestNamer from "../../components/TestNamer";
import TestPreview from "../../components/TestPreview";
import styles from "../styles/create_test.module.scss";

function create_test() {
  // const [currentPages, setCurrentPages] = useState<number>(1);
  // let tmpPages: number = 0;
  const [activePage, setActivePage] = useState<number>(0);
  const activateAPage = (index: number) => setActivePage(index);
  const [pagesRendered, setPagesRendered] = useState<boolean>();
  const [test, setTest] = useState<ITest>({
    pages: 1,
    en: {
      name: "",
      pages: [],
    },
    lv: {
      name: "",
      pages: [],
    },
    ru: {
      name: "",
      pages: [],
    },
    type: "",
  });
  const saveTest = (test: ITest): void => setTest(test);
  const [currentLang, setCurrentLang] = useState<TLangOption>();
  const handleClick = () => {
    setTest({
      ru: {
        name: "imya",
        pages: test.ru.pages,
      },
      lv: test.lv,
      en: test.en,
      pages: test.pages,
      type: "TP",
    });
  };

  type TTypeOptions = {
    value: "TT" | "TP" | "PP";
    label: "Text – Text" | "Text – Photo" | "Photo – Photo";
  };
  const typeOptions: Array<TTypeOptions> = [
    { value: "TT", label: "Text – Text" },
    { value: "TP", label: "Text – Photo" },
    { value: "PP", label: "Photo – Photo" },
  ];

  const [testType, setTestType] = useState<TTestTypes>();
  const handleTypeChange = (chosenType: TTestTypes): void =>
    setTestType(chosenType);

  // const [editEnabled, setEditEnabled] = useState<boolean>(false);
  // useEffect(() => {
  //   if ((currentLang && testType) != undefined) {
  //     console.log("in an if");
  //     setEditEnabled(true);
  //   } else {
  //     setEditEnabled(false);
  //   }
  //   console.log("outside of if");
  //   console.log(currentLang, testType);
  // }, [currentLang, testType]);

  const handleNumberInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.currentTarget.value);
    if (
      Number(event.currentTarget.value) >= 2 &&
      event.currentTarget.value != undefined &&
      Number(event.currentTarget.value) < 50
    ) {
      setTest({
        ...test,
        pages: Number(event.currentTarget.value),
      });
    }
  };

  const removePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    if (test.pages !== 1) {
      setTest({
        ...test,
        pages: test.pages - 1,
      });
    }
  };

  const addPage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    if (test.pages < 50) {
      setTest({
        ...test,
        pages: test.pages + 1,
      });
    }
  };

  useEffect(() => {
    console.log(test.pages);
    if (didMountRef.current) {
      setPagesRendered(false);
    } else {
      setPagesRendered(true);
    }
  });

  const didMountRef = useRef();

  return (
    <div className={styles.CreateTestContainer}>
      <FMLogo />
      <div className={styles.TestNaming}>
        <TestNamer
          currentLang={currentLang}
          saveTest={saveTest}
          currentStateOfTest={test}
        />
      </div>
      <div className={styles.TestType}>
        <Select
          options={typeOptions}
          className={styles.TestTypeSelect}
          onChange={(selected: any): void => handleTypeChange(selected.value)}
        />
      </div>
      <div className={styles.PageController}>
        <div className={styles.AddPageCont}>
          <h5>Pages</h5>
          <button
            disabled={pagesRendered}
            className={styles.ChangePagesBtn}
            onClick={removePage}
          >
            {removePageIcon()}
          </button>
          <input
            disabled={pagesRendered}
            type="number"
            name="pagesNumber"
            className={styles.pagesNumberIndicator}
            placeholder={test.pages.toString()}
            // value={currentPages}
            onChange={handleNumberInputChange}
          />
          <button className={styles.ChangePagesBtn} onClick={addPage}>
            {addPageIcon()}
          </button>
        </div>
        <PagesController
          activePage={activePage}
          setActivePage={activateAPage}
          currentPages={test.pages}
        />
      </div>
      {testType === (("TT" as unknown) as TTestTypes) ||
      testType === undefined ? null : (
        <PhotoManager />
      )}
      <TestPreview />
    </div>
  );
}

export default create_test;
function addPageIcon() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 35 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        r="17.3744"
        transform="matrix(1 0 0 -1 17.3744 18)"
        fill="#2F4858"
      />
      <path
        d="M23.5173 18.6826H18.0569V24.1431C18.0569 24.5198 17.7511 24.8257 17.3743 24.8257C16.9976 24.8257 16.6918 24.5198 16.6918 24.1431V18.6826H11.2312C10.8545 18.6826 10.5487 18.3768 10.5487 18.0001C10.5487 17.6233 10.8545 17.3174 11.2312 17.3174H16.6918V11.857C16.6918 11.4802 16.9976 11.1744 17.3743 11.1744C17.7511 11.1744 18.0569 11.4802 18.0569 11.857V17.3174H23.5173C23.8942 17.3174 24.2 17.6233 24.2 18.0001C24.2 18.3768 23.8942 18.6826 23.5173 18.6826Z"
        fill="white"
      />
    </svg>
  );
}

function removePageIcon() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 35 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        r="17.3744"
        transform="matrix(1 0 0 -1 17.3744 18)"
        fill="#2F4858"
      />
      <path
        d="M11.1692 18H23.5794"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}
