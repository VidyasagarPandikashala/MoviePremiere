import "./App.css";
import HomePage from "./components/pages/home/page/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./Root";

import LoginPage from "./components/pages/login/page/LoginPage";
import FavouritePage from "./components/pages/favourite/page/FavouritePage";
import SectionPage from "./components/pages/SectionPage";
import MoviePage from "./components/pages/movie/page/Movie";
import HomePageApi from "./components/pages/home/api/homePageApi";
import SignUp from "./components/pages/signup/page/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: async () => {
          const homePageData = {};
          homePageData.dataForMovieCarousal = await HomePageApi.movieData(
            "latestRelease",
            3
          );
          homePageData.dataForComingList = await HomePageApi.movieData(
            "comingsoon",
            10
          );
          return homePageData;
        },
      },
      { path: "sign-up", element: <SignUp></SignUp> },
      { path: "login", element: <LoginPage /> },
      { path: "movie/:movieId", element: <MoviePage /> },
      { path: "movie/:movieId/:userId", element: <MoviePage /> },
      { path: "favourites", element: <FavouritePage /> },
      { path: "favourites/:userId", element: <FavouritePage /> },
    ],
  },
]);
function App() {
  return (
    <RouterProvider router={router}>
      <div>
        <HomePage></HomePage>
      </div>
    </RouterProvider>
  );
}

export default App;
