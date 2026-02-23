import { useState, useEffect, useContext } from "react";
import { GenresContext } from "@widgets/filters/model/FilterProvider";
import MovieCard from "@entities/movie/ui/MovieCard";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const { sortBy, genres } = useContext(GenresContext);

  //   const sortBy = context?.sortBy;
  //   const genres = context?.genres;

  useEffect(() => {}, [page, sortBy, genres]);
  console.log("Фильтры изменились:", { sortBy, genres, page });
  return (
    <>
      <MovieCard />
    </>
  );
};

export default MovieList;
