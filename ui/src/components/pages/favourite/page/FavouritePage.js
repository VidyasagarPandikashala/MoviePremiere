import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FavouritesIcon from "../../../shared/components/util-components/FavouritesIcon";
import { getAllfavouritesForCurrentUser } from "../redux/FavouritesSlice";
import { FavouritePageApi } from "../api/favouritesPageApi";

function FavouritePage() {
  const selector = useSelector((state) => state.favourite.favouriteMovieIds);
  console.log(selector);
  const [favMovies, setFavMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setFavMovies([]);
    selector.forEach((eachId) => {
      FavouritePageApi.getMovieDataForFavourites(eachId, 1).then((data) => {
        setFavMovies((prevFavMovies) => [...prevFavMovies, data]);
      });
    });
  }, [selector]);

  if (favMovies.length === 0) {
    return <div>No favourites...</div>;
  }
  return (
    <div>
      {favMovies.map((eachMovie) => {
        return (
          <div>
            <p>{eachMovie.movieName}</p>
            <FavouritesIcon
              onToggle={function handleFavouritesToggle() {
                FavouritePageApi.toggleActionInFavourites(eachMovie.movieId)
                  .then((response) => response.json())
                  .then((data) => {
                    dispatch(getAllfavouritesForCurrentUser());
                  });
              }}
              classStyle={
                selector.has(eachMovie.movieId) ? "iconAdded" : "iconNotAdded"
              }
            ></FavouritesIcon>
          </div>
        );
      })}
    </div>
  );
}

export default FavouritePage;
