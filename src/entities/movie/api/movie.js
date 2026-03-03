import { apiInstance } from "@shared/api/base";
const ENDPOINT_POPULARITY = import.meta.env.VITE_TMDB_ENDPOINT_POPULARITY;
const ENDPOINT_TOP_RATING = import.meta.env.VITE_TMDB_ENDPOINT_TOP_RATED;

export const movie = (sortBy, page, genres) => {
  const genreIds = genres?.map((g) => g.id).join(",");

  let endpoint =
    sortBy === "popularity.desc" ? ENDPOINT_POPULARITY : ENDPOINT_TOP_RATING;

  if (genreIds) {
    endpoint = "/discover/movie";
  }

  return apiInstance(endpoint, {
    params: {
      page,
      language: "ru-RU",
      sort_by: sortBy,
      with_genres: genreIds,
    },
  });
};
