import React, { useState } from "react";
import Select from "react-select";
import PhotoManager from "../../components/PhotoManager";
import TestPreview from "../../components/TestPreview";
import styles from "../styles/create_test.module.scss";

const create_test = () => {
  const [test, setTest] = useState<ITest>({
    type: "TT",
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
  });

  const handleClick = () => {
    setTest({
      ru: {
        name: "imya",
        pages: test.ru.pages,
      },
      lv: test.lv,
      en: test.en,
      pages: test.pages,
      type: "TT",
    });
  };

  const languageOptions = [{ value: "ru", label: "RU" }];

  return (
    <div className={styles.CreateTestContainer}>
      <div className={styles.TestType}>
        <select onChange={(e) => console.log("sdf")} name="type-selector" id="">
          <option value="" disabled selected>
            Test type
          </option>
          <option value="photo-text">Photo – Text</option>
          <option value="photo-photo">Photo – Photo</option>
          <option value="text-text">Text – Text</option>
        </select>
      </div>
      <div className={styles.PageController}>
        <button onClick={handleClick}>Add page</button>
        <input type="number" name="pageCount" id="" />
      </div>
      <PhotoManager />
      <div className={styles.TestNaming}>
        <input type="text" name="TestName" placeholder="Test name" />
        <Select options={languageOptions} />
        <select name="Lang-selector" className={styles.lgSelect}>
          <option value="" disabled selected>
            Language
          </option>
          <option value="ru">RU</option>
          <option value="en">EN</option>
          <option value="lv">LV</option>
        </select>
      </div>
      <TestPreview />
    </div>
  );
};

export default create_test;
