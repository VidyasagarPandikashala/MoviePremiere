import { enableMapSet } from "immer";
import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../../pages/favourite/redux/FavouritesSlice";
import LoginReducer from "../../pages/login/redux/LoginSlice";
import thunk from "redux-thunk";

enableMapSet();

const store = configureStore({
  reducer: {
    favourite: favouriteReducer,
    login: LoginReducer,
  },
  middleware: [thunk],
});

export default store;
