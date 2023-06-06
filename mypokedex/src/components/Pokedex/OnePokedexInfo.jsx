import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import "./PokedexInfo.css";

const PokedexInfo = ({ pokemon }) => {
  const navigate = useNavigate();

  return (
    <div className="global-container">
      <div className="btn-container">
        <button
          className="btn-come-back"
          onClick={() => {
            navigate(-1);
          }}
        >
          Revenir en arrière
        </button>
      </div>
      <div className="pokedex-container">
        <img className="big-pokemon-img" src={pokemon.image}></img>
        <div className="info-container">
          <div className="general-data-container">
            <h1>{pokemon.name}</h1>
            <p className="pokemon-unique-id">#{pokemon.id}</p>
            <div className="pokemon-type-container">
              <p>{pokemon.apiTypes[0].name}</p>
              <img className="type-logo" src={pokemon.apiTypes[0].image}></img>
              <p>
                {pokemon.apiTypes[1] ? `/ ${pokemon.apiTypes[1].name}` : null}
              </p>
              {pokemon.apiTypes[1] ? (
                <img
                  className="type-logo"
                  src={pokemon.apiTypes[1].image}
                ></img>
              ) : null}
            </div>
          </div>
          <div className="stat-container">
            <div className="one-stat">
              <p>Points de vie :</p>
              <p>{pokemon.stats.HP}</p>
            </div>
            <div className="one-stat">
              <p>Points d&#39;attaque :</p>
              <p>{pokemon.stats.attack}</p>
            </div>
            <div className="one-stat">
              <p>Points de défense :</p>
              <p>{pokemon.stats.defense}</p>
            </div>
            <div className="one-stat">
              <p>Points d&#39;attaque spécial :</p>
              <p>{pokemon.stats.special_attack}</p>
            </div>
            <div className="one-stat">
              <p>Points de défense spéciale :</p>
              <p>{pokemon.stats.special_defense}</p>
            </div>
            <div className="one-stat">
              <p>Points de vitesse :</p>
              <p>{pokemon.stats.speed}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PokedexInfo.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    apiTypes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
    stats: PropTypes.shape({
      HP: PropTypes.number.isRequired,
      attack: PropTypes.number.isRequired,
      defense: PropTypes.number.isRequired,
      special_attack: PropTypes.number.isRequired,
      special_defense: PropTypes.number.isRequired,
      speed: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
  pokemonLimit: PropTypes.number.isRequired,
};

export default PokedexInfo;
