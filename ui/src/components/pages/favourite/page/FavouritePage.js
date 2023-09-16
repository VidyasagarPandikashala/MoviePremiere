import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearData } from "../redux/FavouritesSlice";
import { FavouritePageApi } from "../api/favouritesPageApi";
import MovieCard from "../../../shared/components/util-components/MovieCard";
import styles from "./FavouritePage.module.css";
import { Link } from "react-router-dom";
import Logo from "../../../shared/components/util-components/Logo";
import Button from "../../../shared/components/util-components/Button";

function FavouritePage() {
  const selector = useSelector((state) => state.favourite.favouriteMovieIds);
  const loginStatus = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();
  console.log(selector);
  const [favMovies, setFavMovies] = useState([]);

  useEffect(() => {
    if (loginStatus) {
      setFavMovies([]);
      selector.forEach((eachId) => {
        FavouritePageApi.getMovieDataForFavourites(eachId, 1).then((data) => {
          setFavMovies((prevFavMovies) => [...prevFavMovies, data]);
        });
      });
    } else {
      setFavMovies([]);
      dispatch(clearData());
    }
  }, [selector, loginStatus, dispatch]);

  if (!loginStatus) {
    return (
      <>
        <h3>If not loggedIn Please click the button below</h3>
        <Button action={"login"} redirect={"login"}></Button>
        <Button action={"sign-up"} redirect={"sign-up"}></Button>
      </>
    );
  }

  if (favMovies.length === 0) {
    return <div>No favourites...</div>;
  }
  return (
    <>
      <Link to="/">
        <Logo></Logo>
      </Link>
      <div className={styles.movieCard}>
        {favMovies.map((movieData) => {
          return (
            <MovieCard
              key={movieData.movieId}
              customClassNameFavIcon={"favIconContainerFavPage"}
              movieData={movieData}
              favouriteExist={selector.has(movieData.movieId)}
              customContainerClassName={"sectionFavCardContainer"}
            ></MovieCard>
          );
        })}
      </div>
    </>
  );
}

export default FavouritePage;
