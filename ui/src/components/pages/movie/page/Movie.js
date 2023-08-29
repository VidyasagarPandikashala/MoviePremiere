import React, { useEffect, useState } from "react"; // Import necessary dependencies
import moviePageApi from "../api/moviePageApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import Logo from "../../../shared/components/util-components/Logo";
import styles from "./Movie.module.css";
import FavouritesIcon from "../../../shared/components/util-components/FavouritesIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  clearData,
  getAllfavouritesForCurrentUser,
  toggle,
} from "../../favourite/redux/FavouritesSlice";

function MoviePage() {
  const params = useParams();
  const loginStatus = useSelector((state) => state.login.isLoggedIn);
  const favouriteList = useSelector(
    (state) => state.favourite.favouriteMovieIds
  );
  console.log(favouriteList);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [favourite, setFavourite] = useState(false);
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    if (loginStatus) {
      dispatch(getAllfavouritesForCurrentUser());
    } else {
      setFavourite(false);
      dispatch(clearData());
    }
  }, [dispatch, loginStatus]);

  useEffect(() => {
    setFavourite(favouriteList.has(parseInt(params.movieId), 10));
  }, [favouriteList, params.movieId]);

  function handleFavouritesToggle() {
    if (loginStatus) {
      moviePageApi
        .toggleAction(params.movieId)
        .then((response) => response.json())
        .then((data) => {
          dispatch(getAllfavouritesForCurrentUser());
        });
    } else {
      navigate("/login");
    }
  }

  useEffect(() => {
    console.log(favourite);
  }, [favourite]);

  useEffect(() => {
    moviePageApi.movieData(params.movieId, 1).then((data) => {
      setMovieData(data);
    });
  }, [params.movieId]);

  if (!movieData) {
    return <div>Loading...</div>;
  }
  console.log(favouriteList);
  return (
    <div className={styles.movieBackground}>
      <Link to="/">
        {" "}
        <Logo className={styles.logo}></Logo>
      </Link>
      <FavouritesIcon
        className={styles.favIcon}
        onToggle={handleFavouritesToggle}
        classStyle={favourite ? "iconAdded" : "iconNotAdded"}
      ></FavouritesIcon>
      <img
        src={movieData.imageUrl}
        className={styles.backgroundPoster}
        alt="movie-name"
      />
      <h1 className={styles.moviename}>{movieData.movieName}</h1>
      <h3 className={styles.releaseDate}>{movieData.releaseDate}</h3>
    </div>
  );
}
export default MoviePage;
