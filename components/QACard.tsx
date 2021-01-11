import React, { useEffect, useRef, useState } from "react";
import { IQnA, TLangOption } from "../@types/test";
import compStyles from "./styles/TestPreview.module.scss";
import addCompStyles from "./styles/TestNamer.module.scss";
import { closeBtn, CreateLangSwitchers, SaveBtn } from "./TestNamer";
import { URLCheck, URLCheckForLocalHost } from "./constants";
import { resolve } from "path";
import { sendTheDataToTheServer } from "./PhotoManager";
import Axios from "axios";

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

  const sendTheDataToTheServerToParse = async (
    file: string,
    fileName: string
  ) => {
    let fileLocation: string = "";
    try {
      console.log("Sending", file);
      const locationOfTheFile = await Axios.post(
        "http://localhost:4000/imgSaving",
        { fileName, fileContents: file }
      );
      console.log(locationOfTheFile);
      fileLocation = locationOfTheFile.data;
    } catch (error) {
      console.error(error);
      alert(error);
    }
    return fileLocation;
  };

  const handleFileinput = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
          const fileLocationOnServer = await sendTheDataToTheServerToParse(
            fileContents,
            chosenFile.name
          );
          if (fileLocationOnServer.length > 0) {
            props.saveIMG(props.iterator, fileLocationOnServer, props.cardType);
          } else {
            props.saveIMG(props.iterator, fileContents, props.cardType);
          }
          console.log(QACardRefIMG.current.src, "OI");
        } catch (error) {
          alert(
            "There was an error reading the file. Please try again, or choose a differenet file"
          );
          console.error(error);
        }
      }
    } else {
      alert("No file has been chosen.");
    }

    // const resp = await sendTheDataToTheServerToParse(
    //   fileInputRef.current.files[0],
    //   fileInputRef.current.files[0].name
    // );
    // console.log(resp);
  };

  const [imgLocation, setimgLocation] = useState("");

  function handleFileinputChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.files[0]);
    let fd = new FormData();
    fd.append("image", event.target.files[0]);
    console.log(fd.getAll("image"));
    Axios.post("http://localhost:4000/testimg", fd, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log(res);
        setimgLocation(res.data);
        props.saveIMG(props.iterator, res.data, props.cardType, "all");
      })
      .catch((err) => console.error(err));
  }

  // useEffect(() => {
  //   console.log("Input has ", fileInputRef.current?.files);
  // }, [fileInputRef.current]);

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
              // src={/* imgLocation || */ props.pageContents}
              src={
                props.pageContents.match(URLCheckForLocalHost) !== null
                  ? props.pageContents
                  : ""
              }
              alt="
              Width: 235px 
              Height: 245px
              Aspect ratio is 47:49

              Click to select an image
              "
              ref={QACardRefIMG}
              onClick={(e) => fileInputRef.current.click()}
            />
            <input
              className={compStyles.FileChooser}
              style={{ display: "none" }}
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileinputChange}
            />
            {/* <input
              className={compStyles.FileSubmiter}
              type="submit"
              value="Upload the image"
            /> */}
          </form>
        )}
      </div>
    </div>
  );
};
export default QACard;
