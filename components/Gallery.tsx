import React from "react";
import TestCard from "./TestCard";
import searchIcon from "../GAssets/search_big.png";
import styles from "./styles/Gallery.module.scss";

const Gallery = (props: any) => {
  return (
    <div className={styles.Gallery}>
      <h1>Test gallery</h1>
      <div className={styles.SearchAndFilter}>
        {/* //* Search Bar */}
        <div className={styles.SearchContainer}>
          <input type="search" name="testSearch" id="testSearch" />
          <button>
            <img src={searchIcon} alt="Looking glass icon" />
          </button>
        </div>
        {/* //* Test type filter */}
        <select name="testTypeSelector" className={styles.FilterContainer}>
          <option value="">Type1</option>
          <option value="">Type2</option>
          <option value="">Type3</option>
          <option value="">Type4</option>
          <option value="">Type5</option>
        </select>
      </div>
      {/* //* Test Gallery */}
      <div className={styles.tCardContainer}>
        <TestCard />
        <TestCard />
        <TestCard />
        <TestCard />
        <TestCard />
        <TestCard />
        <TestCard />
        <TestCard />
        <TestCard />
        <TestCard />
        <TestCard />
        <TestCard />
        <TestCard />
        <TestCard />
        <TestCard />
        <TestCard />
        <TestCard />
        <TestCard />
        <TestCard />
        <TestCard />
      </div>
    </div>
  );
};

export default Gallery;
