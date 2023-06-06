import Poketype from "../../../assets/poketype.png";
import "./HomeCard3.css";
import "../HomeCard.css";

const HomeCard = () => {
  return (
    <div className="home-card">
      <div className="home-card-title">
        <h1>Poké-Type</h1>
        <p>La liste des Pokémons triés par types</p>
      </div>
      <div className="img-home3-container">
        <img
          className="home-card3-img"
          src={Poketype}
          alt="pikachu"
        />
      </div>
    </div>
  );
};

export default HomeCard;
