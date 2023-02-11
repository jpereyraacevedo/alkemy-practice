import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import Logo from "./../../images/logo-white.png";
// Styles
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div class="navBar">
        <img src={Logo} alt="#" className="logo" />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/listado">Listado</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/favorites">Favoritos</Link>
            </li>
          </ul>
        </nav>
      </div>
      <SearchBar />
    </header>
  );
};
