import Navbar from "../Navbar/Navbar";
import PokemonLogo from "../../assets/Pokemon-logo.png";
import "./Header.css";
import "../../App.css";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const Header = () => {
  return (
    <div className="header-container">
      <img className="logo-pokemon" src={PokemonLogo} alt="pokemon-logo"></img>
      <Navbar />
      <div className="more-info">
        <a
          href="https://www.linkedin.com/in/marc-antoine-berger/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="header-logo" src={linkedin} href="" alt="Linkedin" />
        </a>
        <a href="https://github.com/HazeFury" target="_blank" rel="noreferrer">
          <img className="header-logo" src={github} alt="Github" />
        </a>
      </div>
    </div>
  );
};

export default Header;
