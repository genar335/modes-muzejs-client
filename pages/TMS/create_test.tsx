import React, { useEffect, useRef, useState } from "react";
// import io from "socket.io-client";
import Select, {
  components,
  // ControlProps,
  Props,
  StylesConfig,
} from "react-select";
import { IQnA, ITest, TLangOption, TTestTypes } from "../../@types/test";
import FMLogo from "../../components/FMlogo";
import PagesController from "../../components/PagesController";
// import PhotoManager from "../../components/PhotoManager";
import TestNamer from "../../components/TestNamer";
import TestPreview from "../../components/TestPreview";
import styles from "../styles/create_test.module.scss";
import { APIURL, devURL } from "../../components/constants";
import { AnimatePresence, motion } from "framer-motion";
import Switch, { ReactSwitchProps } from "react-switch";
import Axios, { AxiosResponse } from "axios";
import { NextRouter, useRouter } from "next/router";
import PleaseWaitModal from "../../components/PleaseWaitModal";
import store from "store";
// import ReactSwitch from "react-switch";
import chroma from "chroma-js";
import FinalPageEditor from "../../components/FinalPageEditor";
import TestPreviewer from "../../components/TestPreviewer";
import { parseTestTypeValueToLabel } from "../../components/TestCard";

function create_test() {
  // useEffect(() => {
  //   console.log("pages have changed");
  //   socket.emit("Pages update", String(test.pages));
  //   if (test.pages >= 2) {
  //   }
  // }, [test.pages]);

  // useEffect(() => {
  //   socket.emit("Test changed", test);
  // }, [test]);
  // useEffect(() => {
  //   const socket = io(APIURL, {
  //     reconnectionDelayMax: 10000,
  //     query: "123",
  //   });
  // });
  // const [currentPages, setCurrentPages] = useState<number>(1);
  // let tmpPages: number = 0;
  const router: NextRouter = useRouter();
  // console.log(router.qduery);

  const [isTestFetched, setIsTestFetched] = useState<boolean>(true);
  const [isTestFetching, setIsTestFetching] = useState<boolean>();

  useEffect(() => {
    if (store.get("testInProgress") !== undefined) {
      console.log(store.get("testInProgress"), "hello");
      setTest(store.get("testInProgress"));
    } else {
      console.log(isTestFetching, "isTestFetching");
      console.log(isTestFetching, "isTestFetching");
      if (router.query.testToEdit !== undefined) {
        setIsTestFetching(true);
        Axios.get(
          `http://localhost:4000/tests/getTestByID?testToEdit=${router.query.testToEdit}`
        ).then((response: AxiosResponse) => {
          console.log(response.data);
          setIsTestFetching(false);
          setTest(response.data);
        });
      }
    }
  }, []);

  useEffect(() => {}, [router.query]);

  const [currentCard, setCurrentCard] = useState<
    React.MutableRefObject<null>
  >();
  const saveCurrentCard = (
    card: React.SetStateAction<React.MutableRefObject<null> | undefined>
  ) => setCurrentCard(card);

  const qnaEmptyArray = (): IQnA => {
    return {
      question: "",
      answer: "",
    };
  };
  const qnaEmptyNArray = (pairs: number): IQnA[] => {
    let tmpArray = [];
    for (let i = 0; i < pairs; i++) {
      tmpArray.push(qnaEmptyArray());
    }
    return tmpArray;
  };
  const currentNumberOfPairsForQnAPairs = 3;
  const [activePage, setActivePage] = useState<number>(0);
  const activateAPage = (index: number) => setActivePage(index);
  const [pagesRendered, setPagesRendered] = useState<boolean>();
  const testTemplateWithThreeCards: ITest = {
    pages: 1,
    en: {
      name: "",
      pages: [
        {
          QnAPairs: qnaEmptyNArray(currentNumberOfPairsForQnAPairs),
        },
      ],
      finalPageTextHeading: "",
      finalPageTextBody: "",
    },
    lv: {
      name: "",
      pages: [
        {
          QnAPairs: qnaEmptyNArray(currentNumberOfPairsForQnAPairs),
        },
      ],
      finalPageTextHeading: "",
      finalPageTextBody: "",
    },
    ru: {
      name: "",
      pages: [
        {
          QnAPairs: qnaEmptyNArray(currentNumberOfPairsForQnAPairs),
        },
      ],
      finalPageTextHeading: "",
      finalPageTextBody: "",
    },
    emailSender: false,
    type: "",
    active: false,
  };
  const [test, setTest] = useState<ITest>(testTemplateWithThreeCards);
  const setEmail = (bool: boolean): void =>
    setTest({
      ...test,
      emailSender: bool,
    });
  useEffect(() => {
    console.log("Test has changed");
    store.set("testInProgress", test);
  }, [test]);
  const [isPhotoManagerOpen, setIsPhotoManagerOpen] = useState<boolean>(true);
  const openPhotos = (toggle: boolean, cardID: string) => {
    setIsPhotoManagerOpen(toggle);
    console.log(cardID, "cards ID");
  };

  const saveTest = (test: ITest): void => setTest(test);
  const [currentLang, setCurrentLang] = useState<TLangOption["value"]>("ru");
  const activateCurrentLang = (lang: TLangOption["value"]) => {
    // setCurrentLang(lang);
    setActiveLangForSwitches(lang);
  };

  type TTypeOptions = {
    value: "TT" | "TP" | "PP" | "PT";
    label:
      | "Text – Text"
      | "Text – Photo"
      | "Photo – Photo"
      | "Текст – Текст"
      | "Текст – Фото"
      | "Фото – Фото"
      | "Фото – Текст"
      | "Teksts – Teksts"
      | "Teksts – Foto"
      | "Foto – Foto"
      | "Foto – Teksts";
  };
  const typeOptions: Array<TTypeOptions> = [
    { value: "TT", label: "Текст – Текст" },
    { value: "TP", label: "Текст – Фото" },
    { value: "PP", label: "Фото – Фото" },
    { value: "PT", label: "Фото – Текст" },
  ];

  const [testType, setTestType] = useState<TTestTypes>();
  const handleTypeChange = (chosenType: TTestTypes): void => {
    setTestType(chosenType);
    setTest({
      ...test,
      type: chosenType,
    });
  };

  function savePage(page: any, lang: "ru" | "lv" | "en" | "undefined") {
    console.log(page);
    if (lang !== undefined) {
      let tmp = test[lang as "ru" | "lv" | "en"].pages;
      tmp[activePage].QnAPairs = page;
      console.log(tmp);
      setTest({
        ...test,
        [lang]: {
          ...test[lang as "ru" | "lv" | "en"],
          pages: tmp,
        },
      });
    }
  }

  const maxPageLimit: number = 10;
  const handleNumberInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.currentTarget.value);
    if (
      Number(event.currentTarget.value) >= 2 &&
      event.currentTarget.value != undefined &&
      Number(event.currentTarget.value) <= maxPageLimit
    ) {
      if (Number(event.currentTarget.value) > test.pages) {
        console.log("test");
        let tmpArray = [];
        for (
          let i = 0;
          i < Number(event.currentTarget.value) - test.pages;
          i++
        ) {
          tmpArray.push({
            QnAPairs: qnaEmptyNArray(currentNumberOfPairsForQnAPairs),
          });
        }
        console.log(...tmpArray);
        setTest({
          ...test,
          en: {
            ...test.en,
            pages: [...test.en.pages, ...tmpArray],
          },
          ru: {
            ...test.ru,
            pages: [...test.ru.pages, ...tmpArray],
          },
          lv: {
            ...test.lv,
            pages: [...test.lv.pages, ...tmpArray],
          },
          pages: Number(event.currentTarget.value),
        });
      } else {
        setTest({
          ...test,
          en: {
            ...test.en,
            pages: test.en.pages.slice(
              0,
              test.pages - (test.pages - Number(event.currentTarget.value))
            ),
          },
          ru: {
            ...test.ru,
            pages: test.ru.pages.slice(
              0,
              test.pages - (test.pages - Number(event.currentTarget.value))
            ),
          },
          lv: {
            ...test.lv,
            pages: test.lv.pages.slice(
              0,
              test.pages - (test.pages - Number(event.currentTarget.value))
            ),
          },
          pages: Number(event.currentTarget.value),
        });
      }
      // event.currentTarget.value = String(test.pages);
    }
    console.log(test);
  };

  const removePage = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    setTimeout(() => {
      if (test.pages !== 1) {
        setTest({
          ...test,
          en: {
            ...test.en,
            pages: test.en.pages.slice(0, test.pages - 1),
          },
          ru: {
            ...test.ru,
            pages: test.ru.pages.slice(0, test.pages - 1),
          },
          lv: {
            ...test.lv,
            pages: test.lv.pages.slice(0, test.pages - 1),
          },
          pages: test.pages - 1,
        });
      }
    }, 550);
  };

  const addPage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    if (test.pages < maxPageLimit) {
      setTest({
        ...test,
        en: {
          ...test.en,
          pages: [
            ...test.en.pages,
            { QnAPairs: qnaEmptyNArray(currentNumberOfPairsForQnAPairs) },
          ],
        },
        ru: {
          ...test.ru,
          pages: [
            ...test.ru.pages,
            { QnAPairs: qnaEmptyNArray(currentNumberOfPairsForQnAPairs) },
          ],
        },
        lv: {
          ...test.lv,
          pages: [
            ...test.lv.pages,
            { QnAPairs: qnaEmptyNArray(currentNumberOfPairsForQnAPairs) },
          ],
        },
        pages: test.pages + 1,
      });
    }
  };

  useEffect(() => {
    if (didMountRef.current) {
      setPagesRendered(false);
    } else {
      setPagesRendered(true);
    }
  });

  const didMountRef = useRef();

  const areTheNamesFilledIn = (t: ITest) => {
    let hasPassed: boolean = true;
    for (let [key, value] of Object.entries(t)) {
      console.log(key, value);
      if (testLang.includes(key as TLangOption["value"])) {
        if (value.name.length === 0) {
          hasPassed = false;
          // return;
        }
      }
    }
    console.log(hasPassed, "hasPassed");
    return hasPassed;
  };

  const areAllPagesFilledIn = (t: ITest) => {
    let hasPassed: boolean = true;
    for (let [key, value] of Object.entries(t)) {
      if (testLang.includes(key as TLangOption["value"])) {
        console.log(t[key as TLangOption["value"]].pages);
        t[key as TLangOption["value"]].pages.forEach(
          (page: {
            QnAPairs: { question: string | any[]; answer: string | any[] }[];
          }) => {
            page.QnAPairs.forEach(
              (qnaPair: {
                question: string | any[];
                answer: string | any[];
              }) => {
                console.log(qnaPair);
                if (
                  qnaPair.question.length === 0 ||
                  qnaPair.answer.length === 0
                ) {
                  console.log("Wrong!");
                  hasPassed = false;
                }
              }
            );
          }
        );
      }
    }
    return hasPassed;
  };

  /**
   * Checks whether the test satisfies the requirements
   * @param testToCheck Test to chek agaisnt a range of reuiremenets
   */
  const checkTheTest = (testToCheck: ITest): boolean => {
    if (!areTheNamesFilledIn(testToCheck)) {
      alert("Names are not field in");
      return false;
    }
    if (!areAllPagesFilledIn(testToCheck)) {
      alert("Not every field is filled in");
      return false;
    }

    return true;
  };

  const handleTestSaving = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsTestFetching(true);
    store.remove("testInProgress");

    if (checkTheTest(test)) {
      try {
        const response = await Axios.post(
          "http://localhost:4000/tests/create",
          test
        );
        console.log(response.data);
        //! Need to notify user somehow
        //? Perhaps a modal with confirmation, or a card preview?
        // setTimeout(() => {
        // router.replace("http://localhost:3000/TMS/main");
        // }, 1000);
        router.replace("http://localhost:3000/TMS/main");
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Please check if everythig has been entered correctly.");
    }
    setIsTestFetching(false);
  };

  const [langSwitchesStates, setLangSwitchesState] = useState({
    ru: true,
    lv: false,
    en: false,
  });

  const testLang: TLangOption["value"][] = ["ru", "lv", "en"];
  const handleLangSwitchChange = (
    checked: boolean,
    event: MouseEvent | React.SyntheticEvent<MouseEvent | KeyboardEvent, Event>,
    id: string
  ) => {
    console.log(checked, "checked");
    console.log(event, "event");
    console.log(id);
    setCurrentLang(id as TLangOption["value"]);

    // testLang.forEach((lang: TLangOption["value"]) => {
    //   setLangSwitchesState({
    //     ...langSwitchesStates,
    //     [lang]: !langSwitchesStates[lang],
    //   });
    // });

    // let tmp = langSwitchesStates;
    // for (let key in tmp) {
    //   if (key === id) {
    //     tmp[key] = checked;
    //   } else {
    //     tmp[key] = false;
    //   }
    // }

    // setLangSwitchesState(tmp);
  };

  const renderLangSwitcher = (
    languagesToHaveSwitches: TLangOption["value"][]
  ) =>
    languagesToHaveSwitches.map((lang: TLangOption["value"]) => (
      <div className={styles.singleLangSwitcher}>
        <p>{lang.toLocaleUpperCase()}</p>
        <Switch
          id={lang}
          onChange={handleLangSwitchChange}
          checked={langSwitchesStates[lang]}
        />
      </div>
    ));

  const convertType = () => {
    if (isTestFetched && test.type !== undefined) {
      const correctType = typeOptions.find(
        (option: TTypeOptions) => option.value == test.type
      );
      console.log(correctType, "123");
      return correctType || typeOptions[0];
    }
  };

  const handleExitFromTheTest = () => {
    store.remove("testInProgress");
    router.replace("http://localhost:3000/TMS/main");
  };

  const PageCounter = (
    <div className={styles.AddPageCont}>
      <p className={styles.CounterHeader} style={{ margin: 0 }}>
        Страницы
      </p>
      <div className={styles.PageControllerBtnsContainer}>
        <button
          disabled={test.type === ""}
          className={styles.ChangePagesBtn}
          onClick={removePage}
        >
          {removePageIcon()}
        </button>
        {/* <input
          // disabled={pagesRendered}
          type="number"
          name="pagesNumber"
          className={styles.pagesNumberIndicator}
          placeholder={test.pages ? test.pages.toString() : "1"}
          // value={currentPages}
          onChange={handleNumberInputChange}
        /> */}
        <h1>{test.pages && test.pages.toString()}</h1>
        <button
          disabled={test.type === ""}
          className={styles.ChangePagesBtn}
          onClick={addPage}
        >
          {addPageIcon()}
        </button>
      </div>
    </div>
  );

  const customChevron = () => (
    <svg
      width="24"
      height="14"
      viewBox="0 0 24 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2L12 12L22 2"
        stroke="#2F4858"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  const DropdownIndicator = (props: typeof DropdownIndicator) => {
    return (
      <components.DropdownIndicator {...props}>
        {customChevron()}
      </components.DropdownIndicator>
    );
  };

  const testTypeSelectStyles: StylesConfig = {
    container: (provided, state) => ({
      ...provided,
      width: "100%",
      height: "100%",
      background: "#EFDDD1",
      borderRadius: "16px",
      fontSize: "20px",
      // display: "flex",
      // justifyContent: "space-between",
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      paddingLeft: "1rem",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: "rgb(47	71	88	)",
      marginLeft: "-.1rem",
    }),
    indicatorSeparator: (provided, state) => ({
      display: "none",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      marginRight: "0.9rem",
      color: "#2F4858",
    }),
    option: (provided, state: Props<Record<string, unknown>>) => ({
      ...provided,
      // borderBottom: "1px dotted pink",
      background: state.isFocused ? "#EFDDD1" : chroma("EFDDD1").darken().hex(),
      borderRadius: "16px",
      // width: "80%",
      color: state.isSelected ? "#2F4858" : chroma("2F4858").luminance(0.5),
      padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: "100%",
      height: "100%",
      display: "flex",
    }),
    // singleValue: (provided, state) => {
    //   const opacity = state.isDisabled ? 0.5 : 1;
    //   const transition = "opacity 300ms";

    //   return { ...provided, opacity, transition };
    // },
    menu: (provided, state) => ({
      ...provided,
      fontSize: "20px",
      background: "#EFDDD1",
      borderRadius: "16px",
    }),
  };

  const [isFinalPageOpen, setisFinalPageOpen] = useState<boolean>(false);
  const openModal = (bool: boolean) => setisFinalPageOpen(bool);

  const [isTestPreviewerOpen, setisTestPreviewerOpen] = useState<boolean>(
    false
  );

  return (
    <AnimatePresence>
      {/* {isVisible && ( */}
      <motion.div
        className={styles.CreateTestContainer}
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <PleaseWaitModal isDisplayed={isTestFetching!} />
        <FMLogo />
        <TestNamer
          currentLang={currentLang}
          setCurrentLang={activateCurrentLang}
          saveTest={saveTest}
          currentStateOfTest={test}
        />
        <div className={styles.LangSwitcher}>
          {/* <p className={styles.LangSwitcherHeader}>Языки</p> */}
          {/* {renderLangSwitcher(testLang)} */}
          <div className={styles.LangSwitches}>
            <div className={styles.LScontainer}>
              <input
                disabled={test.type === ""}
                type="radio"
                name="whichLang"
                id="ru"
                defaultChecked={true}
                // checked={langSwitchesStates["ru"]}
                onClick={(e) =>
                  setCurrentLang(e.currentTarget.id as TLangOption["value"])
                }
              />
              <p id={styles.lsSwitchLabelRU} className={styles.LSswitchLabel}>
                RUS
              </p>
            </div>
            <div className={styles.LScontainer}>
              <input
                disabled={test.type === ""}
                onClick={(e) =>
                  setCurrentLang(e.currentTarget.id as TLangOption["value"])
                }
                type="radio"
                name="whichLang"
                id="en"
              />
              <p id={styles.lsSwitchLabelEN} className={styles.LSswitchLabel}>
                ENG
              </p>
            </div>
            <div className={styles.LScontainer}>
              <input
                disabled={test.type === ""}
                // checked={langSwitchesStates["lv"]}
                onChange={(e) =>
                  setCurrentLang(e.currentTarget.id as TLangOption["value"])
                }
                type="radio"
                name="whichLang"
                id="lv"
              />
              <p id={styles.lsSwitchLabelLV} className={styles.LSswitchLabel}>
                LAT
              </p>
            </div>
          </div>
        </div>
        <FinalPageEditor
          testLang={testLang}
          emailState={test.emailSender}
          toggleEmail={setEmail}
          saveTest={saveTest}
          test={test}
        />
        <div className={styles.TestType}>
          <Select
            placeholder={parseTestTypeValueToLabel(test.type) || "Выберите тип теста..."}
            options={typeOptions}
            className={styles.TestTypeSelect}
            // defaultValue={convertType()}
            components={{ DropdownIndicator }}
            isDisabled={isTestFetching}
            onChange={(selected: any): void => {
              setTest({
                // ...testTemplateWithThreeCards,
                ...test,
                type: selected.value,
              });
            }}
            styles={testTypeSelectStyles}
          />
        </div>
        {PageCounter}
        <div className={styles.PageController}>
          <PagesController
            activePage={activePage}
            setActivePage={activateAPage}
            currentPages={test.pages}
          />
        </div>
        <TestPreview
          togglePhotoManager={openPhotos}
          activePage={activePage}
          currentLanguage={currentLang}
          setCurrentLang={activateCurrentLang}
          // currentTestState={test}
          pageToRender={test[currentLang].pages[activePage].QnAPairs}
          fullTest={test}
          testType={test.type}
          saveChanges={savePage}
          setCurrentCard={saveCurrentCard}
        />
        <TestPreviewer
          isOpen={isTestPreviewerOpen}
          setIsOpen={setisTestPreviewerOpen}
          test={test}
          activeLanguage={currentLang}
        />
        <button
          onClick={() => setisTestPreviewerOpen(true)}
          disabled={test.type === ""}
          className={styles.PreviewerBtn}
        >
          {PreviewBtn()}
        </button>
        <button
          className={styles.SaveTestBtn}
          disabled={test.type === ""}
          onClick={handleTestSaving}
        >
          {TestSaveButton()}
        </button>
        <button onClick={handleExitFromTheTest} className={styles.ExitBtn}>
          {ExitSVGRU()}
        </button>
      </motion.div>
      {/* )} */}
    </AnimatePresence>
  );

  function setActiveLangForSwitches(id: TLangOption["value"]) {
    const tmp = langSwitchesStates;
    for (const key in tmp) {
      if (key === id) {
        console.log("Match", id);
        tmp[key as TLangOption["value"]] = true;
      } else {
        tmp[key as TLangOption["value"]] = false;
      }
    }
    setLangSwitchesState(tmp);
    setCurrentLang(id);
  }
}

