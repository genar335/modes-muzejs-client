import React, { useEffect, useState } from "react";
import LanguageBtn from "./LanguageBtn";
import compStyle from "./styles/LangBtnController.module.scss";

const LangBtnController = (props) => {
  type TBtnArrayWithPressedState = {
    btns: [JSX.Element, boolean];
  };

  const [flatBtns, setFlatBtns] = useState<Array<boolean>>([]);
  const [activeBtnPosition, setActiveBtnPosition] = useState<Number>();

  const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void;

  if (flatBtns.length !== props.BtnArray.length) {
    const tmp: boolean[] = props.BtnArray.map((btn) => {
      if (btn === props.active) {
        return true;
      } else {
        return false;
      }
    });
    setActiveBtnPosition(tmp.indexOf(true));
    setFlatBtns(tmp);
  }

  const activeBtnPositionSetter = (id) => {
    setFlatBtns(
      flatBtns.map((btn, index) =>
        index === id ? (btn = true) : (btn = false)
      )
    );
    console.log(flatBtns, "during button click");
    console.log(id);
    setActiveBtnPosition(id);
    forceUpdate();
  };

  function activeBtnSwitcher() {
    console.log(flatBtns, "in the beginnig of active button switcher");
    let tmp = flatBtns;
    tmp.pop();
    if (tmp.indexOf(true) === tmp.length || tmp.indexOf(true) === -1) {
      tmp.unshift(true);
    } else {
      tmp.unshift(false);
    }
    setFlatBtns(tmp);
    console.log(flatBtns, "after manipulation");
    activeBtnPositionSetter(flatBtns.indexOf(true));
    forceUpdate();
  }

  // * Grabbing arrow in the modal which selects next element.
  // * Assings a click listener to the grabbed element.
  let arrowBtn: HTMLElement | null;
  useEffect(() => {
    arrowBtn = document.getElementById("arrowButton");
    arrowBtn?.addEventListener("click", handleArrowClick);
    return () => arrowBtn?.removeEventListener("click", handleArrowClick);
  });

  const handleArrowClick = (): void => {
    activeBtnSwitcher();
  };

  console.log(props.BtnArray[0].tu);
  return (
    <div className={compStyle.LangSelect}>
      {props.BtnArray.map((button, key) => (
        <LanguageBtn
          btnID={button}
          btnText={button.toUpperCase()}
          key={key}
          langSelect={props.langSelector}
          inputEnabler={props.inputEnabler}
          setActiveBtn={activeBtnPositionSetter}
          pressed={flatBtns[key]}
          accessKey={key}
        />
      ))}
    </div>
  );
};

export default LangBtnController;
