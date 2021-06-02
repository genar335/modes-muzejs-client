import Axios from "axios";
import React, { useEffect, useState } from "react";
import TestCardClient from "../../components/TestCardClient";
import styles from "../styles/test_selection.module.scss";
import { ITest } from "../../@types/test";
import { producionURL } from "../../components/constants";

function test_selection(props: any) {
  const [testObjs, setTestObjs] = useState([]); //array with test objects
  const url = "http://192.168.8.100:4000/tests/getTest?active=true";

  const getActiveTests = (url: string) => {
    Axios.get(`${producionURL}tests/getTest?active=true`)
      .then((res) => {
        console.log(res);
        setTestObjs(res.data);
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    // "Bearer " + store.get("jwt");
    // Axios.defaults.headers.common["Authorization"] =
    getActiveTests(url);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <img
        src="https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png"
        alt="logo"
        id={styles.MMlogo}
      />
      <div className={styles.galleryContainer}>
        {testObjs.map((test: ITest) => (
          <TestCardClient title={test.ru.name} testData={test} />
        ))}
      </div>
    </div>
  );
}

export default test_selection;
