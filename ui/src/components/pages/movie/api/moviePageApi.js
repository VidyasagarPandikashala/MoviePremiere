import getCookie from "../../../shared/utils/cookies/getCookies";
import HttpFetch from "../../../shared/utils/http-client/HttpFetch";

const moviePageApi = {
  movieData: getMovieData,
  toggleAction: toggleAction,
};

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

function isFavouriteExist(movieId) {
  const token = getCookie("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const url = `/movie-premiere/v1/favourites/onToggle/${movieId}`;
  return HttpFetch.post(url, headers);
}

export default moviePageApi;
