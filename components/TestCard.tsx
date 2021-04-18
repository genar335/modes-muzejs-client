import React, { useEffect, useState } from "react";
import styles from "./styles/TestCard.module.scss";
import Switch from "react-switch";
import Axios, { AxiosError, AxiosResponse } from "axios";
import { APIURL, devURL } from "./constants";
import { ITest, TTestTypes } from "../@types/test";
import { NextRouter, useRouter } from "next/router";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

const TestCard = (props: {
  iterator: number;
  colour: string;
  _id: string;
  nameInRu: string;
  active: boolean;
  fullTest: ITest;
  // parentComponentTestFetcher: () => Promise<void>;
  // mainTestFetcher: () => Promise<void>;
  updateTests: (testID: string) => void;
  fetchAllTests: () => Promise<void>;
}) => {
  const CardStyle: React.CSSProperties = {
    color: props.colour === "brown" ? "#FFFFFF" : "#2F4858",
    backgroundColor: props.colour === "brown" ? "rgb(224	188	163	)" : "#ffffff",
  };

  const [isDCModalOpen, setIsDCModalOpen] = useState<boolean>(false);

  const router: NextRouter = useRouter();
  const forwardToTestEdit = (testID: string) => {
    router.push(`/TMS/create_test?testToEdit=${testID}`);
  };

  // console.log(props, "card props");
  const [isTestActive, setIsTestActive] = useState<boolean>(props.active);
  useEffect(() => {
    setIsTestActive(props.active);
  }, []);

  // const [switchIsActive, setSwichIsActive] = useState<boolean>(props.active);

  const changeTestState = async (testID: string, isActive: boolean) => {
    let changedTest: ITest;
    try {
      const responseFromServer = await Axios.post(
        `${APIURL}tests/toggleTestActiveState`,
        {
          testID,
          isActive,
        }
      );
      changedTest = responseFromServer.data;
      // setSwichIsActive(!switchIsActive);
      // setIsTestActive(changedTest.active);
      console.log(changedTest, "recieved a response");
    } catch (error) {
      console.error(error);
    }
  };

  const handleActiveChange = async () => {
    // setSwichIsActive(!switchIsActive);

    await changeTestState(props._id, !isTestActive);
    console.log("Calling all tests");

    setTimeout(() => {
      props.updateTests(props._id);
    }, 200);
  };

  const handleEditIconClick = async () => {
    // playClick();
    forwardToTestEdit(props._id);
  };

  const handleDeleteIconClick = async () => {
    Axios.get(`${APIURL}tests/deleteTestByID?testToDelete=${props._id}`)
      .catch((error: AxiosError) => alert(error))
      .then((response) => {
        console.log(response);
        props.fetchAllTests();
      });
    setIsDCModalOpen(false);
  };

  const cardControls = useAnimation();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.TestCardBackground}
      >
        <button
          className={styles.DeleteIcon}
          onClick={(_) => setIsDCModalOpen(true)}
        >
          {DeleteIcon()}
        </button>
        <button onClick={handleEditIconClick} className={styles.EditIcon}>
          {EditIcon()}
        </button>
        <div
          key={props._id}
          id={props._id}
          className={styles.TestCard}
          style={CardStyle}
        >
          {isDCModalOpen && (
            <DeletionConfirmationModal
              isVisible={isDCModalOpen}
              toggleModal={setIsDCModalOpen}
              deletionOfTest={handleDeleteIconClick}
            />
          )}
          {/* <Switch isOn={isTestActive} handleToggle={handleActiveChange} /> */}
          {/* <Switch onChange={handleActiveChange} checked={isTestActive} /> */}
          <div className={styles.ToggleTTContainer}>
            <Switch
              id="activationToggle"
              onChange={handleActiveChange}
              checked={props.active}
              onColor="#0AB496"
              offColor="#8A8A8A"
              uncheckedIcon={false}
              checkedIcon={false}
              handleDiameter={18}
              width={46}
              height={30}
            />
            <p className={styles.TestType}>
              {parseTestTypeValueToLabel(props.fullTest.type)}
            </p>
          </div>
          {/* 
      //! Need to figure out how to time the switch
    */}
          <p className={styles.CardHeader}>"{props.nameInRu}"</p>
          <p className={styles.TestLastEdit}>
            {new Date(props.fullTest.updatedAt as string)
              .toLocaleDateString()
              .replaceAll(/\//g, ".")}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export function DeletionConfirmationModal(props: {
  isVisible: boolean;
  toggleModal: (toggler: boolean) => void;
  deletionOfTest: () => void;
}) {
  useEffect(() => {
    // document.body.style.position = "fixed";
    // document.body.style.top = `-${window.scrollY}px`;
    document.body.style.overflow = "hidden";
    return () => {
      // document.body.style.position = "";
      // document.body.style.top = "";
      document.body.style.overflow = "";
    };
  }, []);

  const BtnStyle: React.CSSProperties = {
    backgroundColor: "#2f4858",
    color: "#ffffff",
    borderColor: "#2f4858",
    borderRadius: "14px",
    borderStyle: "solid",
    width: "5rem",
    height: "3rem",
    margin: "0 1rem",
    fontSize: "20px",
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "rgba(224, 188, 163, 0.6)",
        // opacity: 0.6,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "35%",
          height: "40%",
          backgroundColor: "#ffffff",
          opacity: 1,
          borderRadius: "14px",
          zIndex: 11,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#2F4858",
        }}
      >
        {InfoIcon()}
        <p
          style={{
            margin: "2rem 0 0 0",
          }}
        >
          Хотите ли вы удалить этот тест?
        </p>
        <p>Операция необратима.</p>
        <div>
          <button onClick={props.deletionOfTest} style={BtnStyle}>
            Да
          </button>
          <button style={BtnStyle} onClick={(e) => props.toggleModal(false)}>
            Нет
          </button>
        </div>
      </div>
    </div>
  );
}

