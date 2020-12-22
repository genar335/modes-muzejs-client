import React, { useCallback, useEffect, useState } from "react";
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
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  const viewportCss: React.CSSProperties = {
    overflow: "hidden",
    width: "100%",
    paddingLeft: "3rem",
  };
  const containerCss: React.CSSProperties = {
    display: "flex",
  };
  const slideCss: React.CSSProperties = {
    position: "relative",
    // minWidth: "33%",
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  // const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  // const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [
    emblaApi,
  ]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [
    emblaApi,
  ]);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    // setPrevBtnEnabled(emblaApi.canScrollPrev());
    // setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  return (
    <div className={styles.ActiveTestsContainer}>
      <h1 className={styles.ActiveTestsHeader}>Активные тесты</h1>

      <div className={styles.CarouselContainer}>
        {addATest(handleAddTestClick)}
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
        <button
          // disabled={prevBtnEnabled}
          style={{
            transform: "rotate(180deg)",
            backgroundColor: "rgba(0, 0, 0, 0)",
            border: "none",
            width: "min-width",
            position: "absolute",
            left: "2%",
          }}
          onClick={scrollPrev}
        >
          {Arrow()}
        </button>
        <div id="carouselViewport" style={viewportCss} ref={emblaRef}>
          <div id="carouselContainer" style={containerCss}>
            {props.activeTests.map((test: ITest, iterator: number) => (
              <div id="carouselSlide" style={slideCss}>
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
              </div>
            ))}
          </div>
        </div>
        <button
          // disabled={nextBtnEnabled}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            border: "none",
            width: "min-width",
            position: "absolute",
            right: "2%",
          }}
          onClick={scrollNext}
        >
          {Arrow()}
        </button>
        {/* </Carousel> */}
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
      {PlusSign()}
    </div>
  );
}

export const PlusSign = () => (
  <svg
    width="150"
    height="150"
    viewBox="0 0 75 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M71.2495 33.7499H41.2501V3.74976C41.2501 1.68022 39.5699 0 37.4997 0C35.4301 0 33.7499 1.68022 33.7499 3.74976V33.7499H3.74976C1.68022 33.7499 0 35.4301 0 37.4997C0 39.5699 1.68022 41.2501 3.74976 41.2501H33.7499V71.2495C33.7499 73.3198 35.4301 75 37.4997 75C39.5699 75 41.2501 73.3198 41.2501 71.2495V41.2501H71.2495C73.3198 41.2501 75 39.5699 75 37.4997C75 35.4301 73.3198 33.7499 71.2495 33.7499Z"
      fill="white"
    />
  </svg>
);
