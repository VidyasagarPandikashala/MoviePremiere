import { createSlice } from "@reduxjs/toolkit";
import loginApi from "../api/loginApi";

const initialState = {
  isLoggedIn: false,
  userId: -1,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    updateLogin(state, action) {
      state.isLoggedIn = action.payload;
      console.log(state.isLoggedIn);
    },
    updateUserId(state, action) {
      state.userId = action.payload;
      console.log(state.userId);
    },
  },
});

// Async action using Redux Thunk
export const setLoggedInStatus = (signInData) => async (dispatch) => {
  const response = await loginApi.authenticate(signInData);
  const responseBody = await response.text();
  const responseBodyParsed = JSON.parse(responseBody);
  const token = responseBodyParsed.token;
  const userId = responseBodyParsed.userId;
  if (token) {
    dispatch(loginSlice.actions.updateLogin(true));
    dispatch(loginSlice.actions.updateUserId(userId));
    return { payload: token }; // Return the token
  } else {
    dispatch(loginSlice.actions.updateLogin(false));
    return { payload: false };
  }
};
export const setLogout =
  ({ userId, authentication }) =>
  async (dispatch) => {
    loginApi.logout(userId);
    dispatch(loginSlice.actions.updateLogin(false));
    dispatch(loginSlice.actions.updateUserId(-1));
  };

export default loginSlice.reducer;
