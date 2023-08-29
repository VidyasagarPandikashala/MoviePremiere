// import { faV } from "@fortawesome/free-solid-svg-icons";
import { createSlice } from "@reduxjs/toolkit";

import { FavouritePageApi } from "../api/favouritesPageApi";

const initialState = {
  favouriteMovieIds: new Set(),
};
const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    setFavouriteMovieId(state, action) {
      state.favouriteMovieIds = new Set(action.payload);
    },

    toggle(state, action) {
      state.favouriteMovieIds.has(action.payload)
        ? state.favouriteMovieIds.delete(action.payload)
        : state.favouriteMovieIds.add(action.payload);
    },
    clearData(state) {
      state.favouriteMovieIds.clear();
    },
  },
});
console.log(favouriteSlice);
export const { toggle, clearData } = favouriteSlice.actions;

export const getAllfavouritesForCurrentUser = () => async (dispatch) => {
  const favouriteMovieIds = await FavouritePageApi.getAllfavouritesFromUserId();

  dispatch(favouriteSlice.actions.setFavouriteMovieId(favouriteMovieIds));
};
export default favouriteSlice.reducer;
