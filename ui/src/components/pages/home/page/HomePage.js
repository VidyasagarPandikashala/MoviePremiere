import React, { useState, useEffect } from "react";

import styles from "./HomePage.module.css";
import HomePageApi from "../api/homePageApi";
import NavigationBar from "../../../shared/components/subComponents/NavigationBar";
import MovieCarousal from "../../../shared/components/subComponents/MovieCarousal";
import ComingSoonCard from "../../../shared/components/subComponents/ComingSoonCard";
import { useDebounce } from "@uidotdev/usehooks";
import TopRated from "../../../shared/components/subComponents/TopRated";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [searchedKeys, setSearchedKeys] = useState("");
  const [clickedOverlay, setClickedOverlay] = useState(false);

  function onClickEventHandler() {
    setClickedOverlay(!clickedOverlay); // Toggle the overlay
  }
  const debouncedSearchTerm = useDebounce(searchedKeys, 1000);

  function searchEventHandler(event) {
    setClickedOverlay(false);
    setSearchedKeys(event.target.value ? event.target.value : "");
  }
  async function searchedData(searchedKeys) {
    if (searchedKeys.length >= 3) {
      const searchData = await HomePageApi.searchedResult(searchedKeys);
      setData(searchData);
    } else {
      setData([]);
    }
  }
  useEffect(() => {
    searchedData(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <>
      <NavigationBar
        handleOnSearch={searchEventHandler}
        searchedData={data}
        onClickHandler={onClickEventHandler}
        clickedOverlay={clickedOverlay}
      ></NavigationBar>
      <main className={styles.mainSection}>
        <section className={styles.headerSection}>
          <MovieCarousal></MovieCarousal>
          <ComingSoonCard></ComingSoonCard>
          <TopRated />
        </section>
      </main>
    </>
  );
};
export default HomePage;
