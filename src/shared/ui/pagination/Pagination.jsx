import Button from "../button/Button";
import "@src/shared/ui/pagination/pagination.css";
import { useState } from "react";

const Pagination = () => {
  const [pages, setPages] = useState([1, 2, 3, 4, 5]);
  const [activeButton, setActiveButton] = useState(1);
  return (
    <div className="container-pagination-btn">
      <Button className={"pagination-btn"}>{"<"}</Button>
      {pages.map((page) => {
        return (
          <Button
            className={`pagination-btn ${
              page === activeButton ? "active" : ""
            }`}
            key={page}
            onClick={() => {
              setActiveButton(page);
            }}
          >
            {page}
          </Button>
        );
      })}
      <Button className={"pagination-btn"}>{">"}</Button>
    </div>
  );
};

export default Pagination;
