import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
// import interact from "interactjs";
import styles from "../styles/test.module.scss";
// import OptionTop from "../../components/OptionTop";
// import OptionBottom from "../../components/OptionBottom";
// import { Target } from "@interactjs/types";
// import QACard from "../../components/QACard";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import Draggable, {
  DraggableData,
  DraggableEvent,
  // DraggableEventHandler,
} from "react-draggable";
import store from "store";
import { IQnA, IQnAPairs, ITest, TLangOption } from "../../@types/test";
import { URLCheckForLocalHost } from "../../components/constants";
// import { coordsToEvent } from "@interactjs/utils/pointerUtils";
import { motion, AnimatePresence } from "framer-motion";

function Test(props: any) {
  const router = useRouter();

  const [pages, setPages] = useState<JSX.Element[]>();
  const [pagesContent, setPagesContent] = useState<Array<IQnAPairs>>([]);
  // const [qnaOverlaps, setQnaOverlaps] = useState(0);
  const qnaOverlaps = useRef({
    counter: 0,
  });
  const [currentPage, setCurrentPage] = useState(0);

  const [qaRectPositions, setqaRectPositions] = useState<{
    q: DOMRect;
    a: DOMRect;
  }>({
    q: {},
    a: {},
  });
  useEffect(() => {
    console.log(qaRectPositions.a?.x, qaRectPositions.q?.x, "x, x");
  }, [qaRectPositions]);

  const refsToQuestions = useRef<HTMLElement[]>([]);
  const refsToAnswersHandles = useRef<HTMLElement[]>([]);

  useEffect(() => {
    console.log(router.query);

    //TODO: direct to /client/success?testid=${testid}&lang=${lang} once test is finished
    const chosenLang: "ru" | "en" | "lv" = router.query.lang!;
    const test: ITest = store.get("theTest");
    console.log(chosenLang);

    // console.log(test[store.get("activeLang")]);

    setPagesContent(test[store.get("activeLang")].pages);
    // createQnAPairs(activeLang.pages);
  }, []);

  useEffect(() => {
    const pagesPrep = prepareJSXOfPages(refsToQuestions);
    // console.log(pagesPrep);
  }, [pagesContent]);

  // console.log(qnaOverlaps.current.counter);
  return (
    // <AnimatePresence>
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
            refsToQuestions.current.forEach((question) =>
              console.log(question.parentElement)
            );
            refsToAnswersHandles.current.forEach((answer) =>
              console.log(answer.parentElement)
            );
          }}
        >
          Refs
        </button>
      </div>
    </DndProvider>
    /* </AnimatePresence> */
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
    console.log(event);

    if (CheckIfAnswerIntersectedTheQuestion(event)) {
      // console.log(event.target.parentNode.parentNode);
      // event.target.parentNode.parentNode.style.pointerEvents = "none";
      event.target.parentElement.parentElement.parentElement.parentElement.style.pointerEvents =
        "none";

      console.log(
        event.target.parentElement.parentElement.parentElement,
        "hello"
      );
      // setQnaOverlaps(qnaOverlaps + 1);
      qnaOverlaps.current.counter += 1;
      console.log(qnaOverlaps, "overlaps");
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
    setqaRectPositions({});
    const answerDragged: Element = event.target!.parentElement.parentElement
      .parentElement;
    console.log(answerDragged, "answer");
    const answerDraggedID = answerDragged.id;
    // const relatedQuestion = document.getElementById(
    //   `Question_${answerDraggedID.slice(answerDraggedID.indexOf("_"))}`
    // );

    const answerDraggedIterator = answerDraggedID.slice(
      answerDraggedID.indexOf("_") + 1,
      answerDraggedID.lastIndexOf("_")
    );
    console.log("answerDraggedId", answerDraggedID);

    const relatedAnswerHandle =
      refsToAnswersHandles.current[Number(answerDraggedIterator)];
    console.log(relatedAnswerHandle, "handles");

    const relatedQuestionHandle =
      refsToQuestions.current[Number(answerDraggedIterator)];
    console.log(relatedQuestionHandle, "handles");

    const questionRect = relatedQuestionHandle.getBoundingClientRect();
    const answerRect = relatedAnswerHandle.getBoundingClientRect();
    // let answerRect = answerDragged.parentElement!.getBoundingClientRect();
    setqaRectPositions({
      q: questionRect,
      a: answerRect,
    });

    if (
      questionRect.x < answerRect.x + answerRect.width &&
      questionRect.x + questionRect.width > answerRect.x
    ) {
      if (
        questionRect.y < answerRect.y + answerRect.height &&
        questionRect.y + questionRect.height > answerRect.y
      ) {
        console.log(answerDragged.parentElement?.parentElement, "oi");
        // answerDragged.parentElement!.style.filter = "brightness(0.5)";
        alert("Intersection");
        return true;
      } else {
        return false;
      }
    }
  }

  /**
   * Wraps question and answer pairs into a div (containing 3 pairs in this case)
   */
  function prepareJSXOfPages(refsToQuestions) {
    // console.log(pagesContent);
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
    // console.log(pages);
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
    refsToQuestions: { current: (HTMLDivElement | null)[] }
  ): React.ReactNode {
    let questions = page.QnAPairs.map((qnaPair: IQnA, iterator: number) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className={styles.TCard}
          id={`Question_${iterator}_p-${pageIterator}`}
          key={`Question_${iterator}_p-${pageIterator}`}
        >
          <div>{imgOrText(qnaPair.question)}</div>
        </div>
        <div
          ref={(ele) => (refsToQuestions.current[iterator] = ele)}
          style={{
            marginTop: "-0.1rem",
            width: "min-content",
            zIndex: 100,
          }}
        >
          {StickCircle()}
        </div>
      </div>
    ));

    let answers = page.QnAPairs.map((qnaPair: IQnA, iterator: number) => (
      <Draggable onStop={handleStopOfADrag}>
        <div
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className={styles.TCard}
            id={`Answer_${iterator}_p-${pageIterator}`}
            key={iterator}
          >
            <div>
              <div>{imgOrText(qnaPair.answer)}</div>
            </div>
          </div>
          <div
            ref={(ele) => (refsToAnswersHandles.current[iterator] = ele)}
            style={{
              zIndex: 100,
              marginBottom: "-0.35rem",
              width: "min-content",
            }}
          >
            {StickSemiCircle()}
          </div>
        </div>
      </Draggable>
    ));

    let answersShuffled = shuffle(answers);
    let questionsShuffled = shuffle(questions);
    // console.log(tmp);

    // console.log(questions, answers);

    let preparedPairsShuffled = page.QnAPairs.map((_, iterator: number) => (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variantsQnAPairs}
        transition={{
          duration: "1.5",
        }}
        key={`QuestionAnswerP-${iterator}_p-${pageIterator}`}
        className={styles.qnaContainer}
      >
        {/* {questionsShuffled[iterator]} */}

        {questions[iterator]}
        {answersShuffled[iterator]}
      </motion.div>
    ));

    return preparedPairsShuffled;
  }
}

