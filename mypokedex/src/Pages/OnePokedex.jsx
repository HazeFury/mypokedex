import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import OnePokedexInfo from "../components/Pokedex/OnePokedexInfo";
import "../App.css";

const Pokedex = () => {
  const [PokemonData, setPokemonData] = useState(null);
  // const [pokemonLimit] = useState(151);
  const [index, setIndex] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
      .then((response) => setPokemonData(response.data));
  }, [id]);

  return (
    <div>
      {PokemonData && (
        <OnePokedexInfo
          pokemon={PokemonData}
          index={index}
          setIndex={setIndex}
        />
      )}
    </div>
  );
};

export default Pokedex;
