import React, { useEffect, useRef, useState } from "react";
import { IQnA, TLangOption } from "../@types/test";
import compStyles from "./styles/TestPreview.module.scss";
import addCompStyles from "./styles/TestNamer.module.scss";
import { closeBtn, CreateLangSwitchers, SaveBtn } from "./TestNamer";
import { URLCheck, URLCheckForLocalHost } from "./constants";
import { resolve } from "path";
import { sendTheDataToTheServer } from "./PhotoManager";

const QACard = (props: {
  cardType: "answer" | "question";
  cardContents: "img" | "text";
  // saveData: (data) => void;
  iterator: number;
  setSelectedLanguage: (chooseLanguage: TLangOption["value"]) => void;
  inputEnabler: () => void;
  qna: IQnA;
  testType: any;
  q_a_TextEntry: (type: "answer" | "question", id: number) => JSX.Element;
  togglePhotoManager: (toggle: boolean, cardID: string) => void;
  setCurrentCard: React.Dispatch<React.SetStateAction<undefined>>;
  pageContents: string;
  currentLang: TLangOption["value"];
  pageNumber: number;
  saveIMG: (
    qid: number,
    data: string,
    whatToSave: "answer" | "question"
  ) => void;
}) => {
  const charLimit = 90;
  const [isOpen, setIsOpen] = useState(false);
  // console.log(props.cardContents);
  // console.log("Test for page contents", props.pageContents);

  const textPreviewer = (text: string) => {
    // console.log("Hello from text preview");
    if (text.match(URLCheckForLocalHost) !== null) {
      console.log("Hello there from URL checker");
      return "There was an image before";
    }
    if (text.length < 1) return <div className={compStyles.emptyText}>T</div>;
    if (text.length > charLimit) {
      return text.slice(0, 65) + "...";
    } else {
      return text;
    }
  };

  const QACardRefIMG = useRef(null);

  // useEffect(() => {
  //   console.log("Yayyy");
  // }, [QACardRef.current]);

  const handleCardReference = () => {
    props.setCurrentCard(QACardRefIMG);
    // props.togglePhotoManager(false, `${props.cardType}_${props.iterator}`);
  };

  //! Image upload portion

  // const [recievedIMGLocations, setRecievedIMGLocation] = useState<
  //   Array<string>
  // >([]);
  const [readIMG, setReadIMG] = useState<string>();
  const fileInputRef = useRef(null);

  const readAnImage = async (imageToBeRead: Blob) => {
    const tmpFileReader: FileReader = new FileReader();

    return new Promise((resolve, reject) => {
      tmpFileReader.onerror = () => {
        tmpFileReader.abort();
        reject(new DOMException("Problem occured when reading the file."));
      };

      tmpFileReader.onload = () => {
        resolve(tmpFileReader.result);
      };
      tmpFileReader.readAsDataURL(imageToBeRead);
    });
  };

  const handleFileinput = async (event: React.FormEvent<HTMLFormElement>) => {
    let tmp = [];
    event.preventDefault();
    console.log(fileInputRef.current.files[0]);
    if (fileInputRef.current?.files !== null) {
      const chosenFile: File = fileInputRef!.current!.files[0];
      console.log(chosenFile);
      if (fileInputRef.current) {
        try {
          const fileContents: string = (await readAnImage(
            chosenFile
          )) as string;
          setReadIMG(fileContents);
          // console.log(fileContents);
          // tmp.push(fileContents);
          props.saveIMG(props.iterator, fileContents, props.cardType);
          // console.log(QACardRefIMG.current.src, "OI");
        } catch (error) {
          alert(
            "There was an error reading the file. Please try again, or choose a differenet file"
          );
        }
      }
    } else {
      alert("No file has been chosen.");
    }
    // sendTheDataToTheServer(tmp, setRecievedIMGLocation);

    // tmp.pop();
    // setRecievedIMGLocation([]);
  };

  useEffect(() => {
    console.log("Input has ", fileInputRef.current?.files);
  }, [fileInputRef.current]);

  return (
    <div className={`${compStyles[props.cardType]}`}>
      <div
        // ref={QACardRef}
        id={`${props.cardType}_${props.iterator}`}
        className={`${addCompStyles.ModalContainerBG} ${
          !isOpen ? addCompStyles.Hidden : null
        }`}
      >
        <div className={addCompStyles.ModalContainer}>
          {closeBtn(setIsOpen)}
          <div className={addCompStyles.Modal}>
            {/* {CreateLangSwitchers(
              props.setSelectedLanguage,
              props.inputEnabler,
              props.currentLang
            )} */}
            <div className={addCompStyles.NameForm}>
              {props.cardContents === "text" &&
                props.q_a_TextEntry(props.cardType, props.iterator)}
            </div>
            <button
              onClick={(e) => setIsOpen(!isOpen)}
              className={addCompStyles.SaveBtn}
            >
              {SaveBtn()}
            </button>
          </div>
        </div>
      </div>
      <div
        className={compStyles.QADescription}
        onClick={(e) => {
          props.cardContents === "img"
            ? handleCardReference()
            : setIsOpen(true);
        }}
      >
        {props.cardContents === "text" ? (
          <p className={compStyles.textInACard}>
            {textPreviewer(props.qna[props.cardType])}
          </p>
        ) : (
          <form onSubmit={handleFileinput} className={compStyles.IMGForm}>
            <img
              id={`${props.cardType}_${props.iterator}_page-${props.pageNumber}`}
              // onChange={(e) => console.log("YAyyy")}
              className={compStyles.SelectedIMGPreview}
              src={props.pageContents}
              // src={props.pageContents.match(URLCheck) ? props.pageContents : ""}
              alt="No image"
              ref={QACardRefIMG}
              onClick={(e) => fileInputRef.current.click()}
            />
            <input
              className={compStyles.FileChooser}
              type="file"
              accept="image/*"
              ref={fileInputRef}
            />
            <input
              className={compStyles.FileSubmiter}
              type="submit"
              value="Upload the image"
            />
          </form>
        )}
      </div>
    </div>
  );
};
export default QACard;
