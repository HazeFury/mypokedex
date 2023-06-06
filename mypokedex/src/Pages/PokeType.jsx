import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../App.css";
import PokemonList from "../components/PokeList/PokemonList";
//import PokemonType from "../components/PokeList/PokemonType";

const PokeType = () => {
  const [PokemonData, setPokemonData] = useState([]);
  // const [pokemonType, setPokemonType] = useState("");

  let { value = "Eau" } = useParams();

  const getPokemon = () => {
    axios
      .get(`https://pokebuildapi.fr/api/v1/pokemon/type/${value}`)
      /* add "/limit/150" at the end of this URL to limit result to 150 pokemon.
       Remove it if you want the complete list of Pokemon (Warning : your app may be slower to load !).
       Don't forget put the same number in Navbar => disabled => pokemonIndex */
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setPokemonData(data);
      });
  };
  useEffect(getPokemon, [value]);
  console.log(value);

  return (
    <div>
      {/* <label className="label-for-choose" htmlFor="pet-select">Choose a pet:</label> */}
      <div className="select-container">
        <select
          className="select"
          name="type"
          id="choose-type"
          onChange={(event) => {
            value = event.target.value;
            console.log(value);
            getPokemon();
          }}
        >
          <option value="Eau">Eau</option>
          <option value="Feu">Feu</option>
          <option value="Plante">Plante</option>
          <option value="Électrik">Électrik</option>
          <option value="Normal">Normal</option>
          <option value="Vol">Vol</option>
          <option value="Poison">Poison</option>
          <option value="Insecte">Insecte</option>
          <option value="Sol">Sol</option>
          <option value="Roche">Roche</option>
          <option value="Acier">Acier</option>
          <option value="Psy">Psy</option>
          <option value="Ténèbres">Ténèbres</option>
          <option value="Spectre">Spectre</option>
          <option value="Glace">Glace</option>
          <option value="Dragon">Dragon</option>
          <option value="Fée">Fée</option>
        </select>
      </div>
      <div className="pokemon-list">
        {PokemonData.map((pokemon, index) => (
          <PokemonList pokemon={PokemonData[index]} key={index} />
        ))}
        {/* <PokemonList pokemon={PokemonData} /> */}
      </div>
    </div>
  );
};

export default PokeType;
