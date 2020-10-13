import React from "react";
import editIcon from "../GAssets/create_icon_big.png";
import styles from "./styles/TestCard.module.scss";

const TestCard = (props: { colour: string }) => {
  const CardStyle: Object = {
    background: `rgb(${props.colour})`,
  };

  console.log(props);

  return (
    <div
      id={/* test id */ "testID"}
      className={styles.TestCard}
      style={CardStyle}
    >
      <img src={editIcon} alt="Edit icon" className={styles.LookingGlass} />
      <h1>Test title</h1>
      <span>Main question of test</span>
    </div>
  );
};

export default TestCard;
