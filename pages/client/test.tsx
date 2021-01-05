import React, { useEffect, useReducer, useRef, useState } from "react";
import { useRouter } from "next/router";
// import interact from "interactjs";
import styles from "../styles/test.module.scss";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import Draggable, {
  DraggableCore,
  DraggableData,
  DraggableEvent,
  DraggableEventHandler,
  // DraggableEventHandler,
} from "react-draggable";
import store from "store";
import { IQnA, IQnAPairs, ITest, TLangOption } from "../../@types/test";
import { URLCheckForLocalHost } from "../../components/constants";
import { motion, AnimatePresence } from "framer-motion";
import TestProgressBar from "../../components/TestProgressBar";

function Test(props: any) {
  const router = useRouter();

  const [pages, setPages] = useState<JSX.Element[]>();
  const [pagesContent, setPagesContent] = useState<Array<IQnAPairs>>([]);
  // const [qnaOverlaps, setQnaOverlaps] = useState(0);
  const qnaOverlaps = useRef({
    counter: 0,
  });
  // const [currentPage, setCurrentPage] = useState<number>(0);
  const initalPage = { count: 0 };

  function reducer(page, action) {
    switch (action.type) {
      case "increment":
        return { count: page.count + 1 };
      default:
        throw new Error();
    }
  }

  const [page, dispatch] = useReducer(reducer, initalPage);
  useEffect(() => {
    if (
      page.count === pagesContent.length &&
      page.count !== 0 &&
      pagesContent.length !== 0
    ) {
      setTimeout(() => {
        router.push("http://localhost:3000/client/success");
      }, 300);
      console.log(page.count);
      console.log(pagesContent.length);
    }
  });

  const [qaRectPositions, setqaRectPositions] = useState<{
    q: DOMRect;
    a: DOMRect;
  }>({
    q: {},
    a: {},
  });
  // useEffect(() => {
  //   console.log(qaRectPositions.a?.x, qaRectPositions.q?.x, "x, x");
  // }, [qaRectPositions]);

  const refsToQuestions = useRef<HTMLElement[]>([]);
  const refsToAnswersHandles = useRef<HTMLElement[]>([]);
  const refsToAnswersPositions = useRef([]);

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
            height: "100%",
            objectFit: "cover",
            borderRadius: "16px",
            border: "#cba992 solid 3px",
          }}
          src={data}
          alt=":("
        />
      );
    } else {
      return <p>data</p>;
    }
  }

  function handleDrag(event: DraggableEventHandler, data: DraggableData) {
    // console.log(data);
    let tmp = event.target.parentElement.parentElement.id;
    // console.log(tmp);
    const id = tmp.slice(tmp.indexOf("_") + 1, tmp.lastIndexOf("_"));
    // console.log(id);
    refsToAnswersPositions.current[id] = {
      position: data,
    };
  }

  function handleStartOfDrag(
    event: DraggableEventHandler,
    data: DraggableData
  ) {
    console.log(event.target.parentElement.parentElement.parentElement);
  }

  function handleStopOfADrag(
    event: DraggableEventHandler,
    data: DraggableData
  ) {
    console.log(data);

    let tmp = event.target.parentElement.parentElement.id;
    const id = tmp.slice(tmp.indexOf("_") + 1, tmp.lastIndexOf("_"));
    console.log(id, "idid");
    const { questionRect, answerRect } = getRectangles(event);

    console.log(event);

    if (CheckIfAnswerIntersectedTheQuestion(questionRect, answerRect)) {
      // console.log(event.target.parentNode.parentNode);
      // event.target.parentNode.parentNode.style.pointerEvents = "none";
      event.target.parentElement.parentElement.parentElement.parentElement.style.pointerEvents =
        "none";
      event.target.style.borderColor = "green";

      qnaOverlaps.current.counter += 1;

      const questionContainer: HTMLElement =
        refsToQuestions.current[id].parentElement;
      console.log(questionContainer, "123123");

      console.log(refsToAnswersHandles.current[id]);

      refsToAnswersHandles.current[id].parentElement.style.transform =
        "translate(0px, 0px)";
      refsToAnswersHandles.current[id].parentElement.style.marginTop = "-1rem";
      questionContainer.appendChild(
        refsToAnswersHandles.current[id].parentElement
      );

      if (qnaOverlaps.current.counter === 3) {
        if (page.count < pagesContent.length - 1) {
          refsToQuestions.current = [];
          // setCurrentPage(currentPage + 1);
          setTimeout(() => {
            dispatch({ type: "increment" });
          }, 400);
          console.log(page.count, "pages", pagesContent.length, "pagesContent");
        }
        qnaOverlaps.current.counter = 0;
      }
    } else {
    }
    // refsToAnswersPositions.current[id] = {
    //   position: {
    //     x: data.x,
    //     y: data.y,
    //     deltaX: data.x - data.lastX,
    //     deltaY: data.y - data.lastY,
    //   },
    // };
    refsToAnswersPositions.current[id] = {
      position: data,
    };
  }

  /**
   * Checks whether the dragged element intersects its question.
   * @param event refer to React Draggable
   */
  function CheckIfAnswerIntersectedTheQuestion(
    questionRect: DOMRect,
    answerRect: DOMRect
  ) {
    // const { questionRect, answerRect } = getRectangles(event);
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
        // console.log(answerDragged.parentElement?.parentElement, "oi");
        // answerDragged.parentElement!.style.filter = "brightness(0.5)";
        return true;
      } else {
        return false;
      }
    }
  }

  function getRectangles(event: DraggableEventHandler) {
    setqaRectPositions({});
    const answerDragged: Element = event.target!.parentElement.parentElement;

    const answerDraggedID = answerDragged.id;
    // const relatedQuestion = document.getElementById(
    //   `Question_${answerDraggedID.slice(answerDraggedID.indexOf("_"))}`
    // );
    const answerDraggedIterator = answerDraggedID.slice(
      answerDraggedID.indexOf("_") + 1,
      answerDraggedID.lastIndexOf("_")
    );

    const relatedAnswerHandle =
      refsToAnswersHandles.current[Number(answerDraggedIterator)];
    // console.log(relatedAnswerHandle, "handles");
    const relatedQuestionHandle =
      refsToQuestions.current[Number(answerDraggedIterator)];
    // console.log(relatedQuestionHandle, "handles");
    const questionRect = relatedQuestionHandle.getBoundingClientRect();
    const answerRect = relatedAnswerHandle.getBoundingClientRect();
    return { questionRect, answerRect };
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
          <div
            style={{
              height: "100%",
              boxSizing: "border-box",
            }}
          >
            {imgOrText(qnaPair.question)}
          </div>
        </div>
        <div
          ref={(ele) => (refsToQuestions.current[iterator] = ele)}
          style={{
            marginTop: "0.2rem",
            width: "min-content",
            zIndex: 100,
          }}
        >
          {StickCircle()}
        </div>
      </div>
    ));

    for (let i = 0; i < page.QnAPairs.length; i++) {
      refsToAnswersPositions.current[i] = {
        position: {
          x: 0,
          y: 0,
        },
      };
    }

    let answers = page.QnAPairs.map((qnaPair: IQnA, iterator: number) => (
      <Draggable
        axis="both"
        // onTouchStart={handleStartOfDrag}
        onDrag={handleDrag}
        // position={refsToAnswersPositions.current[iterator].position}
        onStop={handleStopOfADrag}
        // position={null}
        // grid={[25, 25]}
        defaultPosition={{ x: 0, y: 0 }}
        scale={1}
      >
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
            <div
              style={{
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              {imgOrText(qnaPair.answer)}
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
        // initial="hidden"
        // animate="visible"
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
      width="19"
      height="26.956"
      viewBox="0 0 19 26.956"
    >
      <g
        id="Group_35"
        data-name="Group 35"
        transform="translate(-115.882 -241.137)"
      >
        <line
          id="Line_1"
          data-name="Line 1"
          y2="11"
          transform="translate(125.357 243.137)"
          fill="none"
          stroke="#c6aa96"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <circle
          id="Ellipse_4"
          data-name="Ellipse 4"
          cx="9.5"
          cy="9.5"
          r="9.5"
          transform="translate(115.882 249.094)"
          fill="#c6aa96"
        />
      </g>
    </svg>
  );

  const StickSemiCircle = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="18.761"
      viewBox="0 0 19 18.761"
    >
      <g id="Group_34" data-name="Group 34" transform="translate(-115.996 0)">
        <line
          id="Line_4"
          data-name="Line 4"
          y2="11"
          transform="translate(125.357 5.761)"
          fill="none"
          stroke="#c6aa96"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <g
          id="Path_11"
          data-name="Path 11"
          transform="translate(115.996 -7.551)"
          fill="none"
        >
          <path
            d="M9.5,11.26c5.247,0,9.5-7.007,9.5-1.76a9.5,9.5,0,0,1-19,0C0,4.253,4.253,11.26,9.5,11.26Z"
            stroke="none"
          />
          <path
            d="M 0.8809738159179688 7.550793647766113 C 2.390966415405273 7.550793647766113 5.682500839233398 11.26012802124023 9.5 11.26012802124023 C 13.31717872619629 11.26012802124023 16.60886001586914 7.551321029663086 18.11902618408203 7.550793647766113 C 18.68457794189453 7.550596237182617 19 8.070477485656738 19 9.499998092651367 C 19 14.74670791625977 14.74670028686523 18.99999809265137 9.5 18.99999809265137 C 4.253299713134766 18.99999809265137 0 14.74670791625977 0 9.499998092651367 C 0 8.070796966552734 0.3156604766845703 7.550793647766113 0.8809738159179688 7.550793647766113 Z"
            stroke="none"
            fill="#c6aa96"
          />
        </g>
      </g>
    </svg>
  );

  const ExitBtn = (size: string) => (
    <svg
      // className={compStyles.CloseBTN}
      onClick={() =>
        router.push(
          `http://localhost:3000/client/languages?testid=${
            store.get("theTest").id
          }`
        )
      }
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="28" cy="28" r="28" fill="#2F4858" />
      <path
        d="M38.5626 36.4501L30.1126 28L38.5628 19.5498C39.1458 18.9669 39.1458 18.0203 38.5626 17.4372C37.9797 16.8543 37.0332 16.8543 36.4502 17.4372L28 25.8874L19.5498 17.4372C18.9668 16.8543 18.0203 16.8543 17.4374 17.4372C16.8542 18.0203 16.8542 18.9669 17.4372 19.5498L25.8874 28L17.4374 36.4501C16.8542 37.0332 16.8542 37.9797 17.4372 38.5627C18.0203 39.1458 18.9668 39.1458 19.55 38.5627L28 30.1126L36.45 38.5627C37.0332 39.1458 37.9797 39.1458 38.5628 38.5627C39.1458 37.9797 39.1458 37.0332 38.5626 36.4501Z"
        fill="white"
      />
    </svg>
  );

  return (
    <DndProvider backend={TouchBackend}>
      <AnimatePresence>
        <div className={styles.pageContainer}>
          <img
            src="https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png"
            alt="Fashion Museum"
            id={styles.MMlogo}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.testContainer}
          >
            <button
              style={{
                position: "absolute",
                right: "5%",
                top: "5%",
                backgroundColor: "rgba(0, 0, 0, 0)",
                border: "none",
              }}
            >
              {ExitBtn("35")}
            </button>
            {pages !== undefined && (
              <TestProgressBar
                activePage={page.count}
                numberOfPages={pages?.length}
                // numberOfPages={10}
              />
            )}
            {pages !== undefined && pages![page.count]}
          </motion.div>
        </div>
      </AnimatePresence>
    </DndProvider>
  );
}
export default Test;
