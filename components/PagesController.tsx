import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import { responsive } from "./constants";
import FMLogo from "./FMlogo";
// import "react-multi-carousel/lib/styles.css";

import compStyle from "./styles/PagesController.module.scss";

const PagesController = (props: {
  activePage: number;
  setActivePage: (index: number) => void;
  currentPages: number;
}) => {
  const [pagesAmount, setPagesAmount] = useState<Array<number>>([
    ...Array(props.currentPages).keys(),
  ]);

  useEffect(() => {
    setPagesAmount([...Array(props.currentPages).keys()]);
    // if (didMountRef.current) {
    //   console.log("component mounted");
    // } else {
    //   console.log("componenet updated");
    // }
  }, [props.currentPages]);
  //* Effect for setting the border to the first page when there are no other pages.
  useEffect(() => {
    if (document.getElementsByClassName(compStyle.Page).length <= 1) {
      document.getElementById("0")?.classList.add(compStyle.Selected);
    }
  });

  const didMountRef = useRef();

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button className={compStyle.carRightArrow} onClick={() => onClick()}>
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
      <button onClick={() => onClick()} className={compStyle.carLeftArrow}>
        {Arrow()}
      </button>
    );
  };

  const handlePageClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    indexOfActivePage: number
  ) => {
    console.log("clicked on a page", e.currentTarget.id);
    const pagesArray = getAllPages();
    setActivePage(pagesArray, indexOfActivePage, props);
  };

  return (
    <div className={compStyle.Wrapper}>
      <div className={compStyle.BGContainer}>
        <Carousel
          containerClass={compStyle.Carousel}
          itemClass={compStyle.Item}
          responsive={responsive}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          dotListClass={compStyle.CarouselDots}
          showDots
          // ssr
        >
          {pagesAmount.map((page) => {
            return (
              <div
                key={page}
                id={String(page)}
                onClick={(e) => handlePageClick(e, page)}
                className={`${compStyle.Page}`}
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 1 },
                  }}
                  animate="hidden"
                >
                  <FMLogo />
                  <span>{page + 1}</span>
                </motion.div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export const Arrow = (width?: string, height?: string) => (
  <svg
    width={`${width || "15"}`}
    height={`${height || "21"}`}
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

export default PagesController;

function getAllPages() {
  return Array.from(document.getElementsByClassName(compStyle.Page));
}

function setActivePage(
  pagesArray: Element[],
  indexOfActivePage: number,
  props: {
    activePage: number;
    setActivePage: (index: number) => void;
    currentPages: number;
  }
) {
  // console.log("setting the green border");
  pagesArray.forEach((page, index) => {
    index === indexOfActivePage
      ? page.classList.add(compStyle.Selected)
      : page.classList.remove(compStyle.Selected);
  });
  props.setActivePage(indexOfActivePage);
}
