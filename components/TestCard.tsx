import React, { useEffect, useState } from "react";
import editIcon from "../GAssets/create_icon_big.png";
import styles from "./styles/TestCard.module.scss";
import Switch from "react-switch";
import Axios from "axios";
import { devURL } from "./constants";
import { ITest } from "../@types/test";

const TestCard = (props: {
  iterator: number;
  colour: string;
  _id: string;
  nameInRu: string;
  active: boolean;
  // parentComponentTestFetcher: () => Promise<void>;
  // mainTestFetcher: () => Promise<void>;
  updateTests: (testID: string) => void;
}) => {
  const CardStyle: Object = {
    background: `rgb(${props.colour})`,
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

  return (
    <div
      key={props._id}
      id={props._id}
      className={styles.TestCard}
      style={CardStyle}
    >
      <Switch onChange={handleActiveChange} checked={isTestActive} />
      {/* 
      //! Need to figure out how to time the switch
      */}
      <img src={editIcon} alt="Edit icon" className={styles.LookingGlass} />
      <h1 onClick={handleActiveChange}>Test title in ru: {props.nameInRu}</h1>
      <h2>Test id: {props._id}</h2>
      <span>Main question of test</span>
    </div>
  );
};

export default TestCard;
