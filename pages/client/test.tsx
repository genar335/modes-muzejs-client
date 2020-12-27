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
import { IQnA, IQnAPairs, ITest, TLangOption } from "../../@types/test";
import { URLCheckForLocalHost } from "../../components/constants";
import { coordsToEvent } from "@interactjs/utils/pointerUtils";

function Test(props: any) {
  const router = useRouter();

  const [pages, setPages] = useState<JSX.Element[]>();
  const [pagesContent, setPagesContent] = useState<Array<IQnAPairs>>([]);
  // const [qnaOverlaps, setQnaOverlaps] = useState(0);
  const qnaOverlaps = useRef({
    counter: 0,
  });
  const [currentPage, setCurrentPage] = useState(0);

  const refsToQuestions = useRef([]);

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
    const pagesPrep = prepareJSXOfPages(refsToQuestions);
    // console.log(pagesPrep);
  }, [pagesContent]);

  // console.log(qnaOverlaps.current.counter);
  return (
    <DndProvider backend={TouchBackend}>
      <div className={styles.pageContainer}>
        <img
          src="https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png"
          alt="logo"
          id={styles.MMlogo}
        />
        <div className={styles.testContainer}>
          {pages !== undefined ? (
            pages![currentPage]
          ) : (
            <p>An error has occured, try realoding the page.</p>
          )}
        </div>
        <button
          onClick={(e) => {
            console.log(pagesContent.length, "state", currentPage);
            currentPage < pagesContent.length - 1 &&
              setCurrentPage(currentPage + 1);
          }}
        >
          {">"}
        </button>
      </div>
    </DndProvider>
  );

  /**
   * Returns either an <img> or <p> containig the `data`
   * @param data string containing eihter the text of a question/answer or a link to the image
   */
  function imgOrText(data: string): JSX.Element {
    // console.log(data);
    // console.log(data.match(URLCheckForLocalHost));
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
    if (CheckIfAnswerIntersectedTheQuestion(event)) {
      console.log(event.target.parentNode.parentNode);
      event.target.parentNode.parentNode.style.pointerEvents = "none";
      console.log(qnaOverlaps, "overlaps");
      // setQnaOverlaps(qnaOverlaps + 1);
      qnaOverlaps.current.counter += 1;
      if (qnaOverlaps.current.counter === 3) {
        qnaOverlaps.current.counter = 0;
        if (currentPage < pagesContent.length - 1) {
          refsToQuestions.current = [];
          setCurrentPage(currentPage + 1);
        }
      }
    }
  }

  /**
   * Checks whether the dragged element intersects its question.
   * @param event refer to React Draggable
   */
  function CheckIfAnswerIntersectedTheQuestion(event: DraggableEvent) {
    const answerDragged: Element = event.target!.parentElement;
    const answerDraggedID = answerDragged.id;
    // const relatedQuestion = document.getElementById(
    //   `Question${answerDraggedID.slice(answerDraggedID.indexOf("_"))}`
    // );
    // console.log(relatedQuestion, "qID");
    const answerDraggedIterator = answerDraggedID.slice(
      answerDraggedID.indexOf("_") + 1,
      answerDraggedID.lastIndexOf("_")
    );
    console.log(answerDraggedIterator, "answer id iterator");

    const relatedQuestion =
      refsToQuestions.current[Number(answerDraggedIterator)];
    console.log(relatedQuestion.getBoundingClientRect());
    // const questionAbove = event.target.parentNode.parentNode.firstChild;

    const questionRect = relatedQuestion.getBoundingClientRect();
    const answerRect = answerDragged.getBoundingClientRect();

    if (
      questionRect.x < answerRect.x + answerRect.width &&
      questionRect.x + questionRect.width > answerRect.x &&
      questionRect.y < answerRect.y + answerRect.height &&
      questionRect.y + questionRect.height > answerRect.y
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Wraps question and answer pairs into a div (containing 3 pairs in this case)
   */
  function prepareJSXOfPages(refsToQuestions) {
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
        {qnaPairsToJSX(page, pageIterator, refsToQuestions)}
      </div>
    ));
    setPages(pagesPrep);
    console.log(pages);
    return pagesPrep;
  }

  /**
   * Returns an array of JSX Elements containing question and answer cards (which are shuffled randomly before rendering) in pairs
   * @param page Array of question and answer pairs to be rendered
   * @param pageIterator page (int) to which the array corresponds
   */
  function qnaPairsToJSX(
    page: IQnAPairs,
    pageIterator: number,
    refsToQuestions
  ): React.ReactNode {
    // let preparedPairs: JSX.Element[] = page.QnAPairs.map(
    //   (qnaPair: IQnA, iterator: number) => (
    //     <div
    //       key={`QuestionAnswerP-${iterator}_p-${pageIterator}`}
    //       className={styles.qnaContainer}
    //     >
    //       <div
    //         ref={(ele) =>
    //           (refsToQuestions.current[
    //             iterator
    //             // `Question_${iterator}_p-${pageIterator}`
    //           ] = ele)
    //         }
    //         className={styles.TCard}
    //         id={`Question_${iterator}_p-${pageIterator}`}
    //         key={`Question_${iterator}_p-${pageIterator}`}
    //       >
    //         {imgOrText(qnaPair.question)}
    //       </div>
    //       <Draggable onStop={handleStopOfADrag}>
    //         <div
    //           className={styles.TCard}
    //           id={`Answer_${iterator}_p-${pageIterator}`}
    //           key={iterator}
    //         >
    //           {imgOrText(qnaPair.answer)}
    //         </div>
    //       </Draggable>
    //     </div>
    //   )
    // );
    let questions = page.QnAPairs.map((qnaPair: IQnA, iterator: number) => (
      <div
        ref={(ele) =>
          (refsToQuestions.current[
            iterator
            // `Question_${iterator}_p-${pageIterator}`
          ] = ele)
        }
        className={styles.TCard}
        id={`Question_${iterator}_p-${pageIterator}`}
        key={`Question_${iterator}_p-${pageIterator}`}
      >
        {imgOrText(qnaPair.question)}
      </div>
    ));

    let answers = page.QnAPairs.map((qnaPair: IQnA, iterator: number) => (
      <Draggable onStop={handleStopOfADrag}>
        <div
          className={styles.TCard}
          id={`Answer_${iterator}_p-${pageIterator}`}
          key={iterator}
        >
          {imgOrText(qnaPair.answer)}
        </div>
      </Draggable>
    ));

    let tmp = shuffle(answers);
    console.log(tmp);

    console.log(questions, answers);

    let preparedPairsShuffled = page.QnAPairs.map(
      (qnaPair: IQnA, iterator: number) => (
        <div
          key={`QuestionAnswerP-${iterator}_p-${pageIterator}`}
          className={styles.qnaContainer}
        >
          {questions[iterator]}
          {tmp[iterator]}
        </div>
      )
    );

    return preparedPairsShuffled;
  }
}

function shuffle(array: []) {
  let m = array.length;
  let t;
  let i;

  console.log(m, t, i);
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    console.log(i, "i");

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
    console.log(array);
  }

  return array;
}

export default Test;
