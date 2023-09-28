import React, { useState } from "react";
import Logo from "../util-components/Logo";
import SearchBar from "../util-components/SearchBar";
import NavLinks from "../util-components/NavLinks";
import styles from "./NavigationBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = ({
  searchedData,
  handleOnSearch,
  onClickHandler,
  clickedOverlay,
}) => {
  const [hamburgClicked, setHamburgClicked] = useState(false);
  function hamburgOnclickHandler() {
    setHamburgClicked(true);
  }

  return (
    <div className={styles.navigation_container}>
      <Logo className={styles.logo}></Logo>
      <SearchBar
        handleOnSearch={handleOnSearch}
        searchedData={searchedData}
        handleOnClick={onClickHandler}
        overlayClicked={clickedOverlay}
      ></SearchBar>
      <NavLinks className={styles.nav_links}></NavLinks>
      <FontAwesomeIcon
        className={styles.hamburg_icon}
        icon={faBars}
        onClick={hamburgOnclickHandler}
      />
      {/* {hamburgClicked && (
        <SearchNavLinkMobile
          handleOnSearch={handleOnSearch}
          searchedData={searchedData}
          onClickHandler={onClickHandler}
          overlayClicked={clickedOverlay}
        />
      )} */}
    </div>
  );
};
export default NavigationBar;
