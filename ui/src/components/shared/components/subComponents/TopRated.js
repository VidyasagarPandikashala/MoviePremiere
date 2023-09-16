import { useLoaderData } from "react-router";
import styles from "./TopRated.module.css";
import MovieCard from "../util-components/MovieCard";
import { useSelector } from "react-redux";

function TopRated() {
  const selector = useSelector((state) => state.favourite.favouriteMovieIds);
  const movieList = useLoaderData().dataForTopRated;
  const loginStatus = useSelector((state) => state.login.isLoggedIn);
  return (
    <div className={styles.movieListContainer}>
      {movieList.map((movie) => {
        return (
          <MovieCard
            customClassNameFavIcon={"favIconContainerTopRatedPage"}
            movieData={movie}
            loginStatus={loginStatus}
            favouriteExist={selector.has(movie.movieId)}
            customContainerClassName={"sectionTopRatedCardContainer"}
          ></MovieCard>
          // <div className={styles.movieContainer} key={movie.movieId}>
          //   <div className={styles.imageContainer}>
          //     <img
          //       class={styles.image}
          //       src={movie.imageUrl}
          //       alt={movie.movieName}
          //     />
          //   </div>
          //   <div className={styles.movieNameContainer}>
          //     <p className={styles.movieName}>{movie.movieName}</p>
          //   </div>
          //   <div className={styles.movieYearContainer}>
          //     <p className={styles.movieYear}>{movie.releaseDate}</p>
          //   </div>
          // </div>
        );
      })}
    </div>
  );
}

export default TopRated;
