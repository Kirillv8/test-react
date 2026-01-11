import { apiInstance } from "./base";

export const getGenresApi = async () => {
  return apiInstance("/genre/movie/list?language=ru");
};
