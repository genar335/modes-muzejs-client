import Link from "next/link";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/test_selection.module.scss";

function Test_Selection(props: any) {

    /**
     * get active tests (Axios)
     * 
     */

    //TODO: direct to the chosen test

    return(
        <div className={styles.pageContainer}>
            <img src="https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png" alt="logo" id={styles.MMlogo}/>
        </div>
    )
}

export default Test_Selection;