import React, { useState } from "react";
import { PlusSign } from "./ActiveTests";
import Switch from "react-switch";
import styles from "../pages/styles/create_test.module.scss";
import compStyles from "./styles/FinalPageEditor.module.scss";
import { ITest, TLangOption } from "../@types/test";
import { closeBtn, SaveBtn } from "./TestNamer";
import { AnimatePresence, motion } from "framer-motion";

const FinalPageEditor = (props: {
  toggleEmail: (bool: boolean) => void;
  emailState: boolean;
  toggleModal: (bool: boolean) => void;
  isOpen: boolean;
  saveTest: (test: ITest) => void;
  currentStateOfTest: ITest;
}) => {
  let textBuffer = {
    ru: {
      header: props.currentStateOfTest.ru.finalPageTextHeading,
      body: props.currentStateOfTest.ru.finalPageTextBody,
    },
    lv: {
      header: props.currentStateOfTest.lv.finalPageTextHeading,
      body: props.currentStateOfTest.lv.finalPageTextBody,
    },
    en: {
      header: props.currentStateOfTest.en.finalPageTextHeading,
      body: props.currentStateOfTest.en.finalPageTextBody,
    },
  };

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.saveTest({
      ...props.currentStateOfTest,
      [event.currentTarget.id as TLangOption["value"]]: {
        ...props.currentStateOfTest[
          event.currentTarget.id as TLangOption["value"]
        ],
        [`finalPageText${event.currentTarget.name}`]: event.currentTarget.value,
      },
    });
  }

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

  const ModalContainer: React.CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: 10,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const Modal: React.CSSProperties = {
    width: "70%",
    height: "60%",
    backgroundColor: "whitesmoke",
    border: "solid 1px whitesmoke",
    borderRadius: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  console.log(props.currentStateOfTest);
  console.log(textBuffer);

  return (
    // <AnimatePresence>
    <div className={styles.FPEditorMainContainer}>
      {props.isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={ModalContainer}
          key="fPageModal"
        >
          <div style={Modal}>
            <button
              style={{
                background: "none",
                border: "none",
                position: "absolute",
                top: "17%",
                right: "13%",
              }}
              onClick={() => props.toggleModal(false)}
            >
              {
                <svg
                  className={compStyles.CloseBTN}
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="28" cy="28" r="28" fill="#2F4858" />
                  <path
                    d="M38.5626 36.4501L30.1126 28L38.5628 19.5498C39.1458 18.9669 39.1458 18.0203 38.5626 17.4372C37.9797 16.8543 37.0332 16.8543 36.4502 17.4372L28 25.8874L19.5498 17.4372C18.9668 16.8543 18.0203 16.8543 17.4374 17.4372C16.8542 18.0203 16.8542 18.9669 17.4372 19.5498L25.8874 28L17.4374 36.4501C16.8542 37.0332 16.8542 37.9797 17.4372 38.5627C18.0203 39.1458 18.9668 39.1458 19.55 38.5627L28 30.1126L36.45 38.5627C37.0332 39.1458 37.9797 39.1458 38.5628 38.5627C39.1458 37.9797 39.1458 37.0332 38.5626 36.4501Z"
                    fill="white"
                  />
                </svg>
              }
            </button>
            <div className={compStyles.inputContainer}>
              <div className={compStyles.piContainer}>
                <div className={compStyles.pContainer}>
                  <p>RUS</p>
                </div>
                <div className={compStyles.inputsContainer}>
                  <input
                    onChange={handleInputChange}
                    value={props.currentStateOfTest.ru.finalPageTextHeading}
                    type="text"
                    name="Heading"
                    id="ru"
                    placeholder="Введите верхний текст"
                  />
                  <input
                    onChange={handleInputChange}
                    value={textBuffer.ru.body}
                    type="text"
                    name="Body"
                    id="ru"
                    placeholder="Введите нижний текст"
                  />
                </div>
              </div>
              <div className={compStyles.piContainer}>
                <div className={compStyles.pContainer}>
                  <p>LAT</p>
                </div>
                <div className={compStyles.inputsContainer}>
                  <input
                    onChange={handleInputChange}
                    value={textBuffer.lv.header}
                    type="text"
                    name="Heading"
                    id="lv"
                    placeholder="Введите верхний текст"
                  />
                  <input
                    onChange={handleInputChange}
                    value={textBuffer.lv.body}
                    type="text"
                    name="Body"
                    id="lv"
                    placeholder="Введите нижний текст"
                  />
                </div>
              </div>
              <div className={compStyles.piContainer}>
                <div className={compStyles.pContainer}>
                  <p>ENG</p>
                </div>
                <div className={compStyles.inputsContainer}>
                  <input
                    onChange={handleInputChange}
                    value={textBuffer.en.header}
                    type="text"
                    name="Heading"
                    id="en"
                    placeholder="Введите верхний текст"
                  />
                  <input
                    onChange={handleInputChange}
                    value={textBuffer.en.body}
                    type="text"
                    name="Body"
                    id="en"
                    placeholder="Введите нижний текст"
                  />
                </div>
              </div>
            </div>
            <button
            onClick={() => props.toggleModal(false)}
              style={{
                background: "none",
                border: "none",
                position: "absolute",
                bottom: "22%",
              }}
            >
              {SaveBtn()}
            </button>
          </div>
        </motion.div>
      ) : (
        <div className="ModalOpenerContainer" style={ModalOpenerContainerStyle}>
          {/* <div style={HeaderBtnContainer}> */}
          <p style={MOCHeader}>Финальная страница</p>
          <button onClick={() => props.toggleModal(true)} style={BTNOpenModel}>
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
    // </AnimatePresence>
  );
};

export default FinalPageEditor;
