import React from "react";
import { borderRadius } from "react-select/src/theme";

const TestProgressBar = (props: {
  numberOfPages: number;
  activePage: number;
}) => {
  const indicatorStyle: React.CSSProperties = {
    width: "0.6rem",
    height: "0.6rem",
    margin: "0 0.4rem",
    backgroundColor: "#c6aa96",
    borderRadius: "50%",
    borderStyle: "solid",
    borderColor: "#c6aa96",
    borderWidth: "2px",
  };

  const indicatorActiveStyle: React.CSSProperties = {
    width: "0.6rem",
    height: "0.6rem",
    margin: "0 0.4rem",
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderRadius: "50%",
    borderStyle: "solid",
    borderColor: "#c6aa96",
    borderWidth: "2px",
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
        width: "min-content",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      {createIndicators()}
    </div>
  );
};

export default TestProgressBar;
