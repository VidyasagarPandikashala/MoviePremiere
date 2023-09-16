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
} from "../../favourite/redux/FavouritesSlice";
import AboutSection from "../../../shared/components/subComponents/AboutSection";
import ReviewSection from "../../../shared/components/subComponents/ReviewSection";
import reviewApi from "../api/reviewApi";
import setCookie from "../../../shared/utils/cookies/setCookies";

function MoviePage() {
  const params = useParams();
  const loginStatus = useSelector((state) => state.login.isLoggedIn);
  const favouriteList = useSelector(
    (state) => state.favourite.favouriteMovieIds
  );
  // console.log(favouriteList);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [favourite, setFavourite] = useState(false);
  const [movieData, setMovieData] = useState(null);
  const [aboutClicked, setAboutClicked] = useState(false);
  const [reviewClicked, setReviewClicked] = useState(false);
  const [reviewExists, setReviewExists] = useState(false);

  useEffect(() => {
    if (loginStatus) {
      dispatch(getAllfavouritesForCurrentUser());
      // Use optional chaining here
    } else {
      setFavourite(false);
      dispatch(clearData());
    }
  }, [dispatch, loginStatus, movieData?.movieId]); // Use optional chaining here

  useEffect(() => {
    setFavourite(favouriteList.has(parseInt(params.movieId, 10)));
  }, [favouriteList, params.movieId]);

  useEffect(() => {
    moviePageApi.movieData(params.movieId, 1).then((data) => {
      setMovieData(data);
    });
  }, [params.movieId]);

  function handleAboutClickEvent() {
    setAboutClicked(true);
    setReviewClicked(false);
  }
  function handleReviewClickEvent() {
    setAboutClicked(false);
    setReviewClicked(true);
  }
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
    if (loginStatus) {
      reviewApi
        .isReviewExist(params.movieId)
        .then((response) => response.json())
        .then((data) => console.log(data));

      reviewApi
        .isReviewExist(params.movieId)
        .then((response) => response.json())
        .then((data) => setReviewExists(data));
    } // Set reviewExists directly
  }, [loginStatus, params.movieId]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.movieBackground}>
        <div className={styles.movieBackgroundOverlay} />
        <Link to="/">
          {" "}
          <Logo className={styles.logo}></Logo>
        </Link>
        <FavouritesIcon
          className={styles.favIcon}
          customClassNameFavIcon={"favIconContainerMoviePage"}
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

        <div className={styles.toggleAboutAndReview}>
          <div className={styles.aboutWrapper} onClick={handleAboutClickEvent}>
            <h3>about</h3>
            {aboutClicked ? <AboutSection /> : <></>}
          </div>

          <div
            className={styles.reviewWrapper}
            onClick={handleReviewClickEvent}
          >
            <h3>Rating</h3>
            {reviewClicked ? (
              <ReviewSection
                movieId={movieData.movieId}
                reviewExist={reviewExists}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default MoviePage;
