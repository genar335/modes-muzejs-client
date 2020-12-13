import Link from "next/link";
import React, { useRef } from "react";
import { useRouter } from 'next/router';
import interact from 'interactjs';
import styles from "../styles/test.module.scss";
import OptionTop from "../../components/OptionTop";
import OptionBottom from "../../components/OptionBottom";
import { Target } from "@interactjs/types";
import QACard from "../../components/QACard";

function Test(props: any) {

    //testing out queries
    const router = useRouter()
    const { testid , lang } = router.query
    //API

    /**
     * if router.query.lang === {lang}
     * 
     * wrap different returns in conditionals to render the tests within one page
     * TODO components: 
     * 
     */

    const dropZone =  useRef(null)

    if(dropZone.current && document.getElementById("answer")) {
        console.log(document.getElementById("answer")?.className)
        interact(dropZone.current as unknown as Target)
            .dropzone({
                overlap: "center",
                accept: document.getElementById("answer")!,
                ondrop: function (event) {
                    console.log(event.relatedTarget.id
                        + ' was dropped into '
                        + event.target.id)
                }
            })
    }

    return(
        <div className={styles.pageContainer}>
            <img src="https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png" alt="logo" id={styles.MMlogo}></img>
            {/*<div>
                <p>test id: {testid}</p>
                <p>tēst language: {lang}</p>
            </div>*/}
            <div className={styles.testContainer}>
                <div className={styles.qnaContainer}>
                    <OptionTop />
                    <div className={styles.dropzoneDiv}></div>
                    <OptionBottom />
                </div>
                <div className={styles.qnaContainer}>
                    <OptionTop />
                    <div className={styles.dropzoneDiv}></div>
                    <OptionBottom />
                </div>
                <div className={styles.qnaContainer}>
                    <OptionTop />
                    <div className={styles.dropzoneDiv} ref={dropZone}></div>
                    <OptionBottom />
                </div>
            </div>
        </div>
    );
}

export default Test;