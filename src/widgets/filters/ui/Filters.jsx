import Button from "@shared/ui/button/Button";
import { Autocomplete, TextField } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import "@src/widgets/filters/ui/filter.css";
import { getGenresApi } from "@shared/api/genres.js";
import { UserContext } from "@shared/provider/UserProvider";
import { GenresContext, ReducerContext } from "../model/FilterProvider";

const Filters = () => {
  const [genres, setGenres] = useState([]);
  const [popularity, setPopularity] = useState("");
  const [rating, setRating] = useState("");

  const selectedGenres = useContext(GenresContext);
  const dispatch = useContext(ReducerContext);
  const TOKEN = useContext(UserContext);

  useEffect(() => {
    try {
      const getGenres = async () => {
        const data = await getGenresApi();
        console.log(data.genres);
        setGenres(data.genres);
      };
      getGenres();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <aside className="filters">
        <div className="filters__header">
          <h2>Фильтры</h2>

          <Button className="btn" onClick={() => dispatch({ type: "reset" })}>
            X
          </Button>
        </div>

        <div className="filters__section">
          <label>Сортировать по:</label>
          <br />
          <br />
          <select
            className="filters__select"
            value={popularity}
            onChange={(e) => setPopularity(e.target.value)}
          >
            <option value="">По популярности</option>
          </select>
        </div>

        <div className="filters__section">
          {" "}
          <select
            className="filters__select"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">По рейтингу</option>
          </select>
        </div>

        <div className="filters__section">
          <h2>Жанры</h2>
          <Autocomplete
            multiple
            options={genres}
            getOptionLabel={(option) => option.name}
            disableCloseOnSelect
            isOptionEqualToValue={(option, value) => option.id === value.id}
            value={selectedGenres}
            onChange={(event, newValue) => {
              dispatch({
                type: "SET_GENRES",
                payload: newValue,
              });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Выберите жанры"
                variant="standard"
              />
            )}
          />
        </div>
      </aside>
    </>
  );
};

export default Filters;
