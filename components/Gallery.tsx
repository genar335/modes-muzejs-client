import React, { useEffect, useState } from "react";
import TestCard from "./TestCard";
import searchIcon from "../GAssets/search_big.png";
import styles from "./styles/Gallery.module.scss";
import { white } from "./constants";
import { ITest } from "../@types/test";

const Gallery = (props: {
  getInactiveTests: (active: boolean) => Promise<any>;
}) => {
  const [recievedTests, setRecievedTests] = useState<ITest[]>();
  const getTests = async () => {
    const fetchedTests: ITest[] = await props.getInactiveTests(false);
    setRecievedTests(fetchedTests);
  };

  useEffect(() => {
    getTests();
    console.log(recievedTests);
  }, []);

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
        {recievedTests !== undefined
          ? recievedTests.map((test: ITest, iterator: number) => (
              <div
                key={iterator}
                className={styles.tCardContainer}
                id={test._id}
              >
                <h1>{test.en.name}</h1>
                <p>{test.en.pages[0].QnAPairs[0].question}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Gallery;
