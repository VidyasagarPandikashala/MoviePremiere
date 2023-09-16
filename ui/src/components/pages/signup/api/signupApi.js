import HttpFetch from "../../../shared/utils/http-client/HttpFetch";

const signupApi = {
  postUserData: postUserData,
};

function postUserData(data) {
  const url = `http://localhost:8083/movie-premiere/v1/user/sign-up`;
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json", // Add this line
  };
  return HttpFetch.post(url, headers, data);
}

export default signupApi;
