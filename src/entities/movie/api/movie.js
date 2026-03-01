import { apiInstance } from "@shared/api/base";
const ENDPOINT_POPULARITY = import.meta.env.VITE_TMDB_ENDPOINT_POPULARITY;
const ENDPOINT_TOP_RATING = import.meta.env.VITE_TMDB_ENDPOINT_TOP_RATED;

export const movie = (sortBy, page, genres) => {
  const endpoint =
    sortBy === "popularity.desc" ? ENDPOINT_POPULARITY : ENDPOINT_TOP_RATING;

  const genreId = genres
    ?.map((genre) => {
      return genre.id;
    })
    .join(",");

  return apiInstance(endpoint, {
    params: { page, language: "ru-RU", with_genres: genreId },
  });
};
