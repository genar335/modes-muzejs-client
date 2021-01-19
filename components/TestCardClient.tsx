import React, { useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { ITest } from "../@types/test";
import store from "store";
import styles from "./styles/TestCardClient.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { parseTestTypeValueToLabel } from "./TestCard";

const TestCardClient = (props: { title: string; testData: ITest }) => {
  const url = `/client/languages?testid=${props.testData._id}`;
  const router: NextRouter = useRouter();

  const handleClick = (e: any) => {
    store.set("theTest", props.testData);
    router.push(url);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={styles.testCardContainer}
        onClick={handleClick}
      >
        <p>{parseTestTypeValueToLabel(props.testData.type)}</p>
        <h2 className={styles.testName}>"{props.title}"</h2>
        <p className={styles.TestLastEdit}>
          {new Date(props.testData.updatedAt)
            .toLocaleDateString()
            .replaceAll(/\//g, ".")}
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

export default TestCardClient;
