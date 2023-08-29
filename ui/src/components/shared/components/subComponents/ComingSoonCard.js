import { Link, useLoaderData } from "react-router-dom";
import styles from "./ComingSoonCard.module.css";
import { useDispatch, useSelector } from "react-redux";

function ComingSoonCard() {
  const movieList = useLoaderData().dataForComingList;
  console.log(movieList);
  // const favorites = useSelector(() => store.favorites);

  return (
    <div className={styles.wrapperContainer}>
      <h3>coming soon...</h3>
      <div className={styles.movieListContainer}>
        {movieList.map((movie) => {
          return (
            <Link to={`movie/${movie.movieId}`}>
              <div className={styles.movieContainer} key={movie.movieId}>
                <div className={styles.imageContainer}>
                  <img src={movie.imageUrl} alt={movie.movieName} />
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
