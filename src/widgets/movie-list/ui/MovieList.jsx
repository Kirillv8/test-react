import { useState, useEffect, useContext } from "react";
import { GenresContext } from "@widgets/filters/model/FilterProvider";
import MovieCard from "@entities/movie/ui/MovieCard";
import { movie } from "@entities/movie/api/movie.js";
import { Box, Stack } from "@mui/material";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const { sortBy, genres } = useContext(GenresContext);

  //   const sortBy = context?.sortBy;
  //   const genres = context?.genres;

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await movie(sortBy, page, genres);
      if (data && data.results) {
        setMovieList(data.results);
      }
      console.log(data);
    };
    fetchMovies();
  }, [page, sortBy, genres]);

  return (
    <>
      <Stack direction="row" flexWrap="wrap" gap={2}>
        {movieList.map((movie) => {
          return (
            <Box key={movie.id} width={200}>
              <MovieCard title={movie.title} poster={movie.poster_path} />
            </Box>
          );
        })}
      </Stack>
    </>
  );
};

export default MovieList;
