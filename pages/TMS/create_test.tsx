import React, { useEffect, useState } from "react";
import Select from "react-select";
import { ITest, TLangOption, TTestTypes } from "../../@types/test";
import PhotoManager from "../../components/PhotoManager";
import TestNamer from "../../components/TestNamer";
import TestPreview from "../../components/TestPreview";
import styles from "../styles/create_test.module.scss";

function create_test() {
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

  const [currentLang, setCurrentLang] = useState<TLangOption>();
  const handleLangChange = (chosenLang: TLangOption) => {
    setCurrentLang(chosenLang);
  };

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

  const languageOptions: Array<TLangOption> = [
    { value: "ru", label: "RU" },
    { value: "en", label: "EN" },
    { value: "lv", label: "LV" },
  ];

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

  const [editEnabled, setEditEnabled] = useState<boolean>(false);
  const editingEnabler = (currentLang: string, testType: string) => {
    setEditEnabled(true);
  };

  useEffect(() => {
    if ((currentLang && testType) != undefined) {
      console.log("in an if");
      setEditEnabled(true);
    } else {
      setEditEnabled(false);
    }
    console.log("outside of if");
    console.log(currentLang, testType);
  }, [currentLang, testType]);

  return (
    <div className={styles.CreateTestContainer}>
      <div className={styles.TestType}>
        <Select
          options={typeOptions}
          className={styles.TestTypeSelect}
          onChange={(selected: any): void => handleTypeChange(selected.value)}
        />
      </div>
      <div className={styles.PageController}>
        <button disabled={!editEnabled} onClick={handleClick}>
          Add page +
        </button>
        <input disabled={!editEnabled} type="number" name="pageCount" />
      </div>
      {testType === (("TT" as unknown) as TTestTypes) ||
      testType === undefined ? null : (
        <PhotoManager />
      )}
      <div className={styles.TestNaming}>
        <TestNamer currentLang={currentLang} />
        {/* <Select
          // TODO: Need to figure out types for the @selected parameter
          onChange={(selected: any): void =>
            handleLangChange(selected.value || "")
          }
          options={languageOptions}
          className={styles.lgSelect}
        /> */}
      </div>
      <TestPreview />
    </div>
  );
}

export default create_test;
