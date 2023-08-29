import React, { useState, useEffect } from "react";

import styles from "./HomePage.module.css";
import HomePageApi from "../api/homePageApi";
import NavigationBar from "../../../shared/components/subComponents/NavigationBar";
import MovieCarousal from "../../../shared/components/subComponents/MovieCarousal";
import ComingSoonCard from "../../../shared/components/subComponents/ComingSoonCard";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [searchedKeys, setSearchedKeys] = useState("");

  function searchEventHandler(event) {
    setSearchedKeys(event.target.value);
  }

  useEffect(() => {
    async function searchedData(searchedKeys) {
      if (searchedKeys !== "") {
        const searchData = await HomePageApi.searchedResult(searchedKeys);
        setData(searchData);
      }
    }
    searchedData(searchedKeys);
  }, [searchedKeys]);

  return (
    <>
      <NavigationBar
        onSearch={searchEventHandler}
        searchedData={data}
      ></NavigationBar>
      <main>
        <section className={styles.headerSection}>
          <MovieCarousal></MovieCarousal>
          <ComingSoonCard></ComingSoonCard>
        </section>
      </main>
    </>
  );
};
export default HomePage;
