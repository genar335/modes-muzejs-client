import Axios from "axios";
//const jwt = document.cookie.slice(document.cookie.indexOf('=') + 1);
import React, { useEffect, useState } from "react";
import { ITest } from "../../@types/test";
import ActiveTests from "../../components/ActiveTests";
import {
  APIURL,
  devURL,
  producionURL,
  productionHost,
} from "../../components/constants";
import Gallery from "../../components/Gallery";
import { motion } from "framer-motion";
import styles from "../styles/main.module.scss";
import { pageAppearance } from "./create_test";
import PleaseWaitModal from "../../components/PleaseWaitModal";
import FMLogo from "../../components/FMlogo";
import checkJWT from "../../components/jwtChecker";
import { NextRouter, Router, useRouter } from "next/router";
import store from "store";

const main = () => {
  const router: NextRouter = useRouter();
  const getTestsByActive = async (isTestActive: boolean): Promise<any> => {
    try {
      const tests = await Axios.get(
        `http://192.168.8.100:4000/tests/getTest?active=${isTestActive}`
      );
      console.log(tests.data, "recieved tests");
      return tests.data as ITest[];
    } catch (error) {
      console.log(Object.keys(error), error.message);
      return [];
    }
  };
  const [hasEverythingFetched, setHasEverythingFetched] =
    useState<boolean>(false);
  const [tests, setTests] = useState<{
    activeTests: ITest[];
    inActiveTests: ITest[];
  }>({
    activeTests: [],
    inActiveTests: [],
  });

  const getAllTests = async () => {
    setHasEverythingFetched(false);

    try {
      const serverResponse = await Axios.get(`${producionURL}tests/allTests`);
      const data = serverResponse.data;

      setHasEverythingFetched(true);
      let tmpactiveTests: Array<ITest> = [];
      let tmpinActiveTests: Array<ITest> = [];
      filterTests(tmpactiveTests, tmpinActiveTests, data);
      setTests({
        activeTests: tmpactiveTests,
        inActiveTests: tmpinActiveTests,
      });
    } catch (error) {
      console.log(Object.keys(error), error.message);
    }
  };

  const filterTests = (
    activeTests: ITest[],
    inActiveTests: ITest[],
    arrToFilter: ITest[]
  ) => {
    arrToFilter.forEach((test: ITest) => {
      if (test.active !== undefined) {
        test.active ? activeTests.push(test) : inActiveTests.push(test);
      }
    });
  };

  const toggleTest = (testID: string) => {
    let tmpActive = tests.activeTests;
    let tmpInactive = tests.inActiveTests;
    let combinedTests = [...tests.activeTests, ...tests.inActiveTests];

    combinedTests.forEach((test: ITest) => {
      if (test._id === testID) {
        if (combinedTests.indexOf(test) < tmpActive.length) {
          tmpActive.splice(tmpActive.indexOf(test), 1);
          tmpInactive.push({
            ...test,
            active: !test.active,
          });
        } else {
          tmpInactive.splice(tmpInactive.indexOf(test), 1);
          tmpActive.push({
            ...test,
            active: !test.active,
          });
        }
      }
    });

    setTests({
      activeTests: tmpActive,
      inActiveTests: tmpInactive,
    });
  };

  useEffect(() => {
    Axios.defaults.headers.common["Authorization"] =
      "Bearer " + store.get("jwt");

    if (checkJWT() === false) {
      router.replace(`${productionHost}/tms/auth`);
    }
    getAllTests();
  }, []);

  return (
    <motion.div
      className={styles.MainContainer}
      variants={pageAppearance}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.FMLogo}>
        <FMLogo />
      </div>
      <PleaseWaitModal isDisplayed={!hasEverythingFetched} />
      <ActiveTests
        // getActiveTests={getTestsByActive}
        tests={tests}
        activeTests={tests.activeTests}
        updateTheTests={toggleTest}
        fetchAllTests={getAllTests}
      />
      <Gallery
        // getInactiveTests={getTestsByActive}
        testsToRender={tests.inActiveTests}
        updateTheTests={toggleTest}
        fetchAllTests={getAllTests}
      />
    </motion.div>
  );
};

export default main;
