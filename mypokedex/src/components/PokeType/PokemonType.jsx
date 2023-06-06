import PropTypes from "prop-types";

const PokemonType = ({ pokemon }) => {
  const whatIsType = () => {
    if (pokemon.apiTypes[0].name.includes("Poison")) {
      return "isPoison";
    } else if (pokemon.apiTypes[0].name.includes("Feu")) {
      return "isFeu";
    } else if (pokemon.apiTypes[0].name.includes("Eau")) {
      return "isEau";
    } else if (pokemon.apiTypes[0].name.includes("Sol")) {
      return "isSol";
    } else if (pokemon.apiTypes[0].name.includes("Vol")) {
      return "isVol";
    } else if (pokemon.apiTypes[0].name.includes("Combat")) {
      return "isCombat";
    } else if (pokemon.apiTypes[0].name.includes("Plante")) {
      return "isPlante";
    } else if (pokemon.apiTypes[0].name.includes("Roche")) {
      return "isRoche";
    } else if (pokemon.apiTypes[0].name.includes("Insecte")) {
      return "isInsecte";
    } else if (pokemon.apiTypes[0].name.includes("Spectre")) {
      return "isSpectre";
    } else if (pokemon.apiTypes[0].name.includes("Acier")) {
      return "isAcier";
    } else if (pokemon.apiTypes[0].name.includes("Électrik")) {
      return "isÉlectrik";
    } else if (pokemon.apiTypes[0].name.includes("Psy")) {
      return "isPsy";
    } else if (pokemon.apiTypes[0].name.includes("Glace")) {
      return "isGlace";
    } else if (pokemon.apiTypes[0].name.includes("Dragon")) {
      return "isDragon";
    } else if (pokemon.apiTypes[0].name.includes("Ténèbres")) {
      return "isTénèbres";
    } else if (pokemon.apiTypes[0].name.includes("Fée")) {
      return "isFée";
    } else if (pokemon.apiTypes[0].name.includes("Normal")) {
      return "isNormal";
    }
  };

  return (
    <div className="card-container">
      <div className="figure-container">
        <figure className={whatIsType()}>
          <img
            className="pokemon-img"
            src={pokemon.sprite}
            alt={pokemon.name}
          />
          <p className="pokemon-id">#{pokemon.id}</p>
          <figcaption className="pokemon-figcaption">{pokemon.name}</figcaption>
        </figure>
      </div>
    </div>
  );
};

PokemonType.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sprite: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    apiTypes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
export default PokemonType;
