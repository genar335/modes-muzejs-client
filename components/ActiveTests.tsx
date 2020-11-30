import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import TestCard from "./TestCard";
import styles from "./styles/ActiveTests.module.scss";
import { brown } from "./constants";
import { NextRouter, useRouter } from "next/router";
import { ITest } from "../@types/test";
import Axios from "axios";

const ActiveTests = (props: {
  getActiveTests: (active: boolean) => Promise<any>;
  activeTest: ITest[];
  updateTheTests: (testID: string) => void;
}) => {
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
        {
          /* recievedTests */ props.activeTest
            ? /* recievedTests */ props.activeTest.map(
                (test: ITest, iterator: number) => (
                  <TestCard
                    iterator={iterator}
                    colour="white"
                    _id={test._id || "NA"}
                    active={test.active}
                    nameInRu={test.ru.name}

                    // parentComponentTestFetcher={getTests}
                    // mainTestFetcher={props.updateTheTests}
                    updateTests={props.updateTheTests}
                  />
                )
              )
            : null
        }
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
