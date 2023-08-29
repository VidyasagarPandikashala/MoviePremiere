import styles from "./CarousalCard.module.css";

function CarousalCard({ movieData }) {
  return (
    <div className={styles.wrapperContainer}>
      {movieData.map((data) => {
        return (
          <div className={styles.imageContainer} key={data.movieId}>
            <img
              src={data.imageUrl}
              className={styles.timelinePoster}
              alt="timelineposter"
            />
            <div className={styles.timelineOverlay}></div>
            <div className={styles.overLay}>
              <h1 className={styles.movieTitle}>{data.movieName}</h1>
              <h3 className={styles.movieYear}>{data.releaseDate}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CarousalCard;
