import React from "react";
import compStyle from "./styles/Switch.module.css";

const Switch = (props: { isOn: boolean; handleToggle: () => void }) => {
  return (
    <>
      <input
        checked={props.isOn}
        onChange={props.handleToggle}
        className={compStyle.reactSwitchCheckbox}
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        // style={{ background: props.isOn && "rgb(10, 60, 70)" }}
        className={compStyle.reactSwitchLabel}
        htmlFor={`react-switch-new`}
      >
        <span className={compStyle.reactSwitchButton} />
      </label>
    </>
  );
};

export default Switch;
