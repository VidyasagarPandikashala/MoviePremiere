import React from "react";
import Logo from "../util-components/Logo";
import SearchBar from "../util-components/SearchBar";
import NavLinks from "../util-components/NavLinks";
import styles from "./NavigationBar.module.css";

const NavigationBar = ({
  searchedData,
  handleOnSearch,
  onClickHandler,
  clickedOverlay,
}) => {
  return (
    <div className={styles.navigationContainer}>
      <Logo></Logo>
      <SearchBar
        handleOnSearch={handleOnSearch}
        searchedData={searchedData}
        handleOnClick={onClickHandler}
        overlayClicked={clickedOverlay}
      ></SearchBar>
      <NavLinks></NavLinks>
    </div>
  );
};
export default NavigationBar;
