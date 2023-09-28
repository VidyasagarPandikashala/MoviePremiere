import { useLoaderData } from "react-router";
import styles from "./TopRated.module.css";
import MovieCard from "../util-components/MovieCard";
import { useSelector } from "react-redux";
import { useState } from "react";

function TopRated() {
  const selector = useSelector((state) => state.favourite.favouriteMovieIds);
  const movieList = useLoaderData().dataForTopRated;
  const loginStatus = useSelector((state) => state.login.isLoggedIn);
  if (movieList.length === 0 || null) {
    return <></>;
  }

  return (
    <div className={styles.movie_container}>
      <div className={styles.sectionName}>
        <h1 className={styles.section_title}>TOP RATED</h1>
      </div>
      <div className={styles.movieListContainer}>
        {movieList.map((movie) => {
          return (
            <div className={styles.movieCard}>
              <MovieCard
                className={styles.movieCard}
                customClassNameFavIcon={"fav_icon_container_top_rated_page"}
                movieData={movie}
                loginStatus={loginStatus}
                favouriteExist={selector.has(movie.movieId)}
                customContainerClassName={"section_topRated_card_container"}
                key={movie.movieId}
              ></MovieCard>
            </div>

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
    </div>
  );
}

export default TopRated;
