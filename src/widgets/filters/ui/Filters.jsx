import Button from "@shared/ui/button/Button";
import Input from "@shared/ui/input/Input";
import { useState } from "react";
import "@src/widgets/filters/ui/filter.css";
const Filters = () => {
  const [popularity, setPopularity] = useState([
    "Терминатор",
    "Приключение шурика",
    "The Matrix",
  ]);

  const [rating, setRating] = useState([
    "Терминатор",
    "Приключение шурика",
    "The Matrix",
  ]);

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
          <br />
          <label>
            <Input type="checkbox" />
            Комедия
          </label>
          <label>
            <Input type="checkbox" />
            Боевик
          </label>
          <label>
            <Input type="checkbox" />
            Драма
          </label>
        </div>
      </aside>
    </>
  );
};

export default Filters;
