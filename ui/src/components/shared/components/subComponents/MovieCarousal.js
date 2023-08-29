import { useLoaderData } from "react-router-dom";
import CarousalCard from "../util-components/CarousalCard";

function MovieCarousal() {
  const movieData = useLoaderData().dataForMovieCarousal;

  return (
    <>
      <CarousalCard movieData={movieData}></CarousalCard>
    </>
  );
}

export default MovieCarousal;
