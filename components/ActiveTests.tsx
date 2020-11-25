import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import TestCard from "./TestCard";
import styles from "./styles/ActiveTests.module.scss";
import { brown } from "./constants";
import { NextRouter, useRouter } from "next/router";
import { NextApiHandler } from "next";
import { ITest } from "../@types/test";
import Axios from "axios";

const ActiveTests = (props: {
  getActiveTests: (active: boolean) => Promise<any>;
}) => {
  const createTestToRender = async () => {
    return await props.getActiveTests(false);
  };

  const [recievedTests, setRecievedTests] = useState<ITest[]>();
  const getTests = async () => {
    // try {
    //   const rTests = await Axios.get(
    //     `http://localhost:4000/tests/getTest?active=${false}`
    //   );
    //   console.log(rTests.data);
    //   setRecievedTests(rTests.data);
    // } catch (error) {
    //   alert(error);
    // }
    const fetchedTests: ITest[] = await props.getActiveTests(true);
    setRecievedTests(fetchedTests);
  };
  useEffect(() => {
    getTests();
    console.log(recievedTests);
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const router: NextRouter = useRouter();

  const handleAddTestClick = () => {
    alert("Test addition should be happening right about now.");
    router.push(`/TMS/create_test`);
  };

  return (
    <div className={styles.ActiveTestsContainer}>
      <h1>Active tests</h1>
      <Carousel
        responsive={responsive}
        ssr={true}
        className={styles.Carousel}
        showDots={true}
        dotListClass={styles.customDotListStyle}
      >
        {addATest(handleAddTestClick)}
        {recievedTests
          ? recievedTests.map((test: ITest, iterator: number) => (
              <div key={iterator} id={test._id}>
                <h1>{test.en.name}</h1>
              </div>
            ))
          : null}
      </Carousel>
    </div>
  );
};

export default ActiveTests;
function addATest(handleAddTestClick: () => void) {
  return (
    <div
      onClick={handleAddTestClick}
      id="AddTest"
      className={styles.AddTestCard}
    >
      <span>+</span>
    </div>
  );
}
