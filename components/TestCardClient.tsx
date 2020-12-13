import React, { useEffect, useState } from "react";
import styles from "./styles/TestCardClient.module.scss";

const TestCardClient = (props: any) => {

    return(
        <div className={styles.testCardContainer}>
            <h2 className={styles.testName}>{props.title}</h2>
        </div>
    )
}

export default TestCardClient