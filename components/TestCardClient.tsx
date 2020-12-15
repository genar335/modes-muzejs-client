import React, { useEffect, useState } from "react";
import { NextRouter, useRouter } from 'next/router'
import { ITest } from "../@types/test";
import store from "store";
import styles from "./styles/TestCardClient.module.scss";

const TestCardClient = (props: {
    title: string,
    testData: ITest
}) => {

    const url = `/client/languages?testid=${props.testData._id}`;
    const router: NextRouter = useRouter();

    const handleClick = (e: any) => {
        //e.preventDefault();
        store.set("theTest", props.testData)
        router.push(url);
      }

    // `/client/languages?testid=${props.testData._id}`
    return(
        <div className={styles.testCardContainer} onClick={handleClick}>
            <h2 className={styles.testName}>{props.title}</h2>
        </div>
    )
}

export default TestCardClient