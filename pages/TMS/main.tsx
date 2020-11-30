import Axios from "axios";
import React, { useEffect, useState } from "react";
import { ITest } from "../../@types/test";
import ActiveTests from "../../components/ActiveTests";
import { devURL } from "../../components/constants";
import Gallery from "../../components/Gallery";
import styles from "../styles/main.module.scss";
const main = () => {
  const getTestsByActive = async (isTestActive: boolean): Promise<any> => {
    try {
      const tests = await Axios.get(
        `http://localhost:4000/tests/getTest?active=${isTestActive}`
      );
      return tests.data as ITest[];
    } catch (error) {
      alert(error);
      return [];
    }
  };

  const [tests, setTests] = useState<{
    activeTests: ITest[];
    inActiveTests: ITest[];
  }>({
    activeTests: [],
    inActiveTests: [],
  });

  const getAllTests = async () => {
    const serverResponse = await Axios.get(`${devURL}tests/allTests`);
    const data = serverResponse.data;
    console.log("Main test fethcer");
    let tmpactiveTests: Array<ITest> = [];
    let tmpinActiveTests: Array<ITest> = [];
    filterTests(tmpactiveTests, tmpinActiveTests, data);
    setTests({
      activeTests: tmpactiveTests,
      inActiveTests: tmpinActiveTests,
    });
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

  const toggleTest = (testID: string, isActive: boolean) => {
    console.log("toggling test", isActive);
    let tmpActive = tests.activeTests;
    let tmpInactive = tests.inActiveTests;
    let combinedTests = [...tests.activeTests, ...tests.inActiveTests];
    console.log(combinedTests, "before changing the toggle");
    /*  if (isActive) {
      tmpActive = tests.activeTests.map((test: ITest) => {
        if (test._id !== testID) return test;
        else {
          tmpInactive.push(test);
        }
      });
    } else {
      tmpInactive = tests.inActiveTests.map((test: ITest) => {
        if (test._id !== testID) return test;
        else {
          tmpActive.push(test);
        }
      });
    } */

    combinedTests.forEach((test: ITest) => {
      if (test._id === testID) {
        console.log("Match", test._id);
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
    console.log("after changing toggle", combinedTests);
    setTests({
      activeTests: tmpActive,
      inActiveTests: tmpInactive,
    });
  };

  useEffect(() => {
    getAllTests();
  }, []);

  return (
    <div className={styles.MainContainer}>
      <ActiveTests
        // getActiveTests={getTestsByActive}
        activeTests={tests.activeTests}
        updateTheTests={toggleTest}
      />
      <Gallery
        // getInactiveTests={getTestsByActive}
        testsToRender={tests.inActiveTests}
        updateTheTests={toggleTest}
      />
    </div>
  );
};

export default main;
