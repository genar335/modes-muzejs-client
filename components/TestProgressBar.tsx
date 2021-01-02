import React from "react";
import { borderRadius } from "react-select/src/theme";

const TestProgressBar = (props: {
  numberOfPages: number;
  activePage: number;
}) => {
  const indicatorStyle: React.CSSProperties = {
    width: "1rem",
    height: "1rem",
    backgroundColor: "#c6aa96",
    borderRadius: "50%",
    borderStyle: "solid",
    borderColor: "#c6aa96",
  };

  const indicatorActiveStyle: React.CSSProperties = {
    width: "1rem",
    height: "1rem",
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderRadius: "50%",
    borderStyle: "solid",
    borderColor: "#c6aa96",
  };

  /**
   * Creates an array of indicators (circle shaped) with `current` one being filled in.
   * @param amount Number of desired indicators
   * @param current Index of the active indicator
   */
  const createIndicators = (
    amount: number = props.numberOfPages,
    current: number = props.activePage
  ) => {
    let indicators: JSX.Element[] = [];

    for (let indicator = 0; indicator < amount; indicator++) {
      if (indicator !== current) {
        indicators.push(
          <div key={indicator} style={indicatorActiveStyle}></div>
        );
      } else {
        indicators.push(<div key={indicator} style={indicatorStyle}></div>);
      }
    }

    return indicators;
  };

  return (
    <div
      id="ProgressBarContainer"
      style={{
        width: "50%",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      {createIndicators()}
    </div>
  );
};

export default TestProgressBar;
