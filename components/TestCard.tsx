import React from "react";
import editIcon from "../GAssets/create_icon_big.png";

const TestCard = () => {
  return (
    <div id={/* test id */ "testID"}>
      <img src={editIcon} alt="Edit icon" />
      <h1>Test title</h1>
      <span>Main question of test</span>
    </div>
  );
};

export default TestCard;
