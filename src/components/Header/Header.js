import { Link } from "react-router-dom";

import Logo from "./../../images/logo-white.png"
// Styles
import "./Header.css"

export const Header = () => {
  return (
    <header className="header">
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
        </ul>
      </nav>
    </header>
  );
};
