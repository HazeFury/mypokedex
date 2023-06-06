import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import PokemonList from "../components/PokeList/PokemonList";

const PokeList = () => {
  const [PokemonData, setPokemonData] = useState([]);
  const [addMore, setAddMore] = useState(40);

  const getPokemon = () => {
    axios
      .get(`https://pokebuildapi.fr/api/v1/pokemon/limit/${addMore}`)
      /* add "/limit/150" at the end of this URL to limit result to 150 pokemon.
       Remove it if you want the complete list of Pokemon (Warning : your app may be slower to load !).
       Don't forget put the same number in Navbar => disabled => pokemonIndex */
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setPokemonData(data);
      });
  };

  useEffect(getPokemon, [addMore]);

  const handleMore = () => {
    setAddMore(addMore + 40);
  };

  return (
    <div>
      <div className="pokemon-list">
        {PokemonData.map((pokemon, index) => (
          <PokemonList pokemon={PokemonData[index]} key={pokemon.id} />
        ))}
      </div>
      <div className="btn-container">
        {PokemonData && (
          <button className="addmore-btn" onClick={handleMore}>
            Charger plus de Pokemon
          </button>
        )}
      </div>
    </div>
  );
};

export default PokeList;
