import React, { useEffect, useLayoutEffect, useRef } from "react";
import { DraggableCore } from "react-draggable";
import topFrame from "../GAssets/tests/TopFrame.svg";
import styles from "./styles/OptionTop.module.scss";

const OptionTop = (props: any) => {
  /**
   * get content from props?
   * check for url (regex) in case of image
   * render the content within the frame??
   *
   * [(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)
   *
   */

  const optionTopRef = useRef(null);
  useEffect(() => {
    console.log(optionTopRef.current);
    props.addToArrayOfRefs(optionTopRef.current);
  }, []);

  return (
    <DraggableCore>
      <div ref={optionTopRef} className={styles.optionContainer}>
        <img src={topFrame} alt="top frame" id={styles.topFrame} />
        <p className={styles.text}>fashion</p>
      </div>
    </DraggableCore>
  );
};

export default OptionTop;
