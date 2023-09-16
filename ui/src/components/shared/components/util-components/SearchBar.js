import { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";

import SearchedList from "./SearchedList";

const SearchBar = ({
  searchedData,
  handleOnSearch,
  handleOnClick,
  clickedOverlay,
  isSearchListVisible, // Pass the prop
}) => {
  const [isVisibleCondition, setisVisibleCondition] = useState(false);
  useEffect(() => {
    if (clickedOverlay) {
      setisVisibleCondition(false);
    } else {
      setisVisibleCondition(true);
    }
  }, [clickedOverlay, setisVisibleCondition]);
  return (
    <>
      <div className={styles.searchBarContainer}>
        <input
          onKeyUp={handleOnSearch}
          type="search"
          className={styles.searchBar}
          placeholder="search by movie name"
        />
        <SearchedList
          searchedData={searchedData}
          onClickHandler={handleOnClick}
          isVisible={isVisibleCondition}
        ></SearchedList>
      </div>
    </>
  );
};

export default SearchBar;
