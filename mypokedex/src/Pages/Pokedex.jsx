import { useEffect, useState } from "react";
import axios from "axios";
import PokedexInfo from "../components/Pokedex/PokedexInfo";
import "../App.css";

const Pokedex = () => {
  const [PokemonData, setPokemonData] = useState(null);
  const [pokemonLimit] = useState(151);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`https://pokebuildapi.fr/api/v1/pokemon/limit/${pokemonLimit}`)
      .then((response) => setPokemonData(response.data));
  }, [pokemonLimit]);

  return (
    <div>
      {PokemonData && (
        <PokedexInfo
          pokemon={PokemonData[index]}
          index={index}
          setIndex={setIndex}
          pokemonLimit={pokemonLimit}
        />
      )}
    </div>
  );
};

export default Pokedex;
