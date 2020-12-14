import React, { useEffect, useState } from "react";
import editIcon from "../GAssets/create_icon_big.png";
import deleteIcon from "../GAssets/delete-black-24dp.svg";
import styles from "./styles/TestCard.module.scss";
import Switch from "react-switch";
import Toggle from "react-toggle";
import Axios, { AxiosError, AxiosResponse } from "axios";
import { devURL } from "./constants";
import { ITest } from "../@types/test";
import { NextRouter, useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
// const klik = require("/klik.mp3");
import useSound from "use-sound";
// import Switch from "./Switch";

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
  const CardStyle: Object = {
    background: `rgb(${props.colour})`,
  };

  const [playClick] = useSound("/klik.mp3");
  const [deleteSound] = useSound("/move-to-trash.mp3");
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
        `${devURL}tests/toggleTestActiveState`,
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
    }, 10);
  };

  const handleEditIconClick = async () => {
    playClick();
    forwardToTestEdit(props._id);
  };

  const handleDeleteIconClick = async () => {
    //* animating opacity from 1 to 0 in 0.3 seconds
    // await cardControls.start({
    //   opacity: 0,
    //   transition: { duration: 0.3 },
    // });
    // deleteSound();
    Axios.get(`${devURL}tests/deleteTestByID?testToDelete=${props._id}`)
      .catch((error: AxiosError) => alert(error))
      .then((response) => {
        console.log(response);
        props.fetchAllTests();
      });
  };

  const cardControls = useAnimation();

  return (
    <div className={styles.TestCardBackground}>
      <motion.div
        //* Animation
        animate={cardControls}
        //*
        key={props._id}
        id={props._id}
        className={styles.TestCard}
        style={CardStyle}
      >
        {/* <Switch isOn={isTestActive} handleToggle={handleActiveChange} /> */}
        {/* <Switch onChange={handleActiveChange} checked={isTestActive} /> */}
        <div className={styles.ToggleTTContainer}>
          <Toggle
            checked={isTestActive}
            icons={false}
            onChange={handleActiveChange}
          />
          <h2 className={styles.TestType}>{props.fullTest?.type}</h2>
        </div>
        {/* 
      //! Need to figure out how to time the switch
    */}
        <img
          onClick={handleEditIconClick}
          src={editIcon}
          alt="Edit icon"
          className={styles.EditIcon}
        />
        <h3 onClick={handleActiveChange}>Test title in ru: {props.nameInRu}</h3>
        <h5 className={styles.FirstQ}>
          {`${props.fullTest.ru.pages[0].QnAPairs[0].question.slice(0, 60)}...`}
        </h5>
        <span className={styles.DeleteIcon} onClick={handleDeleteIconClick}>
          <img src={deleteIcon} alt="" />
        </span>
      </motion.div>
    </div>
  );
};

export default TestCard;
