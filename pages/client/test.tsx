import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
// import interact from "interactjs";
import styles from "../styles/test.module.scss";
import OptionTop from "../../components/OptionTop";
import OptionBottom from "../../components/OptionBottom";
import { Target } from "@interactjs/types";
import QACard from "../../components/QACard";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import Draggable from "react-draggable";
import store from "store";
import { IQnA, IQnAPairs, ITest } from "../../@types/test";

function Test(props: any) {
  const router = useRouter();
  useEffect(() => {
    console.log(router.query);

    //TODO: direct to /client/success?testid=${testid}&lang=${lang} once test is finished
    const chosenLang: "ru" | "en" | "lv" = router.query.lang!;
    const test: ITest = store.get("theTest");

    console.log(test[store.get("activeLang")]);

    setPagesContent(test[store.get("activeLang")].pages);
    // createQnAPairs(activeLang.pages);
  }, []);

  const [pagesContent, setPagesContent] = useState<Array<IQnAPairs>>([]);

  const createQnAPairs = (pagesToRender: Array<Array<IQnAPairs>>) => {
    // TODO
    // Parse each QnA Pair
  };

  return (
    // <DndProvider backend={TouchBackend}>
    <div className={styles.pageContainer}>
      <img
        src="https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png"
        alt="logo"
        id={styles.MMlogo}
      />
      <div className={styles.testContainer}>
        {pagesContent.map((page, pageIterator: number) =>
          page.QnAPairs.map((qnaPair: IQnA, iterator: number) => (
            <div className={styles.qnaContainer}>
              <div
                className={styles.TCard}
                id={`Question_${iterator}_p-${pageIterator}`}
                key={iterator}
              >
                {qnaPair.question}
              </div>
              <div
                className={styles.TCard}
                id={`Answer_${iterator}_p-${pageIterator}`}
                key={iterator}
              >
                {qnaPair.question}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    // </DndProvider>
  );
}

export default Test;
