import React, { useState } from "react";
import { PlusSign } from "./ActiveTests";
import Switch from "react-switch";
import styles from "../pages/styles/create_test.module.scss";

const FinalPageEditor = (props: {}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ModalOpenerContainerStyle: React.CSSProperties = {
    backgroundColor: "#efddd1",
    width: "100%",
    height: "100%",
    borderRadius: "16.5px",
    padding: "1rem",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  };

  return (
    <div className={styles.FPEditorMainContainer}>
      <div className="ModalOpenerContainer" style={ModalOpenerContainerStyle}>
        <p>Финальная страница</p>
        <div>
          <button>Текст</button>
          {PlusSign}
        </div>
        <div>
          <Switch
            id="activationToggle"
            // onChange={handleActiveChange}
            // checked={props.active}
            onColor="#0AB496"
            offColor="#8A8A8A"
            uncheckedIcon={false}
            checkedIcon={false}
            handleDiameter={18}
            width={46}
            height={30}
          />
        </div>
      </div>
    </div>
  );
};

export default FinalPageEditor;
