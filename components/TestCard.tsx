import React, { useState } from "react";
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

  const [isActive, setIsActive] = useState<boolean>(props.active);

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
      // setIsActive(changedTest.active);
      console.log(changedTest, "recieved a response");
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(props);
  const handleActiveChange = async () => {
    // setIsActive(!isActive);
    await changeTestState(props._id, !isActive);
    console.log("Calling all tests");
    props.updateTests(props._id);
  };

  return (
    <div
      key={props._id}
      id={props._id}
      className={styles.TestCard}
      style={CardStyle}
    >
      <Switch onChange={handleActiveChange} checked={props.active} />
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
