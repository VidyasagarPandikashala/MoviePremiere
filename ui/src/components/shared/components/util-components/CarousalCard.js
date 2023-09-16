import { useState } from "react";
import styles from "./CarousalCard.module.css";
import { Link } from "react-router-dom";

function CarousalCard({ movieData }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function prevBtnHandler() {
    if (currentIndex === 0) {
      setCurrentIndex(movieData.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }
  function nextBtnHandler() {
    if (currentIndex === movieData.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }
  return (
    <>
      <div className={styles.wrapperContainer}>
        <div className={styles.leftBtnOverlay}>
          <div className={styles.leftBtn} onClick={prevBtnHandler}>{`<`}</div>
        </div>
        <div className={styles.rightBtnOverlay}>
          <div className={styles.rightBtn} onClick={nextBtnHandler}>{`>`}</div>
        </div>
        <Link to={`movie/${movieData[currentIndex].movieId}`}>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={movieData[currentIndex].imageUrl}
              alt="movieName"
            />
            <div className="imageOverlay"></div>
          </div>
        </Link>
        <div className={styles.movieDetails}>
          <h3 className={styles.h3}>
            {movieData[currentIndex].movieName.toUpperCase()}
          </h3>
          <p className={styles.para}>{movieData[currentIndex].releaseDate}</p>
        </div>
      </div>
    </>
  );
}

export default CarousalCard;
