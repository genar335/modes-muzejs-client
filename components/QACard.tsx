import React, { useEffect, useRef, useState } from "react";
import { IQnA, TLangOption } from "../@types/test";
import compStyles from "./styles/TestPreview.module.scss";
import addCompStyles from "./styles/TestNamer.module.scss";
import { closeBtn, CreateLangSwitchers } from "./TestNamer";
import { read } from "fs";
import { readFile } from "fs/promises";

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
}) => {
  const charLimit = 90;
  const [isOpen, setIsOpen] = useState(false);
  console.log(props.cardContents);
  const textPreviewer = (text: string) => {
    if (text.length < 1) return <div className={compStyles.emptyText}>T</div>;
    if (text.length > charLimit) {
      return text.slice(0, 90) + "...";
    } else {
      return text;
    }
  };

  async function readUploadedIMG(inputFile) {
    const tmpFileReader = new FileReader();

    return new Promise((resolve, reject) => {
      tmpFileReader.onerror = () => {
        tmpFileReader.abort();
        reject(new DOMException("Problem parsing input file."));
      };

      tmpFileReader.onload = () => {
        resolve(tmpFileReader.result);
      };
      tmpFileReader.readAsDataURL(inputFile);
    });
  }

  const handleUpload = async (event) => {
    const file = event.target.files[0];

    try {
      const fileContents = await readUploadedIMG(file);
      console.log(fileContents);
    } catch (e) {
      console.warn(e.message);
    }
  };

  const [uploadedImg, setUploadedImg] = useState();
  const [upIMGs, setUpIMGs] = useState<Array<any>>([]);
  async function handleFileInput(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let tmp = [];
    if (fileInput.current !== null) {
      for (
        let fileIndex = 0;
        fileIndex < fileInput.current.files?.length;
        fileIndex++
      ) {
        try {
          const fileContents = await readUploadedIMG(
            fileInput.current.files[fileIndex]
          );
          tmp.push(fileContents);
          // setUploadedImg(fileContents);
        } catch (error) {
          alert(error);
        }
      }
      setUpIMGs(tmp);
    }
  }
  const fileInput = useRef<HTMLInputElement>(null);

  return (
    <div className={`${compStyles[props.cardType]}`}>
      <div
        id={String(props.iterator)}
        className={`${addCompStyles.ModalContainerBG} ${
          !isOpen ? addCompStyles.Hidden : null
        }`}
      >
        <div className={addCompStyles.ModalContainer}>
          {closeBtn(setIsOpen)}
          <div className={addCompStyles.Modal}>
            {CreateLangSwitchers(props.setSelectedLanguage, props.inputEnabler)}
            <div className={addCompStyles.NameForm}>
              {props.cardContents === "text" ? (
                props.q_a_TextEntry(props.cardType, props.iterator)
              ) : (
                <div>
                  <form onSubmit={handleFileInput}>
                    <label>Upload image</label>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      ref={fileInput}
                    />
                    <input type="submit" value="Submit" />
                    <p>Placeholder for image upload</p>
                    {upIMGs.map((image) => (
                      <div>
                        <img src={image} alt="Oops" />
                        <p>image</p>
                      </div>
                    ))}
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <p className={compStyles.QADescription} onClick={(e) => setIsOpen(true)}>
        {props.cardContents === "text" ? (
          textPreviewer(props.qna[props.cardType])
        ) : (
          <p>+</p>
        )}
      </p>
    </div>
  );
};
export default QACard;
