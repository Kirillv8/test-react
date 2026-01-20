import Button from "@shared/ui/button/Button";
import Input from "@shared/ui/input/Input";
import { useState, useEffect } from "react";
import "@src/widgets/filters/ui/filter.css";
import { getGenresApi } from "@shared/api/genres.js";

const Filters = () => {
  const [genres, setGenres] = useState([]);

  const [popularity, setPopularity] = useState("");

  const [rating, setRating] = useState("");
  useEffect(() => {
    const getGenres = async () => {
      try {
        const data = await getGenresApi();
        setGenres(data.genres);
      } catch (error) {
        console.log(error);
      }
    };
    getGenres();
  }, []);

  return (
    <>
      <aside className="filters">
        <div className="filters__header">
          <h2>Фильтры</h2>
          <Button className="btn">X</Button>
        </div>
        <div className="filters__section">
          <label>Сортировать по:</label>
          <br></br>
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
                <Input type="checkbox" />
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
