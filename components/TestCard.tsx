import React, { useEffect, useState } from "react";
import editIcon from "../GAssets/create_icon_big.png";
import styles from "./styles/TestCard.module.scss";
import Switch from "react-switch";
import Axios, { AxiosError, AxiosResponse } from "axios";
import { devURL } from "./constants";
import { ITest } from "../@types/test";
import { NextRouter, useRouter } from "next/router";

const TestCard = (props: {
  iterator: number;
  colour: string;
  _id: string;
  nameInRu: string;
  active: boolean;
  // parentComponentTestFetcher: () => Promise<void>;
  // mainTestFetcher: () => Promise<void>;
  updateTests: (testID: string) => void;
  fetchAllTests: () => Promise<void>;
}) => {
  const CardStyle: Object = {
    background: `rgb(${props.colour})`,
  };

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

  const handleEditIconClick = () => {
    alert("Sending you to edit a test");
    forwardToTestEdit(props._id);
  };

  const handleDeleteIconClick = () => {
    Axios.get(`${devURL}tests/deleteTestByID?testToDelete=${props._id}`)
      .catch((error: AxiosError) => alert(error))
      .then((response) => {
        console.log(response);
        props.fetchAllTests();
      });
  };

  return (
    <div className={styles.TestCardBackground}>
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
        <img
          onClick={handleEditIconClick}
          src={editIcon}
          alt="Edit icon"
          className={styles.EditIcon}
        />
        <h3 onClick={handleActiveChange}>Test title in ru: {props.nameInRu}</h3>
        <h4>Test id: {props._id}</h4>
        <span>Main question of test</span>
        <h1 onClick={handleDeleteIconClick}>✖︎</h1>
      </div>
    </div>
  );
};

export default TestCard;
