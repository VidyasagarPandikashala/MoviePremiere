import { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";

import SearchedList from "./SearchedList";

const SearchBar = ({
  searchedData,
  handleOnSearch,
  handleOnClick,
  clickedOverlay,
  isSearchListVisible,
  hamburgClick, // Pass the prop
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
      <div className={styles.search_bar_container}>
        <input
          onKeyUp={handleOnSearch}
          type="search"
          className={styles.search_bar}
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
