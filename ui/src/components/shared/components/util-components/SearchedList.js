import { useEffect, useState } from "react";
import styles from "./SearchedList.module.css";
import { Link } from "react-router-dom";

function SearchedList({
  searchedData,
  onClickHandler,

  isVisible,
}) {
  const [isDataReceived, setIsDataReceived] = useState(false);

  useEffect(() => {
    setIsDataReceived(searchedData.length > 0);
  }, [searchedData]);

  if (!isDataReceived || !isVisible) {
    return null;
  }
  return (
    <div className={styles.searchListContainerActive} onClick={onClickHandler}>
      {searchedData.map((eachData, index) => {
        return (
          <Link to={`movie/${eachData.movieId}`}>
            <div className={styles.searchedMovieContainer} key={index}>
              <img
                className={styles.poster_background}
                src={eachData.imageUrl}
                alt={eachData.movieName}
              ></img>

              <div className={styles.imageContainer}>
                <img
                  className={styles.poster}
                  src={eachData.imageUrl}
                  alt={eachData.movieName}
                ></img>
              </div>
              <div className={styles.movie_name_wrapper}>
                <p className={styles.movie_name}>{eachData.movieName}</p>
              </div>
              <div className={styles.year_wrapper}>
                <p className={styles.year}>{eachData.year}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default SearchedList;
