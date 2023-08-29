import { useEffect, useState } from "react";
import styles from "./SearchedList.module.css";

function SearchedList({ searchedData }) {
  const [isDataReceived, setIsDataReceived] = useState(false);

  useEffect(() => {
    setIsDataReceived(searchedData.length > 0);
  }, [searchedData]);

  if (!isDataReceived) {
    return null;
  }

  return (
    <div className={styles.searchListContainerActive}>
      {searchedData.map((eachData, index) => {
        return (
          <div className={styles.searchedMovieContainer} key={index}>
            <div className={styles.imageContainer}>
              <img
                className={styles.poster}
                src={eachData.imageUrl}
                alt={eachData.movieName}
              ></img>
            </div>
            <p className={styles.movieName}>{eachData.movieName}</p>
            <p className={styles.year}>{eachData.year}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SearchedList;