export default create_test;
export const pageAppearance = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
function TestSaveButton() {
  return (
    <svg
      width="200"
      height="59"
      viewBox="0 0 200 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="200" height="59" rx="29.5" fill="#2F4858" />
      <path
        d="M43.2257 38.192C41.5457 38.192 40.0257 37.824 38.6657 37.088C37.3217 36.336 36.2657 35.312 35.4977 34.016C34.7297 32.704 34.3457 31.232 34.3457 29.6C34.3457 27.968 34.7297 26.504 35.4977 25.208C36.2657 23.896 37.3297 22.872 38.6897 22.136C40.0497 21.384 41.5697 21.008 43.2497 21.008C44.5617 21.008 45.7617 21.232 46.8497 21.68C47.9377 22.112 48.8657 22.76 49.6337 23.624L48.0737 25.136C46.8097 23.808 45.2337 23.144 43.3457 23.144C42.0977 23.144 40.9697 23.424 39.9617 23.984C38.9537 24.544 38.1617 25.32 37.5857 26.312C37.0257 27.288 36.7457 28.384 36.7457 29.6C36.7457 30.816 37.0257 31.92 37.5857 32.912C38.1617 33.888 38.9537 34.656 39.9617 35.216C40.9697 35.776 42.0977 36.056 43.3457 36.056C45.2177 36.056 46.7937 35.384 48.0737 34.04L49.6337 35.552C48.8657 36.416 47.9297 37.072 46.8257 37.52C45.7377 37.968 44.5377 38.192 43.2257 38.192ZM57.4652 38.144C56.2012 38.144 55.0652 37.864 54.0572 37.304C53.0492 36.744 52.2572 35.976 51.6812 35C51.1212 34.008 50.8412 32.888 50.8412 31.64C50.8412 30.392 51.1212 29.28 51.6812 28.304C52.2572 27.312 53.0492 26.544 54.0572 26C55.0652 25.44 56.2012 25.16 57.4652 25.16C58.7292 25.16 59.8572 25.44 60.8492 26C61.8572 26.544 62.6412 27.312 63.2012 28.304C63.7772 29.28 64.0652 30.392 64.0652 31.64C64.0652 32.888 63.7772 34.008 63.2012 35C62.6412 35.976 61.8572 36.744 60.8492 37.304C59.8572 37.864 58.7292 38.144 57.4652 38.144ZM57.4652 36.128C58.2812 36.128 59.0092 35.944 59.6492 35.576C60.3052 35.192 60.8172 34.664 61.1852 33.992C61.5532 33.304 61.7372 32.52 61.7372 31.64C61.7372 30.76 61.5532 29.984 61.1852 29.312C60.8172 28.624 60.3052 28.096 59.6492 27.728C59.0092 27.36 58.2812 27.176 57.4652 27.176C56.6492 27.176 55.9132 27.36 55.2572 27.728C54.6172 28.096 54.1052 28.624 53.7212 29.312C53.3532 29.984 53.1692 30.76 53.1692 31.64C53.1692 32.52 53.3532 33.304 53.7212 33.992C54.1052 34.664 54.6172 35.192 55.2572 35.576C55.9132 35.944 56.6492 36.128 57.4652 36.128ZM74.9143 38L71.2423 33.128L67.5223 38H64.9543L69.9703 31.496L65.1943 25.28H67.7623L71.2663 29.864L74.7463 25.28H77.2663L72.4663 31.496L77.5303 38H74.9143ZM86.6987 25.16C87.9307 25.16 89.0347 25.432 90.0107 25.976C90.9867 26.52 91.7467 27.28 92.2907 28.256C92.8507 29.232 93.1307 30.36 93.1307 31.64C93.1307 32.92 92.8507 34.056 92.2907 35.048C91.7467 36.024 90.9867 36.784 90.0107 37.328C89.0347 37.872 87.9307 38.144 86.6987 38.144C85.7867 38.144 84.9467 37.968 84.1787 37.616C83.4267 37.264 82.7867 36.752 82.2587 36.08V42.656H79.9547V25.28H82.1627V27.296C82.6747 26.592 83.3227 26.064 84.1067 25.712C84.8907 25.344 85.7547 25.16 86.6987 25.16ZM86.5067 36.128C87.3227 36.128 88.0507 35.944 88.6907 35.576C89.3467 35.192 89.8587 34.664 90.2267 33.992C90.6107 33.304 90.8027 32.52 90.8027 31.64C90.8027 30.76 90.6107 29.984 90.2267 29.312C89.8587 28.624 89.3467 28.096 88.6907 27.728C88.0507 27.36 87.3227 27.176 86.5067 27.176C85.7067 27.176 84.9787 27.368 84.3227 27.752C83.6827 28.12 83.1707 28.64 82.7867 29.312C82.4187 29.984 82.2347 30.76 82.2347 31.64C82.2347 32.52 82.4187 33.304 82.7867 33.992C83.1547 34.664 83.6667 35.192 84.3227 35.576C84.9787 35.944 85.7067 36.128 86.5067 36.128ZM100.897 25.16C102.657 25.16 104.001 25.592 104.929 26.456C105.873 27.32 106.345 28.608 106.345 30.32V38H104.161V36.32C103.777 36.912 103.225 37.368 102.505 37.688C101.801 37.992 100.961 38.144 99.9849 38.144C98.5609 38.144 97.4169 37.8 96.5529 37.112C95.7049 36.424 95.2809 35.52 95.2809 34.4C95.2809 33.28 95.6889 32.384 96.5049 31.712C97.3209 31.024 98.6169 30.68 100.393 30.68H104.041V30.224C104.041 29.232 103.753 28.472 103.177 27.944C102.601 27.416 101.753 27.152 100.633 27.152C99.8809 27.152 99.1449 27.28 98.4249 27.536C97.7049 27.776 97.0969 28.104 96.6009 28.52L95.6409 26.792C96.2969 26.264 97.0809 25.864 97.9929 25.592C98.9049 25.304 99.8729 25.16 100.897 25.16ZM100.369 36.368C101.249 36.368 102.009 36.176 102.649 35.792C103.289 35.392 103.753 34.832 104.041 34.112V32.336H100.489C98.5369 32.336 97.5609 32.992 97.5609 34.304C97.5609 34.944 97.8089 35.448 98.3049 35.816C98.8009 36.184 99.4889 36.368 100.369 36.368ZM110.494 25.28H112.798V30.68H120.046V25.28H122.35V38H120.046V32.672H112.798V38H110.494V25.28ZM126.83 25.28H129.134V34.544L136.934 25.28H139.022V38H136.718V28.736L128.942 38H126.83V25.28ZM152.974 27.296H148.318V38H146.014V27.296H141.358V25.28H152.974V27.296ZM161.21 29.6C162.826 29.616 164.058 29.984 164.906 30.704C165.754 31.424 166.178 32.44 166.178 33.752C166.178 35.128 165.714 36.192 164.786 36.944C163.874 37.68 162.562 38.04 160.85 38.024L155.33 38V25.28H157.634V29.576L161.21 29.6ZM160.658 36.272C161.698 36.288 162.482 36.08 163.01 35.648C163.554 35.216 163.826 34.576 163.826 33.728C163.826 32.896 163.562 32.288 163.034 31.904C162.522 31.52 161.73 31.32 160.658 31.304L157.634 31.256V36.248L160.658 36.272Z"
        fill="white"
      />
    </svg>
  );
}

