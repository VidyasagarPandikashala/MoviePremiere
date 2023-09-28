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
      <div className={styles.home_page_background}>
        <nav className={styles.nav_wrapper}>
          <NavigationBar
            className={styles.nav_component}
            handleOnSearch={searchEventHandler}
            searchedData={data}
            onClickHandler={onClickEventHandler}
            clickedOverlay={clickedOverlay}
          ></NavigationBar>
        </nav>
        <main className={styles.main_section}>
          <section className={styles.header_section}>
            <MovieCarousal></MovieCarousal>
            <ComingSoonCard
              className={styles.list_style_comingsoon}
            ></ComingSoonCard>
          </section>
          <section className={styles.display_in_vertical_carousal}>
            <TopRated />
          </section>
        </main>
      </div>
    </>
  );
};
export default HomePage;
