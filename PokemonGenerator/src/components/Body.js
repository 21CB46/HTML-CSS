import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const URL = `https://pokeapi.co/api/v2/pokemon?offset=${0}&limit=500`;
      const response = await fetch(URL);
      const data = await response.json();
      setPokemonList(data.results);
      setFilteredPokemon(data.results);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = pokemonList.filter((pokemon) =>
      pokemon.name.startsWith(searchText.toLowerCase())
    );
    // {
    //   window.addEventListener("scroll", () => {
    //     if (
    //       window.scrollY + window.innerHeight >=
    //       document.documentElement.scrollHeight
    //     ) {
    //       fetchData();
    //     }
    //   });
    // }
    setFilteredPokemon(filtered);
  }, [searchText, pokemonList]);

  return (
    <div className="main-container">
      <h1>Search Your Pokemon</h1>
      <div className="search">
        <input
          className="search-text"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search"
        />
        <button
          className="search-btn"
          type="button"
          onClick={() => setSearchText("")}
        >
          Clear
        </button>
      </div>
      <div className="pokemon-card-container">
        {filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </div>
  );
};

export default Body;
