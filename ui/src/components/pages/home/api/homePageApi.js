import HttpFetch from "../../../shared/utils/http-client/HttpFetch.js";

const HomePageApi = {
  searchedResult: getSearchedResult,
  movieData: getMovieData,
};

function getSearchedResult(searchedKeys) {
  console.log(searchedKeys);
  const url = `http://localhost:8083/movie-premiere/v1/movie/search?movieName=${searchedKeys}`;
  return HttpFetch.get(url, {});
}
function getMovieData(sectionName, size) {
  const queryParams = new URLSearchParams();
  queryParams.append("name", sectionName);
  queryParams.append("size", size);

  const url = `http://localhost:8083/movie-premiere/v1/movie/get-movies-by-section?${queryParams.toString()}`;
  return HttpFetch.get(url, {});
}

export default HomePageApi;
