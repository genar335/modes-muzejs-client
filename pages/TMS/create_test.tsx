import React, { useState } from "react";
import PhotoManager from "../../components/PhotoManager";
import styles from "../styles/create_test.module.scss";

const create_test = () => {
  const [test, setTest] = useState({});
  return (
    <div className={styles.CreateTestContainer}>
      <div className={styles.TestType}>
        <select name="type-selector" id="">
          <option value="" disabled selected>
            Test type
          </option>
          <option value="photo-text">Photo – Text</option>
          <option value="photo-photo">Photo – Photo</option>
          <option value="text-text">Text – Text</option>
        </select>
      </div>
      <div className={styles.PageController}>
        <button>Add page</button>
        <span>1</span>
      </div>
      <PhotoManager />
      <div className={styles.TestNaming}>
        <input type="text" name="TestName" placeholder="Test name" />
        <select name="Lang-selector" className={styles.lgSelect}>
          <option value="" disabled selected>
            Language
          </option>
          <option value="ru">RU</option>
          <option value="en">EN</option>
          <option value="lv">LV</option>
        </select>
      </div>
      <div className={styles.TestPreview}>
        <h3>Page: </h3>
      </div>
    </div>
  );
};

export default create_test;
