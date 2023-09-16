import { Link, useLoaderData } from "react-router-dom";
import styles from "./ComingSoonCard.module.css";

function ComingSoonCard() {
  const movieList = useLoaderData().dataForComingList;

  // const favorites = useSelector(() => store.favorites);
  const handleImageError = (event) => {
    event.target.style.display = "none";
  };
  return (
    <div className={styles.wrapperContainer}>
      <h3 className={styles.movieSectionName}>coming soon...</h3>
      <div className={styles.movieListContainer}>
        {movieList.map((movie) => {
          return (
            <Link to={`movie/${movie.movieId}`}>
              <div className={styles.movieContainer} key={movie.movieId}>
                <div className={styles.imageContainer}>
                  <img
                    class={styles.image}
                    src={movie.imageUrl}
                    alt={movie.movieName}
                    onError={handleImageError}
                  />
                </div>
                <div className={styles.movieNameContainer}>
                  <p className={styles.movieName}>{movie.movieName}</p>
                </div>
                <div className={styles.movieYearContainer}>
                  <p className={styles.movieYear}>{movie.releaseDate}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ComingSoonCard;
