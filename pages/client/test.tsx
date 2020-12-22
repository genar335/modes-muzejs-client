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
import Draggable, {
  DraggableData,
  DraggableEvent,
  DraggableEventHandler,
} from "react-draggable";
import store from "store";
import { IQnA, IQnAPairs, ITest } from "../../@types/test";
import { URLCheckForLocalHost } from "../../components/constants";

function Test(props: any) {
  const router = useRouter();

  const [pages, setPages] = useState();
  const [pagesContent, setPagesContent] = useState<Array<IQnAPairs>>([]);

  useEffect(() => {
    console.log(router.query);

    //TODO: direct to /client/success?testid=${testid}&lang=${lang} once test is finished
    const chosenLang: "ru" | "en" | "lv" = router.query.lang!;
    const test: ITest = store.get("theTest");

    console.log(test[store.get("activeLang")]);

    setPagesContent(test[store.get("activeLang")].pages);
    // createQnAPairs(activeLang.pages);
  }, []);

  useEffect(() => {
    const pagesPrep = prepareJSXOfPages();
    console.log(pagesPrep);
  }, [pagesContent]);

  return (
    <DndProvider backend={TouchBackend}>
      <div className={styles.pageContainer}>
        <img
          src="https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png"
          alt="logo"
          id={styles.MMlogo}
        />
        <div className={styles.testContainer}>{pages && pages[0]}</div>
      </div>
    </DndProvider>
  );

  function imgOrText(data: string) {
    console.log(data);
    console.log(data.match(URLCheckForLocalHost));
    if (data.match(URLCheckForLocalHost) !== null) {
      return (
        <img
          style={{
            width: "100%",
          }}
          src={data}
          alt=":("
        />
      );
    } else {
      return <p>data</p>;
    }
  }

  function handleStopOfADrag(event: DraggableEvent, data: DraggableData) {
    CheckIfAnswerIntersectedTheQuestion(event);
  }

  function CheckIfAnswerIntersectedTheQuestion(event: DraggableEvent) {
    const questionAbove = event.target.parentNode.parentNode.firstChild;
    const answerDragged = event.target.parentNode;


    const questionRect = questionAbove.getBoundingClientRect();
    const answerRect = answerDragged.getBoundingClientRect();


    if (questionRect.x < answerRect.x + answerRect.width &&
      questionRect.x + questionRect.width > answerRect.x) {
      if (questionRect.y < answerRect.y + answerRect.height &&
        questionRect.y + questionRect.height > answerRect.y) {
        alert("Images intersect");
        return true
      } else {
        return false
      }
    }
  }

  function prepareJSXOfPages() {
    console.log(pagesContent);
    const pagesPrep = pagesContent.map((page, pageIterator: number) => (
      <div
        id={`page-${pageIterator}`}
        key={pageIterator}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "90%",
          height: "90%",
        }}
      >
        {page.QnAPairs.map((qnaPair: IQnA, iterator: number) => (
          <div className={styles.qnaContainer}>
            <div
              className={styles.TCard}
              id={`Question_${iterator}_p-${pageIterator}`}
              key={iterator}
            >
              {imgOrText(qnaPair.question)}
            </div>
            <Draggable onStop={handleStopOfADrag}>
              <div
                className={styles.TCard}
                id={`Answer_${iterator}_p-${pageIterator}`}
                key={iterator}
              >
                {imgOrText(qnaPair.answer)}
              </div>
            </Draggable>
          </div>
        ))}
      </div>
    ));
    setPages(pagesPrep);
    console.log(pages);
    return pagesPrep;
  }
}

export default Test;
