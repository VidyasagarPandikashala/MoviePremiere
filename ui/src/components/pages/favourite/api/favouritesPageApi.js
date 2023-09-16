import getCookie from "../../../shared/utils/cookies/getCookies";
import HttpFetch from "../../../shared/utils/http-client/HttpFetch";
function getAllfavouritesFromUserId() {
  const token = getCookie("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const url = `http://localhost:8083/movie-premiere/v1/favourites`;
  return HttpFetch.get(url, headers);
}
function getMovieData(id, size) {
  const url = `http://localhost:8083/movie-premiere/v1/movie/byId/${id}`;
  return HttpFetch.get(url, {});
}

function toggleAction(movieId) {
  const token = getCookie("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const url = `/movie-premiere/v1/favourites/onToggle/${movieId}`;
  return HttpFetch.post(url, headers);
}

export const FavouritePageApi = {
  getAllfavouritesFromUserId: getAllfavouritesFromUserId,
  getMovieDataForFavourites: getMovieData,
  toggleActionInFavourites: toggleAction,
};
