import "../App.css";
import { Link } from "react-router-dom";
import HomeCard1 from "../components/HomeCards/HomeCard1/HomeCard1";
import HomeCard2 from "../components/HomeCards/HomeCard2/HomeCard2";
import HomeCard3 from "../components/HomeCards/HomeCard3/HomeCard3";
import HomeCard4 from "../components/HomeCards/HomeCard4/HomeCard4";

const Home = () => {
  return (
    <div className="global-home-container">
      <div>
        <Link className="link" to="pokelist">
          <HomeCard1 />
        </Link>
      </div>
      <div>
        <Link className="link" to="pokedex">
          <HomeCard2 />
        </Link>
      </div>
      <div>
        <Link className="link" to="poketype">
          <HomeCard3 />
        </Link>
      </div>
      <div>
        <Link className="link" to="about">
          <HomeCard4 />
        </Link>
      </div>
    </div>
  );
};

export default Home;
