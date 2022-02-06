import React, {useRef, useState} from "react";
import {IQnA, TLangOption} from "../@types/test";
import compStyles from "./styles/TestPreview.module.scss";
import addCompStyles from "./styles/TestNamer.module.scss";
import {closeBtn, SaveBtn} from "./TestNamer";
import {APIURL, productionURL, URLCheckForLocalHost,} from "./constants";
import 'react-toastify/dist/ReactToastify.css';


// import { sendTheDataToTheServer } from "./PhotoManager";
//
//  const jwt = document.cookie.slice(document.cookie.indexOf('=') + 1);
// Axios.defaults.headers.common["Authorization"] =
//
import Axios from "axios";
import ReactTooltip from "react-tooltip";
import {toast, ToastContainer} from "react-toastify";

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
        whatToSave: "answer" | "question",
        langSetting?: "all" | TLangOption["value"]
    ) => void;
}) => {
    // useEffect(() => {
    //   // Axios.defaults.headers.common["Authorization"] =
    //   //   "Bearer " + store.get("jwt");
    // }, []);
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
        props.setCurrentCard(QACardRefIMG as any);
        // props.togglePhotoManager(false, `${props.cardType}_${props.iterator}`);
    };

    //! Image upload portion

    // const [recievedIMGLocations, setRecievedIMGLocation] = useState<
    //   Array<string>
    // >([]);
    const [readIMG, setReadIMG] = useState<string>();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const readAnImage = async (imageToBeRead: Blob) => {
        console.log(imageToBeRead.size)

        const tmpFileReader: FileReader = new FileReader();

        return new Promise((resolve, reject) => {
            console.log(imageToBeRead.size)
            if (imageToBeRead.size > 50_000_000) {
                reject(new DOMException('File size is bigger than 50MB'))
            }
            tmpFileReader.onerror = () => {
                tmpFileReader.abort();
                reject(new DOMException("Problem occurred when reading the file."));
            };

            tmpFileReader.onload = () => {
                if (tmpFileReader.result)
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
                // `${producionURL}tests/imgSaving`,
                `${APIURL}tests/imgSaving`,
                {
                    fileName,
                    fileContents: file,
                }
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
        const tmpCurrent = fileInputRef.current!;
        const files = tmpCurrent.files;
        if (files !== null) {
            const chosenFile: File = files[0] as File;
            console.log(chosenFile, 'hello');
            if(chosenFile.size > 50_000_000) {
                throw new DOMException('File size is bigger than 50MB')
            }
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
                    // console.log(QACardRefIMG.current!.src, "OI");
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
        toast.dismiss()
        if (event!.target!.files![0].size > 50_000_000) {
            toast.error('File size is more that 50MB', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            // throw new DOMException('File size is more that 50MB')
            // alert('File size is more that 50MB')
            // delete file;
            fileInputRef.current!.form!.reset()
            return;
        }
        // console.log(event.target.files[0]);
        const file = event!.target!.files![0] || new File([], "err");
        console.log(file.size)
        // } else {
            let fd = new FormData();
            fd.append("image", file);
            console.log(fd.getAll("image"));
            console.log("heelooo")
            Axios.post(`${productionURL}tests/testimg`, fd, {
                // Axios.post(`http://localhost:4000/api/quiz/tests/testimg`, fd, {
                headers: {
                    "content-type": "multipart/form-data",
                },
            })
                .then((res) => {
                    console.log(res);
                    setimgLocation(res.data);
                    props.saveIMG(props.iterator, res.data, props.cardType, "all");
                    toast.success('Image has been successfully uploaded')
                })
                .catch((err) => {
                    console.error(err)
                    fileInputRef.current!.form!.reset()
                    toast.error('Server has encountered an error')
                });
        // }
    }

    // useEffect(() => {
    //   console.log("Input has ", fileInputRef.current?.files);
    // }, [fileInputRef.current]);

    return (
        <div className={`${compStyles[props.cardType]}`}>
            {/*<div style={{*/}
            {/*    position: 'absolute',*/}
            {/*    width: '30vw',*/}
            {/*    height: '30vh',*/}
            {/*    top: 0,*/}
            {/*    right: 0,*/}
            {/*    pointerEvents: 'none'*/}
            {/*}}>*/}

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/*</div>*/}
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
                        {props.pageContents.match(URLCheckForLocalHost) !== null ? (
                            <img
                                id={`${props.cardType}_${props.iterator}_page-${props.pageNumber}`}
                                // onChange={(e) => console.log("YAyyy")}
                                className={compStyles.SelectedIMGPreview}
                                // src={/* imgLocation || */ props.pageContents}
                                src={
                                    // props.pageContents.match(URLCheckForLocalHost) !== null
                                    props.pageContents
                                    // : ""
                                }
                                alt="Click here to select the image
                                Width: 245px
                                Height: 245px
                                Aspect ratio: ~ 1:1"
                                ref={QACardRefIMG}
                                onClick={(e) => fileInputRef!.current!.click()}
                            />) : (<>
                                {/*<span><p>?</p></span>*/}
                                <span
                                    onClick={(e) => fileInputRef!.current!.click()}
                                ><p data-tip data-for={"image-size-guidelines"}>?</p></span>
                                <ReactTooltip id="image-size-guidelines" place="top" type="dark" effect="float">
                                    <p style={{
                                        fontSize: '1rem',
                                        marginTop: '0.5rem',
                                        marginBottom: '0.5rem',
                                    }}>Click here to select the image</p>
                                    <p style={{
                                        fontSize: '1rem',
                                        marginBottom: '0.5rem',
                                    }}>Maximum image size: 50MB</p>
                                    <p style={{
                                        fontSize: '1rem',
                                        marginBottom: '0.5rem',
                                    }}>Recommended width: 245px</p>
                                    <p style={{
                                        fontSize: '1rem',
                                        marginBottom: '0.5rem',
                                    }}>Recommended height: 245px</p>
                                    <p style={{
                                        fontSize: '1rem',
                                        marginBottom: '0.5rem',
                                    }}>Aspect ratio: ~ 1:1</p>
                                </ReactTooltip>
                            </>
                        )}
                        <input
                            className={compStyles.FileChooser}
                            style={{display: "none"}}
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
