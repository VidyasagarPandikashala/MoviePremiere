import { Link, useLoaderData } from "react-router-dom";
import styles from "./ComingSoonCard.module.css";

function ComingSoonCard() {
  const movieList = useLoaderData().dataForComingList;

  // const favorites = useSelector(() => store.favorites);
  const handleImageError = (event) => {
    event.target.style.display = "none";
  };
  return (
    <div className={styles.wrapper_container}>
      <h3 className={styles.movie_section_name}>COMING SOON</h3>
      <div className={styles.movie_list_container}>
        {movieList.map((movie) => {
          return (
            <Link to={`movie/${movie.movieId}`}>
              <div
                className={styles.movie_detail_container}
                key={movie.movieId}
              >
                <div className={styles.image_overlay_container}>
                  <img
                    className={styles.image_overlay}
                    src={movie.imageUrl}
                    alt={movie.movieName}
                    onError={handleImageError}
                  />
                </div>
                <div className={styles.imageContainer}>
                  <img
                    className={styles.image}
                    src={movie.imageUrl}
                    alt={movie.movieName}
                    onError={handleImageError}
                  />
                </div>
                <div className={styles.movie_name_container}>
                  <p className={styles.movieName}>
                    {movie.movieName.toUpperCase()}
                  </p>
                </div>
                <div className={styles.movieYearContainer}>
                  <p className={styles.movieYear}>{movie.year}</p>
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
