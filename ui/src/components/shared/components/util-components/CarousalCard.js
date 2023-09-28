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
      <div className={styles.wrapper_container}>
        <h3 className={styles.section_name}>LATEST RELEASES</h3>
        <div className={styles.left_btn_overlay}>
          <div className={styles.left_btn} onClick={prevBtnHandler}>{`<`}</div>
        </div>
        <div className={styles.right_btn_overlay}>
          <div className={styles.right_btn} onClick={nextBtnHandler}>{`>`}</div>
        </div>
        <Link to={`movie/${movieData[currentIndex].movieId}`}>
          <img
            className={styles.image}
            src={movieData[currentIndex].imageUrl}
            alt="movieName"
          />
          <div className={styles.text_overlay}></div>
          <div className={styles.movie_details}>
            <h3 className={styles.movie_name}>
              {movieData[currentIndex].movieName.toUpperCase()}
            </h3>
            <p className={styles.para}>{movieData[currentIndex].releaseDate}</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default CarousalCard;
