import HttpFetch from "../../../shared/utils/http-client/HttpFetch.js";

const signupApi = {
  postUserData: postUserData,
  authenticate: authenticateUserData,
  logout: logout,
};

function postUserData(data) {
  console.log(data);
  const url = `http://localhost:8083/movie-premiere/v1/sign-up`;
  return HttpFetch.post(url, {}, data);
}
function authenticateUserData(data) {
  const url = `http://localhost:8083/movie-premiere/v1/`;
  return HttpFetch.post(url, {}, data);
}
function logout(userId) {
  const queryParams = new URLSearchParams();
  queryParams.append("id", userId);

  const url = `http://localhost:8083/movie-premiere/v1/logout?${queryParams.toString()}`;
  return HttpFetch.post(url, {});
}
export default signupApi;
