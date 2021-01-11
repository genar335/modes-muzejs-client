import React, { useState } from "react";
import { PlusSign } from "./ActiveTests";
import Switch from "react-switch";
import styles from "../pages/styles/create_test.module.scss";

const FinalPageEditor = (props: {
  toggleEmail: (bool: boolean) => void;
  emailState: boolean;
}) => {
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
    justifyContent: "space-between",
    alignItems: "flex-start",
  };

  const MOCHeader: React.CSSProperties = {
    justifySelf: "flex-start",
    fontSize: "30px",
    textAlign: "center",
    width: "100%",
    margin: "1rem 0 1.5rem 0",
  };

  const HeaderBtnContainer: React.CSSProperties = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  };

  const BTNOpenModel: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "0 1rem 0",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0)",
    border: "2px solid rgba(224, 188, 163, 0.94)",
    borderRadius: "16.5px",
  };

  const EmailContainer: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <div className={styles.FPEditorMainContainer}>
      {isOpen ? (
        <></>
      ) : (
        <div className="ModalOpenerContainer" style={ModalOpenerContainerStyle}>
          {/* <div style={HeaderBtnContainer}> */}
          <p style={MOCHeader}>Финальная страница</p>
          <button style={BTNOpenModel}>
            <p
              style={{
                color: "rgb(47 71	88)	",
                fontSize: "24px",
                margin: "1rem 0 1rem 0",
              }}
            >
              Текст
            </p>
            {PlusSign(22, "rgb(47, 71, 88)")}
          </button>
          {/* </div> */}
          {/* <div> */}
          <div style={EmailContainer}>
            <p
              style={{
                fontSize: "24px",
                marginRight: "1rem",
                fontFamily: "Montserrat , sans-serif",
              }}
            >
              Email
            </p>
            <Switch
              id="activationToggle"
              onChange={(checked, _, __) => props.toggleEmail(checked)}
              checked={props.emailState}
              onColor="#0AB496"
              offColor="#8A8A8A"
              uncheckedIcon={false}
              checkedIcon={false}
              handleDiameter={18}
              width={46}
              height={30}
            />
          </div>
          {/* </div> */}
        </div>
      )}
    </div>
  );
};

export default FinalPageEditor;