function addPageIcon() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 35 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        r="17.3744"
        transform="matrix(1 0 0 -1 17.3744 18)"
        fill="#2F4858"
      />
      <path
        d="M23.5173 18.6826H18.0569V24.1431C18.0569 24.5198 17.7511 24.8257 17.3743 24.8257C16.9976 24.8257 16.6918 24.5198 16.6918 24.1431V18.6826H11.2312C10.8545 18.6826 10.5487 18.3768 10.5487 18.0001C10.5487 17.6233 10.8545 17.3174 11.2312 17.3174H16.6918V11.857C16.6918 11.4802 16.9976 11.1744 17.3743 11.1744C17.7511 11.1744 18.0569 11.4802 18.0569 11.857V17.3174H23.5173C23.8942 17.3174 24.2 17.6233 24.2 18.0001C24.2 18.3768 23.8942 18.6826 23.5173 18.6826Z"
        fill="white"
      />
    </svg>
  );
}

function removePageIcon() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 35 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        r="17.3744"
        transform="matrix(1 0 0 -1 17.3744 18)"
        fill="#2F4858"
      />
      <path
        d="M11.1692 18H23.5794"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}

function PreviewBtn() {
  return (
    <svg
      width="200"
      height="59"
      viewBox="0 0 200 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="200" height="59" rx="29.5" fill="#E0BCA3" />
      <path
        d="M49.5185 21.2V38H51.8945V23.288H61.6385V38H63.9905V21.2H49.5185ZM76.3094 25.16C74.4374 25.16 72.8054 25.88 71.7734 27.296V25.28H69.5654V42.656H71.8694V36.08C72.9254 37.448 74.5094 38.144 76.3094 38.144C80.0294 38.144 82.7414 35.552 82.7414 31.64C82.7414 27.752 80.0294 25.16 76.3094 25.16ZM76.1174 36.128C73.6934 36.128 71.8454 34.352 71.8454 31.64C71.8454 28.952 73.6934 27.176 76.1174 27.176C78.5654 27.176 80.4134 28.952 80.4134 31.64C80.4134 34.352 78.5654 36.128 76.1174 36.128ZM98.3049 31.712C98.3049 27.8 95.6889 25.16 92.0169 25.16C88.3449 25.16 85.6329 27.872 85.6329 31.64C85.6329 35.432 88.3689 38.144 92.4729 38.144C94.5849 38.144 96.3369 37.424 97.4889 36.08L96.2169 34.592C95.2809 35.624 94.0329 36.128 92.5449 36.128C90.0249 36.128 88.2249 34.64 87.9369 32.408H98.2569C98.2809 32.192 98.3049 31.904 98.3049 31.712ZM92.0169 27.104C94.2489 27.104 95.8569 28.616 96.0969 30.752H87.9369C88.1769 28.592 89.8089 27.104 92.0169 27.104ZM111.263 31.4C112.535 30.896 113.303 29.912 113.303 28.544C113.303 26.456 111.503 25.28 108.503 25.28H102.599V38H108.719C112.103 38 113.735 36.704 113.735 34.496C113.735 32.888 112.943 31.832 111.263 31.4ZM104.855 27.056H108.311C110.063 27.056 110.999 27.656 110.999 28.88C110.999 30.104 110.063 30.752 108.311 30.752H104.855V27.056ZM108.551 36.224H104.855V32.408H108.695C110.591 32.408 111.431 33.032 111.431 34.352C111.431 35.648 110.447 36.224 108.551 36.224ZM123.941 29.6L120.365 29.576V25.28H118.061V38L123.581 38.024C126.989 38.048 128.909 36.512 128.909 33.752C128.909 31.136 127.181 29.624 123.941 29.6ZM123.389 36.272L120.365 36.248V31.256L123.389 31.304C125.501 31.328 126.557 32.048 126.557 33.728C126.557 35.432 125.477 36.296 123.389 36.272ZM143.842 25.16C140.506 25.16 137.962 27.296 137.482 30.488H134.89V25.28H132.586V38H134.89V32.624H137.458C137.89 35.888 140.458 38.144 143.842 38.144C147.562 38.144 150.298 35.432 150.298 31.64C150.298 27.824 147.562 25.16 143.842 25.16ZM143.842 36.128C141.466 36.128 139.666 34.376 139.666 31.64C139.666 28.928 141.466 27.176 143.842 27.176C146.194 27.176 148.018 28.928 148.018 31.64C148.018 34.376 146.194 36.128 143.842 36.128Z"
        fill="white"
      />
    </svg>
  );
}

function ExitSVGRU() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="59"
      viewBox="0 0 381 113"
    >
      <g id="Group_1" data-name="Group 1" transform="translate(-3422 -2038)">
        <rect
          id="Rectangle_1"
          data-name="Rectangle 1"
          width="381"
          height="113"
          rx="56.5"
          transform="translate(3422 2038)"
          fill="#2f4857"
        />
        <text
          id="Выйти"
          transform="translate(3538 2110)"
          fill="#fff"
          font-size="43"
          font-family="Montserrat-Medium, Montserrat"
          font-weight="500"
          letter-spacing="0.029em"
        >
          <tspan x="0" y="0">
            Выйти
          </tspan>
        </text>
      </g>
    </svg>
  );
}
