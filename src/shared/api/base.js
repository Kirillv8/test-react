const URL = import.meta.env.VITE_TMDB_URL;
const KEY = import.meta.env.VITE_TMDB_API_KEY;
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const apiInstance = async (endpoint, options = {}) => {
  const { params, ...restOptions } = options;

  const queryString = params
    ? `?${new URLSearchParams(params).toString()}`
    : "";

  const response = await fetch(`${URL}${endpoint}${queryString}`, {
    ...restOptions,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
      ...restOptions.headers,
    },
  });

  if (!response.ok) throw new Error(`Ошибка API ${response.status}`);
  return response.json();
};
