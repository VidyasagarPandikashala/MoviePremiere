import styles from "./SearchBar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import SearchedList from "./SearchedList";

const SearchBar = ({ searchedData, onSearch }) => {
  return (
    <>
      <div className={styles.searchBarContainer}>
        <input
          onKeyDown={onSearch}
          type="search"
          className={styles.searchBar}
          placeholder="search by movie name"
        ></input>
        <SearchedList searchedData={searchedData}></SearchedList>
        <FontAwesomeIcon className={styles.upArrow} icon={faArrowUp} />
        <FontAwesomeIcon className={styles.downArrow} icon={faArrowDown} />
      </div>
    </>
  );
};

export default SearchBar;
