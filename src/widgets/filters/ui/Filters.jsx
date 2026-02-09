import Button from "@shared/ui/button/Button";
import Input from "@shared/ui/input/Input";
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

  const toggle = (id) => {
    const isSelected = selectedGenres.some((item) => item.id === id);

    if (isSelected) {
      dispatch({ type: "remove-id", payload: id });
    } else {
      dispatch({ type: "add-id", payload: id });
    }
  };

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
          <div
            className="genres-list"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginTop: "10px",
            }}
          >
            {genres.map((genre) => (
              <label
                key={genre.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <Input
                  type="checkbox"
                  checked={selectedGenres.some((item) => item.id === genre.id)}
                  onChange={() => toggle(genre.id)}
                />
                <span style={{ color: "white", fontSize: "14px" }}>
                  {genre.name}
                </span>
              </label>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Filters;
