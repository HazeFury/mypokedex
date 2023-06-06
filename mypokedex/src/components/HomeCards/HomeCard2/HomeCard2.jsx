import Pokedex from "../../../assets/pokedex.png";
import "./HomeCard2.css";
import "../HomeCard.css";

const HomeCard = () => {
  return (
    <div className="home-card">
      <div className="home-card-title">
        <h1>Pokédex</h1>
        <p>Toutes les informations par Pokémon</p>
      </div>
      <div className="img-home2-container">
        <img className="home-card2-img" src={Pokedex} alt="pikachu" />
      </div>
    </div>
  );
};

export default HomeCard;
