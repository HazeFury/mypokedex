import "./HomeCard1.css";
import "../HomeCard.css";
import Pokelist from "../../../assets/pokelist.png";

const HomeCard = () => {
  return (
    <div className="home-card">
      <div className="home-card-title">
        <h1>Poké-Liste</h1>
        <p>La liste de tous les Pokémons</p>
      </div>
      <div className="img-home1-container">
        <img
          className="home-card1-img"
          src={Pokelist}
          alt="pikachu"
        />
      </div>
    </div>
  );
};

export default HomeCard;
