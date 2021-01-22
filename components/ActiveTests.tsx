import React, { useCallback, useEffect, useRef, useState } from "react";
// import Carousel from "react-multi-carousel";
// import { Carousel } from "primereact/carousel";
import TestCard from "./TestCard";
import styles from "./styles/ActiveTests.module.scss";
import { brown, white } from "./constants";
import { NextRouter, useRouter } from "next/router";
import { ITest } from "../@types/test";
import Axios from "axios";
import Test from "../pages/client/test";
import { useEmblaCarousel } from "embla-carousel/react";
import Carousel from "react-multi-carousel";
import Collapsible from "react-collapsible";

const ActiveTests = (props: {
  // getActiveTests: (active: boolean) => Promise<any>;
  activeTests: ITest[];
  updateTheTests: (testID: string) => void;
  fetchAllTests: () => Promise<void>;
  tests: { activeTests: ITest[]; inActiveTests: ITest[] };
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

  // const CustomRightArrow = ({ onClick, ...rest }) => {
  //   const {
  //     onMove,
  //     carouselState: { currentSlide, deviceType },
  //   } = rest;
  //   // onMove means if dragging or swiping in progress.
  //   return (
  //     <button className={styles.carRightArrow} onClick={() => onClick()}>
  //       {Arrow()}
  //     </button>
  //   );
  // };

  // const CustomLeftArrow = ({ onClick, ...rest }) => {
  //   const {
  //     onMove,
  //     carouselState: { currentSlide, deviceType },
  //   } = rest;
  //   return (
  //     <button onClick={() => onClick()} className={styles.carLeftArrow}>
  //       {Arrow()}
  //     </button>
  //   );
  // };

  const Arrow = () => (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="28" cy="28" r="28" fill="#2F4858" />
      <path
        d="M22 41L35 28L22 15"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const [TestCardArray, setTestCardArray] = useState<Array<React.ReactNode>>(
    []
  );

  const slideCss: React.CSSProperties = {
    width: "min-content",
    height: "min-content",
    position: "relative",
  };

  useEffect(() => {
    setTestCardArray(PrepareTestCardsJSX(props, slideCss));
  }, [props.tests]);

  function isTriggerDisabled(ref) {
    console.log(ref.props.triggerDisabled);
  }

  const collapsibleRef = useRef(null);

  return (
    <div className={styles.ActiveTestsContainer}>
      <h1 className={styles.ActiveTestsHeader}>Активные тесты</h1>

      <div className={styles.CarouselContainer}>
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            // gridTemplateRows: 'auto',
            placeItems: "center",
          }}
        >
          <div style={slideCss}>{addATest(handleAddTestClick)}</div>
          {/* <Carousel
          responsive={responsive}
          ssr
          containerClass={styles.Carousel}
          itemClass={styles.Item}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          showDots
          // dotListClass={styles.customDotListStyle}
        > */}
          {TestCardArray.slice(0, 3)}
        </div>
        {/* <div> */}
        <Collapsible
          ref={collapsibleRef}
          contentInnerClassName={styles.CollapsibleContentInner}
          contentOuterClassName={styles.CollapsibleContentOuter}
          triggerClassName={styles.CollapsibleTrigger}
          triggerOpenedClassName={styles.CollapsibleTriggerOpen}
          className={styles.Collapsible}
          openedClassName={styles.Collapsible}
          triggerDisabled={TestCardArray.length <= 3}
          trigger={
            <div
              style={{
                transform: "rotate(90deg)",
                filter: collapsibleRef.current?.props?.triggerDisabled
                  ? "brightness(0.5)"
                  : "brightness(1)",
              }}
            >
              {Arrow()}
            </div>
          }
        >
          {/* {PrepareTestCardsJSX(props, slideCss)} */}
          {TestCardArray.slice(3)}
        </Collapsible>
        {/* </div> */}
        {/* </Carousel> */}
      </div>
    </div>
  );
};

export default ActiveTests;
function PrepareTestCardsJSX(
  props: {
    activeTests: ITest[];
    updateTheTests: (testID: string) => void;
    fetchAllTests: () => Promise<void>;
  },
  slideCss: React.CSSProperties
): React.ReactNode[] {
  return props.activeTests.map((test: ITest, iterator: number) => (
    <div
      id={`carouselSlide_${iterator}`}
      style={slideCss}
      key={`slide_${iterator}`}
    >
      <TestCard
        key={iterator}
        iterator={iterator}
        colour="white"
        _id={test._id || "NA"}
        active={true}
        nameInRu={test.ru.name}
        fullTest={test}
        updateTests={props.updateTheTests}
        fetchAllTests={props.fetchAllTests}
      />
    </div>
  ));
}

function addATest(handleAddTestClick: () => void) {
  return (
    <div
      onClick={handleAddTestClick}
      id="AddTest"
      className={styles.AddTestCard}
    >
      {PlusSign()}
    </div>
  );
}

/**
 * Returns an SVG plus sign
 * @param widthHeight Width and height of the plus icon in pixels.
 */
export const PlusSign = (
  widthHeight: number = 150,
  colour: string = "white"
): JSX.Element => (
  <svg
    width={widthHeight}
    height={widthHeight}
    viewBox="0 0 75 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M71.2495 33.7499H41.2501V3.74976C41.2501 1.68022 39.5699 0 37.4997 0C35.4301 0 33.7499 1.68022 33.7499 3.74976V33.7499H3.74976C1.68022 33.7499 0 35.4301 0 37.4997C0 39.5699 1.68022 41.2501 3.74976 41.2501H33.7499V71.2495C33.7499 73.3198 35.4301 75 37.4997 75C39.5699 75 41.2501 73.3198 41.2501 71.2495V41.2501H71.2495C73.3198 41.2501 75 39.5699 75 37.4997C75 35.4301 73.3198 33.7499 71.2495 33.7499Z"
      fill={colour}
    />
  </svg>
);
