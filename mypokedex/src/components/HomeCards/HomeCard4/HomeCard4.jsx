import About from "../../../assets/about.png";
import "./HomeCard4.css";
import "../HomeCard.css";

const HomeCard = () => {
  return (
    <div className="home-card">
      <div className="home-card-title">
        <h1>À propos</h1>
        <p>En savoir plus sur ce projet</p>
      </div>
      <div className="img-home4-container">
        <img
          className="home-card4-img"
          src={About}
        />
      </div>
    </div>
  );
};

export default HomeCard;
