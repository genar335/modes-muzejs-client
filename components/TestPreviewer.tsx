import React from "react";
import { ITest, TLangOption } from "../@types/test";
import Test from "../pages/client/test";

const TestPreviewer = (props: {
  isOpen: boolean;
  setIsOpen: (bool: boolean) => void;
  test: ITest;
  activeLanguage: TLangOption["value"];
}) => {
  console.log(props.activeLanguage);
  return props.isOpen ? (
    <div
      style={{
        position: "absolute",
        zIndex: 100,
        width: "100vw",
        height: "100vh",
        top: "0",
        left: "0",
        backgroundColor: "rgba(224, 188, 163, 0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{
          background: "none",
          border: "none",
          position: "absolute",
          top: "5%",
          right: "5.7%",
        }}
        onClick={() => props.setIsOpen(false)}
      >
        {
          <svg
            //   className={compStyles.CloseBTN}
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
      <div
        style={{
          width: "95%",
          height: "95%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "border-box",
          background: "white",
          border: "1px solid white",
          borderRadius: "31px",
        }}
      >
        <div
          style={{
            width: "90%",
            height: "90%",
          }}
        >
          <Test
            test={props.test}
            activeLanguage={props.activeLanguage}
            fromPreview={true}
          />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default TestPreviewer;
