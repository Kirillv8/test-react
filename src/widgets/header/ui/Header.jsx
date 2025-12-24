import Button from "@shared/ui/button/Button";
import "@src/widgets/header/ui/header.css";

const Header = () => {
  return (
    <header className="header">
      <h2 className="header-logo">Фильмы</h2>
      <Button className="header-logo-btn">Войти</Button>
    </header>
  );
};

export default Header;
  