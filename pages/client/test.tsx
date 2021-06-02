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
import {
  devURL,
  productionURL,
  productionHost,
  URLCheckForLocalHost,
} from "../../components/constants";
import { motion, AnimatePresence } from "framer-motion";
import TestProgressBar from "../../components/TestProgressBar";
import pointerEvents from "@interactjs/pointer-events/base";
import { Arrow } from "../../components/PagesController";
import { borderRadius } from "react-select/src/theme";
import Axios from "axios";

function Test(props: {
  test: ITest;
  activeLanguage: TLangOption["value"];
  fromPreview?: boolean;
}) {
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
    console.log(pages?.length);
    console.log(page.count, "counter");
    switch (action.type) {
      case "increment":
        if (page.count + 1 !== pages?.length) {
          return { count: page.count + 1 };
        } else {
          return { count: page.count };
        }
      case "decrement":
        if (page.count !== 0) {
          return { count: page.count - 1 };
        } else {
          return { count: page.count };
        }
      default:
        throw new Error();
    }
  }

  const [page, dispatch] = useReducer(reducer, initalPage);
  useEffect(() => {
    if (
      page.count + 1 === pagesContent.length &&
      page.count !== 0 &&
      pagesContent.length !== 0
      // !props.test
    ) {
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

  const [test, setTest] = useState<ITest>();

  useEffect(() => {
    if (props.test) {
      setPagesContent(props.test.ru.pages);
    } else {
      console.log(router.query);

      //TODO: direct to /client/success?testid=${testid}&lang=${lang} once test is finished
      const chosenLang: "ru" | "en" | "lv" = router.query
        .lang! as TLangOption["value"];
      const test: ITest = store.get("theTest");

      setTest(test);
      console.log(chosenLang);

      setPagesContent(
        test[store.get("activeLang") as TLangOption["value"]].pages
      );
    }
    // createQnAPairs(activeLang.pages);
  }, []);

  useEffect(() => {
    const pagesPrep = prepareJSXOfPages(refsToQuestions);
    // console.log(pagesPrep);
  }, [pagesContent]);

  // console.log(qnaOverlaps.current.counter);

  function isImgOrText(data: string): boolean {
    return data.match(URLCheckForLocalHost) ? true : false;
  }

  /**
   * Returns either an <img> or <p> containig the `data`
   * @param data string containing eihter the text of a question/answer or a link to the image
   */
  function imgOrText(data: string): JSX.Element {
    // console.log(data);
    // console.log(data.match(URLCheckFor192.168.8.100));
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
      return (
        // <div>
        <p
          style={{
            width: "100%",
            margin: "0",
            padding: "1rem",
            boxSizing: "border-box",
            textAlign: "center",
            lineHeight: "110%",
          }}
        >
          {data}
        </p>
        // </div>
      );
    }
  }

  function handleDrag(event: DraggableEventHandler, data: DraggableData) {
    // console.log(data);
    // alert("Dragging");
    let tmp = event.target.parentElement.parentElement.id;
    // console.log(tmp);
    const id = tmp.slice(tmp.indexOf("_") + 1, tmp.lastIndexOf("_"));
    // console.log(id);
    refsToAnswersPositions.current[id] = {
      position: data,
    };
  }

  function handleStopOfADrag(
    event: DraggableEventHandler,
    data: DraggableData
  ) {
    if (
      event.target.parentElement.parentElement.classList[0].includes(
        "test_TCard"
      )
    ) {
      let tmp = event.target.parentElement.parentElement.id;
      const id = tmp.slice(tmp.indexOf("_") + 1, tmp.lastIndexOf("_"));
      const { questionRect, answerRect } = getRectanglesFromEvent(event);

      const intersections: Array<boolean> = refsToQuestions.current.map(
        (q) =>
          CheckIfAnswerIntersectedTheQuestion(
            q.getBoundingClientRect(),
            answerRect
          )!
      );

      console.log(intersections);

      if (CheckIfAnswerIntersectedTheQuestion(questionRect, answerRect)) {
        // console.log(event.target.parentNode.parentNode);
        // event.target.parentNode.parentNode.style.pointerEvents = "none";
        applyCSSToMatchedCards(event, refsToQuestions.current[id]);
        qnaOverlaps.current.counter += 1;

        console.log(refsToQuestions.current[id]);

        const questionContainer: HTMLElement =
          refsToQuestions.current[id].parentElement!;
        // console.log(questionContainer, "123123");

        // console.log(refsToAnswersHandles.current[id]);

        refsToAnswersHandles.current[id].parentElement!.style.transform =
          "translate(0px, 0px)";
        refsToAnswersHandles.current[id].parentElement!.style.marginTop =
          "-1rem";
        questionContainer.appendChild(
          refsToAnswersHandles.current[id].parentElement!
        );

        // event.target.style.pointerEvents.parentElement = "none";

        if (qnaOverlaps.current.counter === 3) {
          // alert(pagesContent.length);
          // if (page.count < pagesContent.length - 1) {
          refsToQuestions.current = [];
          // setCurrentPage(currentPage + 1);
          // setTimeout(() => {
          dispatch({ type: "increment" });
          // }, 1000);
          console.log(page.count, "pages", pagesContent.length, "pagesContent");
          // }
          qnaOverlaps.current.counter = 0;
        }
      } else {
        intersections.includes(true) && flashScreen();
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
  }

  async function flashScreen() {
    const testBody: HTMLElement = document.getElementsByClassName(
      styles.pageContainer
    )[0] as HTMLElement;
    testBody.style.boxShadow = "inset 0px 0px 30px 30px red";
    setTimeout(() => (testBody.style.boxShadow = "none"), 500);
  }

  function applyCSSToMatchedCards(
    event: DraggableEventHandler,
    answer: HTMLElement
  ) {
    // // Sets the contasiner of cards to be unclickable/untouchable.
    // event.target.parentElement.parentElement.parentElement.parentElement.style.pointerEvents =
    //   "none";
    console.log(answer.parentElement);
    answer.parentElement.style.pointerEvents = "none";
    // answer.style.width = "100rem";

    //* Applies a greenish border around answer cards.
    console.log(event.target.tagName);
    if (event.target.tagName == "P") {
      console.log(event.target.parentElement.parentElement.style.border);
      event.target.parentElement.parentElement.style.border =
        "solid 5px rgb(37, 180, 150)";
      event.target.parentElement.parentElement.parentElement.style.position =
        "inherit";
      console.log(event.target.parentElement.parentElement.style.border);
    } else if (event.target.tagName == "IMG") {
      console.log(event.target);
      // event.target.style.border = "none";
      event.target.style.border = "solid 5px rgb(37, 180, 150)";
      event.target.style.borderColor = "rgb(73, 180, 150,)";
      event.target.parentElement.parentElement.parentElement.style.position =
        "inherit";
    }
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
      }
    }
    return false;
  }

  function getRectanglesFromEvent(event: DraggableEventHandler) {
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

  const TestCompletionAcknowledgement = (): {
    ru: string;
    lv: string;
    en: string;
  } => {
    return {
      ru: `Тест "${
        props.test
          ? props.test[props.activeLanguage].name
          : store.get("theTest").ru.name
      }" пройден.`,
      lv: `Tests "${
        props.test
          ? props.test[props.activeLanguage].name
          : store.get("theTest").lv.name
      }" ir pabeigts.`,
      en: `Test "${
        props.test
          ? props.test[props.activeLanguage].name
          : store.get("theTest").en.name
      }" is compeleted.`,
    };
  };

  const [clientEmail, setClientEmail] = useState("");

  function prepareLastPageJSX(
    body: string,
    heading: string,
    email: boolean
  ): JSX.Element {
    console.log(heading, body);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",

          alignItems: "center",
          flexDirection: "row",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50%",
          }}
        >
          <h1
            style={{
              color: "#c6aa96",
              textAlign: "center",
              fontWeight: 300,
              fontSize: "60px",
              margin: "0",
            }}
          >
            {heading}
          </h1>
          {/* <h2
            style={{
              fontSize: "47px",
              fontWeight: 300,
              textAlign: "center",
            }}
          >
            {TestCompletionAcknowledgement()[getLang()]}
          </h2> */}
          <p
            style={{
              fontSize: "36px",
              fontWeight: 300,
              textAlign: "center",
            }}
          >
            {body}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            height: "160px",
            justifyContent: "space-around",
          }}
        >
          {email && (
            // <form onSubmit={(e) => e.preventDefault()}>
            <input
              onChange={(e) => {
                setClientEmail(e.currentTarget.value);
                console.log(clientEmail);
                console.log(e.target.value);
                console.log(e.currentTarget.value);
              }}
              autoComplete="off"
              style={{
                // position: "absolute",
                background: "rgba(0, 0, 0, 0)",
                color: "#C6AA96",
                border: "#C6AA96 solid 3px",
                padding: "0",
                borderRadius: "16px",
                // width: "100%",
                height: "30%",
                fontSize: "35px",
                textAlign: "center",
              }}
              placeholder="example@mail.com"
              type="email"
              name="userInfo"
              id="userEmail"
            />
          )}
          <button
            style={{
              width: "100%",
              height: "45%",
              backgroundColor: "#C6AA96",
              border: "none",
              borderRadius: "16px",
              padding: "0",
              // WebkitTextFillColor: "transparent",
              // WebkitBackgroundClip: "text",
            }}
            onClick={handleSendBtnClick}
          >
            <p
              style={{
                margin: "0",
                color: "black",
                fontFamily: "Montserrat",
                fontSize: "40px",
                fontWeight: 700,
                background: "whatever",
                letterSpacing: 6,
                // WebkitTextFillColor: "transparent",
                // WebkitBackgroundClip: "text",
              }}
            >
              {getBtnText().toLocaleUpperCase()}
            </p>
          </button>
        </div>
      </div>
    );

    function getBtnText(): string {
      return getLang() === "en"
        ? "Finish"
        : getLang() === "lv"
        ? "Pabeigt"
        : "Закончить";
    }

    function getLang() {
      return store.get("activeLang") as TLangOption["value"];
    }
  }

  async function handleSendBtnClick(e) {
    console.log(e);
    // const response = await Axios.post(`${productionURL}email`, {
    //   email: clientEmail,
    // });

    const options = {
      method: "POST",
      url: "https://modesmuzejs.lv/api/quiz/tests/email",
      origin: productionHost,
      headers: { "Content-Type": "application/json" },
      data: { email: "1231@gmail.com" },
    };

    // await Axios.request(options)
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    // console.log(response);
    const response = await Axios.post(`${productionURL}tests/email`, {
      email: clientEmail,
    });

    console.log(response);

    if (response.status === 200) {
      router.push(
        `${productionHost}/client/languages?testid=${store.get("theTest").id}`
      );
    }
  }

  function prepareFirstPage(): JSX.Element {
    return txtExpalantion();
  }

  const start_test_btn = () => (
    <svg width="116.656" height="116.66" viewBox="0 0 116.656 116.66">
      <defs>
        <filter
          id="Path_14"
          x="0"
          y="0"
          width="116.656"
          height="116.66"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood flood-opacity="0.161" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g
        id="Icon_feather-arrow-right-circle"
        data-name="Icon feather-arrow-right-circle"
        transform="translate(11.503 6.771)"
      >
        <g transform="matrix(1, 0, 0, 1, -11.5, -6.77)" filter="url(#Path_14)">
          <path
            id="Path_14-2"
            data-name="Path 14"
            d="M95.656,49.33A46.328,46.328,0,1,1,49.328,3,46.329,46.329,0,0,1,95.656,49.33Z"
            transform="translate(9 6)"
            fill="none"
            stroke="#c6aa96"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="6"
          />
        </g>
        <path
          id="Path_15"
          data-name="Path 15"
          d="M18,47.06,35.53,29.53,18,12"
          transform="translate(28.825 19.03)"
          fill="none"
          stroke="#c6aa96"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="5"
        />
        <path
          id="Path_16"
          data-name="Path 16"
          d="M12,18H47.06"
          transform="translate(17.295 30.559)"
          fill="none"
          stroke="#c6aa96"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="5"
        />
      </g>
    </svg>
  );

  function txtExpalantion(): JSX.Element {
    const sampleTxt: {
      ru: string;
      en: string;
      lv: string;
    } = {
      ru: "Найдите соответствие, переставляя нижние карточки.",
      en: "Find a match by moving the bottom cards.",
      lv: "Atrodiet atbilstību, pārliekot apakšējas kartītes.",
    };
    return (
      <div
        id="btn_txt_container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "40%",
        }}
      >
        <h1
          style={{
            fontWeight: 400,
            fontSize: "xxx-large",
            textAlign: "center",
          }}
        >
          {sampleTxt[store.get("activeLang") as TLangOption["value"]]}
        </h1>
        <button
          style={{ background: "none", border: "none" }}
          onClick={() => dispatch({ type: "increment" })}
        >
          {start_test_btn()}
        </button>
      </div>
    );
  }

  function ExplanatoryVideo(): JSX.Element {
    return (
      <div
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          background: "black",
          zIndex: 10000,
          top: 0,
          left: 0,
        }}
      >
        <video
          onEnded={() => dispatch({ type: "increment" })}
          controls
          autoPlay
          style={{
            width: "100%",
          }}
        >
          <source src="/Test_Example.webm" type="video/webm" />
        </video>
      </div>
    );
  }

  /**
   * Wraps question and answer pairs into a div (containing 3 pairs in this case)
   */
  function prepareJSXOfPages(refsToQuestions) {
    // console.log(pagesContent);
    let pagesPrep: JSX.Element[] = [];
    console.log(pagesPrep);
    props.fromPreview == undefined && pagesPrep.push(prepareFirstPage());
    const tmpPages = pagesContent.map((page, pageIterator: number) => (
      // <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        id={`page-${pageIterator}`}
        key={pageIterator}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "90%",
          height: "88%",
        }}
      >
        {qnaPairsToJSX(page, pageIterator, refsToQuestions)}
      </motion.div>
      // </AnimatePresence>
    ));
    // console.log(tmpPages);
    pagesPrep.push(...tmpPages);
    // console.log(pagesPrep);
    let tmp: ITest;
    if (props.fromPreview) {
      tmp = store.get("testInProgress");
    } else {
      tmp = store.get("theTest");
    }
    console.log(tmp);
    const {
      finalPageTextBody,
      finalPageTextHeading,
    }: { finalPageTextBody: string; finalPageTextHeading: string } =
      tmp[store.get("activeLang") as TLangOption["value"]] ||
      props.test[props.activeLanguage];
    console.log(tmp);
    const lastPage = prepareLastPageJSX(
      finalPageTextBody,
      finalPageTextHeading,
      tmp.emailSender /* as boolean */
    );

    pagesPrep.push(lastPage);
    setPages(pagesPrep);
    // console.log(pages);
    return pagesPrep;
  }

  const textCardCSSSetting: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    width: "320px",
    height: "min-content",
    // padding: "1rem",
    border: "3px solid rgb(198	169	149	)",
  };

  function setStyleAccordingToTestType(cardData: string): React.CSSProperties {
    switch (test?.type) {
      case "PP":
        return {
          width: "250px",
          height: "259.37px",
        };
      case "TT":
        return textCardCSSSetting;
      default:
        return isImgOrText(cardData)
          ? {
              width: "320px",
              height: "347px",
            }
          : textCardCSSSetting;
    }
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
          style={setStyleAccordingToTestType(qnaPair.question)}
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
            marginTop: isImgOrText(qnaPair.question) ? "0.2rem" : "-0.1rem",

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
            position: "absolute",
            bottom: "10%",
            display: "flex",
            flexDirection: "column-reverse",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100,
            // border: "3px solid rgb(198	169	149	)",
          }}
        >
          <div
            className={styles.TCard}
            id={`Answer_${iterator}_p-${pageIterator}`}
            key={iterator}
            style={setStyleAccordingToTestType(qnaPair.answer)}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
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
              marginBottom: isImgOrText(qnaPair.answer)
                ? "-0.35rem"
                : "-0.3rem",
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
          // strokeLinecap="round"
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
          y2="110"
          transform="translate(125.357 5.761)"
          fill="none"
          stroke="#c6aa96"
          // strokeLinecap="round"
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
        !props.test &&
        router.push(
          `${productionURL}client/languages?testid=${store.get("theTest").id}`
        )
      }
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group_28" data-name="Group 28" transform="translate(-1194 -73)">
        <circle
          id="Ellipse_8"
          data-name="Ellipse 8"
          cx="16.5"
          cy="16.5"
          r="16.5"
          transform="translate(1194 73)"
          fill="#c6aa96"
        />
        <path
          id="Icon_ionic-ios-close"
          data-name="Icon ionic-ios-close"
          d="M23.921,21.5l7.3-7.3A1.71,1.71,0,0,0,28.8,11.786l-7.3,7.3-7.3-7.3A1.71,1.71,0,1,0,11.788,14.2l7.3,7.3-7.3,7.3a1.71,1.71,0,1,0,2.418,2.418l7.3-7.3,7.3,7.3A1.71,1.71,0,1,0,31.218,28.8Z"
          transform="translate(1188.715 67.711)"
          fill="#1b212e"
        />
      </g>
      {/* <circle cx="28" cy="28" r="28" fill="#2F4858" />
      <path
        d="M38.5626 36.4501L30.1126 28L38.5628 19.5498C39.1458 18.9669 39.1458 18.0203 38.5626 17.4372C37.9797 16.8543 37.0332 16.8543 36.4502 17.4372L28 25.8874L19.5498 17.4372C18.9668 16.8543 18.0203 16.8543 17.4374 17.4372C16.8542 18.0203 16.8542 18.9669 17.4372 19.5498L25.8874 28L17.4374 36.4501C16.8542 37.0332 16.8542 37.9797 17.4372 38.5627C18.0203 39.1458 18.9668 39.1458 19.55 38.5627L28 30.1126L36.45 38.5627C37.0332 39.1458 37.9797 39.1458 38.5628 38.5627C39.1458 37.9797 39.1458 37.0332 38.5626 36.4501Z"
        fill="white" */}
      {/* /> */}
    </svg>
  );

  function checkWhetherIsPreview() {
    if (props.test) {
      const PreviewStyle: React.CSSProperties = {
        width: "100%",
        height: "100%",
      };
      return PreviewStyle;
    }
    return {};
  }

  return (
    <DndProvider backend={TouchBackend}>
      {/* <AnimatePresence> */}
      {props.test && (
        <>
          <button
            style={{
              position: "absolute",
              top: "46%",
              right: "3%",
              border: "none",
              background: "none",
            }}
            onClick={() => {
              console.log("123");
              dispatch({ type: "increment" });
            }}
          >
            {Arrow("60", "84")}
          </button>
          <button
            style={{
              position: "absolute",
              top: "46%",
              left: "3%",
              transform: "rotate(180deg)",
              background: "none",
              border: "none",
            }}
            onClick={() => dispatch({ type: "decrement" })}
          >
            {Arrow("60", "84")}
          </button>
        </>
      )}

      <AnimatePresence exitBeforeEnter>
        <motion.div
          key="animatedPage"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 500 }}
          className={styles.pageContainer}
          style={checkWhetherIsPreview()}
        >
          {!props.test && (
            <img
              src="https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png"
              alt="Fashion Museum"
              id={styles.MMlogo}
            />
          )}
          <motion.div key="testContainerAnima" className={styles.testContainer}>
            {pages?.length - 1 != page.count /* 578G */ && (
              <button
                style={{
                  opacity: "70%",
                  position: "absolute",
                  right: "2%",
                  top: "5%",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  border: "none",
                }}
              >
                {ExitBtn("45")}
              </button>
            )}

            {pages !== undefined && page.count !== pages?.length - 1 && (
              <TestProgressBar
                // activePage={!props.fromPreview ? page.count - 1 : page.count}
                activePage={
                  /* props.fromPreview == undefined ? page.count - 1 : */ page.count
                }
                numberOfPages={
                  props.fromPreview == undefined
                    ? pages.length - 1
                    : pages.length
                }
                // numberOfPages={
                //   !props.fromPreview ? pages?.length - 1 : page.count
                // }
                // numberOfPages={10}
              />
            )}
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: `${props.test && "none"}` as "none",
              }}
            >
              {pages !== undefined && pages![page.count]}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </DndProvider>
  );
}
export default Test;
