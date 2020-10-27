import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import FMLogo from "./FMlogo";
// import FMLogo from "../GAssets/logo.png";
// import "react-multi-carousel/lib/styles.css";

import compStyle from "./styles/PagesController.module.scss";

const PagesController = (props: {
  activePage: number;
  setActivePage: (index: number) => void;
  currentPages: number;
}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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

  const [pagesAmount, setPagesAmount] = useState<Array<number>>([
    ...Array(props.currentPages).keys(),
  ]);

  useEffect(() => {
    setPagesAmount([...Array(props.currentPages).keys()]);
    if (didMountRef.current) {
      console.log("component mounted");
    } else {
      console.log("componenet updated");
    }
  }, [props.currentPages]);

  useEffect(() => {});

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
    const pagesArray = Array.from(
      document.getElementsByClassName(compStyle.Page)
    );
    pagesArray.forEach((page, index) => {
      index === indexOfActivePage
        ? page.classList.add(compStyle.Selected)
        : page.classList.remove(compStyle.Selected);
    });
    props.setActivePage(indexOfActivePage);
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
          showDots
          ssr
        >
          {pagesAmount.map((page) => {
            return (
              <div
                key={page}
                id={String(page)}
                onClick={(e) => handlePageClick(e, page)}
                className={compStyle.Page}
              >
                <div>
                  <FMLogo />
                  <span>{page + 1}</span>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
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

export default PagesController;
