import HttpFetch from "../../../shared/utils/http-client/HttpFetch.js";

const loginApi = {
  postUserData: postUserData,
  authenticate: authenticateUserData,
  logout: logout,
};

function postUserData(data) {
  console.log(data);
  const url = `http://localhost:8083/movie-premiere/v1/user/sign-up`;
  return HttpFetch.post(url, {}, data);
}
function authenticateUserData(data) {
  const url = `http://localhost:8083/movie-premiere/v1/user`;
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json", // Add this line
  };
  return HttpFetch.post(url, headers, data);
}
function logout(userId) {
  const queryParams = new URLSearchParams();
  queryParams.append("id", userId);

  const url = `http://localhost:8083/movie-premiere/v1/user/logout?${queryParams.toString()}`;
  return HttpFetch.post(url, {});
}
export default loginApi;
