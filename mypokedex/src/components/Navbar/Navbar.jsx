import { NavLink } from "react-router-dom";
import HomeIcon from "../../assets/HomeIcon";
import TypeIcon from "../../assets/TypeIcon";
import AboutIcon from "../../assets/AboutIcon";
import ListIcon from "../../assets/ListIcon";
import "../../App.css";
import "./Navbar.css";
import PokedexIcon from "../../assets/PokedexIcon";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav">
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                <HomeIcon />
              </NavLink>
            </li>
            <li>
              <NavLink to="/pokelist">
                <ListIcon />
              </NavLink>
            </li>
            <li>
              <NavLink to="/pokedex">
                <PokedexIcon />
              </NavLink>
            </li>
            <li>
              <NavLink to="/poketype">
                <TypeIcon />
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <AboutIcon />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
