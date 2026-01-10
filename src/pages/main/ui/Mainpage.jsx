import Header from "@widgets/header/ui/Header";
import Filters from "@widgets/filters/ui/Filters";
import Pagination from "@shared/ui/pagination/Pagination";

import "@pages/main/ui/mainPage.css";
const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <div className="main-page__layout">
        <aside className="main-page__sidebar">
          <Filters />
        </aside>
        <main className="main-page__content">
          <div className="movies-grid-placeholder">
            {/* Сюда мы позже добавим карточки фильмов */}
            <h1
            // style={{ color: "white", textAlign: "center", marginTop: "50px" }}
            >
              Список фильмов скоро появится...
            </h1>
          </div>
          <div
            className="main-page__pagination"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <div style={{ marginLeft: "0", textAlign: "left" }}>
              <Pagination />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainPage;
