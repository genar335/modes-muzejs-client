import React, { useState } from "react";
import { PlusSign } from "./ActiveTests";
import Switch from "react-switch";
import styles from "../pages/styles/create_test.module.scss";
import { ITest, TLangOption } from "../@types/test";
import { SaveBtn } from "./TestNamer";
import { borderRadius } from "react-select/src/theme";

const FinalPageEditor = (props: {
  toggleEmail: (bool: boolean) => void;
  emailState: boolean;
  testLang: Array<TLangOption["value"]>;
  test: ITest;
  saveTest: (test: ITest) => void;
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
    margin: "0rem 0 1.6rem 0",
  };

  const HeaderBtnContainer: React.CSSProperties = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  };

  const BTNOpenModel: React.CSSProperties = {
    gridColumn: "3",
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
    // marginTop: "0.5rem",
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const langID: string = event.currentTarget.id.slice(
      undefined,
      event.currentTarget.id.indexOf("_")
    );
    // console.log(langID);
    props.saveTest({
      ...props.test,
      [langID]: {
        ...props.test[langID as TLangOption["value"]],
        [`finalPageText${event.currentTarget.name}`]: event.currentTarget.value,
      },
    });
  };

  const InputStyle: React.CSSProperties = {
    border: "2px solid #2f4858",
    boxSizing: "border-box",
    borderRadius: "32px",
    width: "100%",
    height: "35%",
    marginBottom: "1rem",
    fontSize: "larger",
    padding: "0 1rem",
  };

  const PTagStyle: React.CSSProperties = {
    background: "#e0bca3",
    borderRadius: "31.5px",
    color: "rgba(47,72,88,1)",
    width: "8%",
    height: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "larger",
    padding: "0 1rem",
  };

  return (
    <div className={styles.FPEditorMainContainer}>
      <div className="ModalOpenerContainer" style={ModalOpenerContainerStyle}>
        {/* <div style={HeaderBtnContainer}> */}
        <p style={MOCHeader}>Финальная страница</p>
        <button onClick={() => setIsOpen(true)} style={BTNOpenModel}>
          <p
            style={{
              color: "rgb(47 71	88)	",
              fontSize: "24px",
              margin: "1rem 0 ",
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
              paddingRight: "0.4rem",
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
      {isOpen && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100,
            position: "absolute",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(224, 188, 163, 0.6)",
          }}
        >
          <div
            style={{
              width: "76%",
              height: "70%",
              backgroundColor: "whitesmoke",
              border: "1px, solid, rgba(0, 0, 0, 0)",
              borderRadius: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              {props.testLang.map(
                (lang: TLangOption["value"], iterator: number) => (
                  <div
                    style={{
                      width: "75%",
                      height: "25%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={PTagStyle}>
                      <p>
                        {lang === "lv" ? "LAT" : lang === "en" ? "ENG" : "RUS"}
                      </p>
                    </div>
                    <div
                      style={{
                        width: "85%",
                      }}
                    >
                      <input
                        style={InputStyle}
                        id={`${lang}_${iterator}_Header`}
                        name="Heading"
                        onChange={handleInputChange}
                        placeholder={`Верхний текст на ${
                          lang === "lv"
                            ? "латышском"
                            : lang === "en"
                            ? "английском"
                            : "русском"
                        } языке`}
                        type="text"
                        defaultValue={props.test[lang].finalPageTextHeading}
                      />
                      <input
                        style={InputStyle}
                        id={`${lang}_${iterator}_Body`}
                        name="Body"
                        onChange={handleInputChange}
                        placeholder={`Нижний текст на ${
                          lang === "lv"
                            ? "латышском"
                            : lang === "en"
                            ? "английском"
                            : "русском"
                        } языке`}
                        type="text"
                        defaultValue={props.test[lang].finalPageTextBody}
                      />
                    </div>
                  </div>
                )
              )}

              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  position: "absolute",
                  bottom: "18%",
                }}
              >
                {SaveBtn()}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinalPageEditor;
