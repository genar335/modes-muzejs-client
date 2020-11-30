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
  active: boolean;
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
      console.log(changedTest);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(props);
  const handleActiveChange = () => {
    setIsActive(!isActive);
    console.log(isActive, "after the state change");
    changeTestState(props._id, !isActive);
  };

  return (
    <div
      key={props.iterator}
      id={props._id}
      className={styles.TestCard}
      style={CardStyle}
    >
      <Switch onChange={handleActiveChange} checked={isActive} />
      <img src={editIcon} alt="Edit icon" className={styles.LookingGlass} />
      <h1>Test title</h1>
      <span>Main question of test</span>
    </div>
  );
};

export default TestCard;
