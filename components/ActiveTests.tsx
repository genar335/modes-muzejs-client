import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import TestCard from "./TestCard";
import styles from "./styles/ActiveTests.module.scss";
import { brown } from "./constants";
import { NextRouter, useRouter } from "next/router";
import { ITest } from "../@types/test";
import Axios from "axios";

const ActiveTests = (props: {
  // getActiveTests: (active: boolean) => Promise<any>;
  activeTests: ITest[];
  updateTheTests: (testID: string) => void;
  fetchAllTests: () => Promise<void>;
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
    // alert("Test addition should be happening right about now.");
    router.push(`/TMS/create_test`);
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button className={styles.carRightArrow} onClick={() => onClick()}>
        {Arrow()}
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return (
      <button onClick={() => onClick()} className={styles.carLeftArrow}>
        {Arrow()}
      </button>
    );
  };

  const Arrow = () => (
    <svg
      width="15"
      height="26"
      viewBox="0 0 15 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 24L13 13L2 2"
        stroke="#2F4858"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  return (
    <div className={styles.ActiveTestsContainer}>
      <h1>Active tests</h1>

      <div className={styles.CarouselContainer}>
        {addATest(handleAddTestClick)}
        <Carousel
          responsive={responsive}
          ssr
          containerClass={styles.Carousel}
          itemClass={styles.Item}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          showDots
          // dotListClass={styles.customDotListStyle}
        >
          {props.activeTests.map((test: ITest, iterator: number) => (
            <TestCard
              key={iterator}
              iterator={iterator}
              colour="white"
              _id={test._id || "NA"}
              active={true}
              nameInRu={test.ru.name}
              fullTest={test}
              // parentComponentTestFetcher={getTests}
              // mainTestFetcher={props.updateTheTests}
              updateTests={props.updateTheTests}
              fetchAllTests={props.fetchAllTests}
            />
          ))}
        </Carousel>
      </div>
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
