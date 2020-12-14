import React, { useEffect, useState } from "react";
import TestCard from "./TestCard";
import searchIcon from "../GAssets/search_big.png";
import styles from "./styles/Gallery.module.scss";
import { white } from "./constants";
import { ITest } from "../@types/test";

const Gallery = (props: {
  // getInactiveTests: (active: boolean) => Promise<any>;
  testsToRender: ITest[];
  updateTheTests: (testID: string) => void;
  fetchAllTests: () => Promise<void>;
}) => {
  const [recievedTests, setRecievedTests] = useState<ITest[]>();
  // const getTests = async () => {
  //   const fetchedTests: ITest[] = await props.getInactiveTests(false);
  //   setRecievedTests(fetchedTests);
  // };

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
        {props.testsToRender
          ? props.testsToRender.map((test: ITest, iterator: number) => (
              <TestCard
                fullTest={test}
                key={iterator}
                colour="brown"
                iterator={iterator}
                _id={test._id || "NA"}
                active={false}
                nameInRu={test.ru.name}
                // parentComponentTestFetcher={getTests}
                // mainTestFetcher={props.updateTheTest}
                updateTests={props.updateTheTests}
                fetchAllTests={props.fetchAllTests}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Gallery;
