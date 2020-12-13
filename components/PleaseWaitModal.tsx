import React from "react";
import compStyle from "./styles/PleaseWaitModal.module.scss";
// import loadingIMG from '../public/loading_cat.gif'

const PleaseWaitModal = (props: { isDisplayed: boolean }) => {
  return props.isDisplayed ? (
    <div className={compStyle.ModalBG}>
      <div className={compStyle.Modal}>
        <h1 className={compStyle.ModalHeader}>Please wait</h1>
        <img
          className={compStyle.LoadingIMG}
          src="/loading_cat.gif"
          alt="Loading..."
        />
      </div>
    </div>
  ) : null;
};

export default PleaseWaitModal;
