import Link from "next/link";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import TestCardClient from "../../components/TestCardClient";
import styles from "../styles/test_selection.module.scss";

function test_selection(props: any) {
  const [testObjs, setTestObjs] = useState([]); //array with test objects
  //! @insoemnia, you do not really need to store the url in the state, since you do not really change it.
  const [url, setUrl] = useState(
    "http://localhost:4000/tests/getTest?active=true"
  ); //?dev url of active tests?

  const getActiveTests = (url: string) => {
    Axios.get(url)
      .then((res) => {
        console.log(res);
        setTestObjs(res.data);
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    getActiveTests(url);
  });

  //TODO: direct to the chosen test

  return (
    <div className={styles.pageContainer}>
      <img
        src="https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png"
        alt="logo"
        id={styles.MMlogo}
      />
      <div className={styles.galleryContainer}>
        <TestCardClient title="test1" />
        <TestCardClient title="test2" />
        <TestCardClient title="test3" />
        <TestCardClient title="test4" />
        <TestCardClient title="test5" />
      </div>
    </div>
  );
}

export default test_selection;