export const EditIcon = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="21.1744" cy="20.8256" r="20.8256" fill="white" />
    <path
      d="M21.1738 0C9.67259 0 0.348755 9.32446 0.348755 20.8252C0.348755 32.3259 9.67259 41.6512 21.1738 41.6512C32.6751 41.6512 42 32.3265 42 20.8252C42 9.32391 32.6751 0 21.1738 0ZM31.0738 14.9868L29.0958 16.9648L25.0693 12.9387L23.5418 14.4662L27.5683 18.4926L17.6924 28.3676L13.6663 24.3418L12.1388 25.8693L16.1649 29.8955L15.1809 30.8795L15.1621 30.8608C15.053 31.0405 14.8756 31.1715 14.6648 31.2183L10.9102 32.0555C10.854 32.0681 10.7968 32.0742 10.7403 32.0742C10.5353 32.0742 10.3362 31.9936 10.1887 31.8456C9.99927 31.6569 9.92041 31.3844 9.97873 31.1232L10.8155 27.3697C10.8627 27.1591 10.9941 26.9813 11.1734 26.8724L11.1544 26.8534L27.0472 10.96C27.2802 10.7274 27.6587 10.7274 27.8917 10.9607L31.0741 14.1424C31.3071 14.3754 31.3071 14.7538 31.0738 14.9868Z"
      fill="#2F4858"
    />
  </svg>
);

export const InfoIcon = () => (
  <svg
    width="94"
    height="94"
    viewBox="0 0 94 94"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="47" cy="47" r="47" fill="#E0BCA3" />
    <path
      d="M42.9794 37.8704H51.0206V70H42.9794V37.8704ZM47 33.3914C45.5223 33.3914 44.3196 32.8937 43.3918 31.8984C42.4639 30.903 42 29.6688 42 28.1957C42 26.7226 42.4639 25.4884 43.3918 24.493C44.3196 23.4977 45.5223 23 47 23C48.4777 23 49.6804 23.4778 50.6082 24.4333C51.5361 25.3888 52 26.5832 52 28.0165C52 29.5693 51.5361 30.8632 50.6082 31.8984C49.6804 32.8937 48.4777 33.3914 47 33.3914Z"
      fill="white"
    />
  </svg>
);

export const DeleteIcon = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20.825" cy="20.825" r="20.825" fill="#2F4858" />
    <path
      d="M15.5874 20.4751L15.2388 20.8275L15.5882 21.1791L18.2817 23.8897L15.6016 26.5995L15.2539 26.9511L15.6016 27.3027L17.6159 29.3394L17.9714 29.6988L18.3269 29.3394L21 26.6366L23.6731 29.3394L24.0286 29.6988L24.3841 29.3394L26.3984 27.3027L26.7461 26.9511L26.3984 26.5995L23.7175 23.8889L26.3984 21.1783L26.7461 20.8267L26.3984 20.4751L24.3841 18.4384L24.0286 18.079L23.6731 18.4384L20.9992 21.142L18.3118 18.4376L17.9563 18.0798L17.6016 18.4384L15.5874 20.4751ZM25.6445 9.79604L25.7913 9.94444H26H30.5V11.8333H11.5V9.94444H16H16.2087L16.3555 9.79604L17.6373 8.5H24.3627L25.6445 9.79604ZM15.2857 33.5C13.9956 33.5 12.9286 32.4291 12.9286 31.1111V14.2778H29.0714V31.1111C29.0714 32.4291 28.0044 33.5 26.7143 33.5H15.2857Z"
      fill="white"
      stroke="white"
    />
  </svg>
);

export const parseTestTypeValueToLabel = (
  testTypeToParse: TTestTypes["type"]
) => {
  switch (testTypeToParse) {
    case "PP":
      return "Фото – Фото";
    case "PT":
      return "Фото – Текст";
    case "TT":
      return "Tекст – Текст";
    case "TP":
      return "Текст – Фото";
    default:
      return "Неизвестно";
  }
};

export default TestCard;
