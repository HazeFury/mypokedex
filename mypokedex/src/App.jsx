import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Pokedex from "./Pages/Pokedex";
import OnePokedex from "./Pages/OnePokedex";
import PokeType from "./Pages/PokeType";
import PokeList from "./Pages/PokeList";
import About from "./Pages/About";
import Header from "./components/Header/Header";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:id" element={<OnePokedex />} />
        <Route path="/poketype" element={<PokeType />} />
        <Route path="/poketype/:value" element={<PokeType />} />
        <Route path="/pokelist" element={<PokeList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
