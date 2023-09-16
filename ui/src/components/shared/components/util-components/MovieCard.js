import FavouritesIcon from "./FavouritesIcon";
import { FavouritePageApi } from "../../../pages/favourite/api/favouritesPageApi";
import { getAllfavouritesForCurrentUser } from "../../../pages/favourite/redux/FavouritesSlice";
import { useDispatch } from "react-redux";
import styles from "./MovieCard.module.css";

import { Link, useNavigate } from "react-router-dom";

function MovieCard({
  movieData,
  favouriteExist,
  customClassNameFavIcon,
  loginStatus,
  customContainerClassName,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className={styles[customContainerClassName]}>
        <Link to={`/movie/${movieData.movieId}`} rel="">
          <img
            src={movieData.imageUrl}
            className={styles.image}
            alt={movieData.movieName}
          ></img>
          <div className="imageOverlay"></div>
          <div className={styles.movieDetailOverlay}>
            <h2 className={styles.movieName}>{movieData.movieName}</h2>
            <p className={styles.releaseDate}>{movieData.releaseDate}</p>
          </div>
        </Link>
        <FavouritesIcon
          customClassNameFavIcon={customClassNameFavIcon}
          onToggle={function handleFavouritesToggle() {
            if (loginStatus) {
              FavouritePageApi.toggleActionInFavourites(movieData.movieId)
                .then((response) => response.json())
                .then((data) => {
                  dispatch(getAllfavouritesForCurrentUser());
                });
            } else {
              navigate("/login");
            }
          }}
          classStyle={favouriteExist ? "iconAdded" : "iconNotAdded"}
        />
      </div>
    </>
  );
}

export default MovieCard;