const variantsQnAPairs = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

function shuffle(array: []) {
  let m = array.length;
  let t;
  let i;

  // console.log(m, t, i);
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // console.log(i, "i");

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
    // console.log(array);
  }

  return array;
}

const StickCircle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="29.956"
    viewBox="0 0 23 29.956"
  >
    <line
      id="Line_1"
      data-name="Line 1"
      y2="20"
      transform="translate(11.458 2)"
      fill="none"
      stroke="#c6aa96"
      // stroke-linecap=""
      strokeWidth="4"
    />
    <circle
      id="Ellipse_4"
      data-name="Ellipse 4"
      cx="11.5"
      cy="11.5"
      r="11.5"
      transform="translate(0 6.956)"
      fill="#c6aa96"
    />
  </svg>
);

const StickSemiCircle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="32.818"
    viewBox="0 0 25 22.818"
  >
    <line
      id="Line_2"
      data-name="Line 2"
      y2="17"
      transform="translate(12.5 13.818)"
      fill="none"
      stroke="#c6aa96"
      // stroke-linecap="round"
      strokeWidth="4"
    />
    <g
      id="Path_4"
      data-name="Path 4"
      transform="translate(0 -10.682)"
      fill="none"
    >
      <path
        d="M12.5,20.584C19.4,20.584,25,5.6,25,12.5a12.5,12.5,0,0,1-25,0C0,5.6,5.6,20.584,12.5,20.584Z"
        stroke="none"
      />
      <path
        d="M 12.5 25 C 5.596439838409424 25 -1.77635683940025e-15 19.40356063842773 -1.77635683940025e-15 12.50000095367432 C -1.77635683940025e-15 11.20769023895264 0.196135088801384 10.68245220184326 0.5602183938026428 10.68245220184326 C 2.141078472137451 10.68245220184326 6.888750553131104 20.583740234375 12.5 20.583740234375 C 18.1108283996582 20.583740234375 22.85856437683105 10.68245220184326 24.43978118896484 10.68245220184326 C 24.80409240722656 10.68245220184326 25 11.20726871490479 25 12.50000095367432 C 25 19.40356063842773 19.40356063842773 25 12.5 25 Z"
        stroke="none"
        fill="#c6aa96"
      />
    </g>
  </svg>
);

export default Test;
