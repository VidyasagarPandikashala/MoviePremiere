import getCookie from "../../../shared/utils/cookies/getCookies";
import removeCookie from "../../../shared/utils/cookies/removeCookies";
import HttpFetch from "../../../shared/utils/http-client/HttpFetch";
const reviewApi = {
  saveReview: saveReview,
  isReviewExist: isReviewExist,
  fetchUserRating: fetchUserRating,
  fetchAllRating: fetchAllRating,
};

function saveReview(data, movieId) {
  const userIdToken = getCookie("token");

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${userIdToken}`,
    Movieid: movieId,
  };
  const url = `http://localhost:8083/movie-premiere/v1/rating/save-rating`;

  return HttpFetch.post(url, headers, data);
}

function isReviewExist(movieId) {
  const userIdToken = getCookie("token");

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${userIdToken}`,
    Movieid: movieId,
  };
  const url = `http://localhost:8083/movie-premiere/v1/rating/ratingExist`;
  removeCookie("movieId");
  return HttpFetch.post(url, headers, {});
}

function fetchUserRating(movieId) {
  const userIdToken = getCookie("token");

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${userIdToken}`,
    Movieid: movieId,
  };
  const url = `http://localhost:8083/movie-premiere/v1/rating/user-rating`;
  removeCookie("movieId");
  return HttpFetch.post(url, headers, {});
}
function fetchAllRating(movieId) {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Movieid: movieId,
  };
  const url = `http://localhost:8083/movie-premiere/v1/rating/all-rating`;
  removeCookie("movieId");
  return HttpFetch.post(url, headers, {});
}
export default reviewApi;
