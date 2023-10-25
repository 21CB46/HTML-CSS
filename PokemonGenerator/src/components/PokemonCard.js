import React, { useEffect, useState } from "react";
import IMG from "../utils/constants";
import Shimmer from "./Shimmer";

const PokemonCard = ({ url }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setPokemonData(data);
    };

    fetchData();
  }, [url]);

  if (!pokemonData) {
    return <Shimmer />;
  }

  const officialArtwork =
    pokemonData.sprites?.other?.["official-artwork"]?.front_default;
  const name = pokemonData.name;
  const hp = pokemonData.stats?.[0]?.base_stat;
  const attack = pokemonData.stats?.[1]?.base_stat;
  const defense = pokemonData.stats?.[2]?.base_stat;
  const specialAttack = pokemonData.stats?.[3]?.base_stat;
  const speed = pokemonData.stats?.[5]?.base_stat;
  const type = pokemonData.types?.[0]?.type?.name;

  const getTypeColor = (type) => {
    switch (type) {
      case "fire":
        return {
          color: "#EA7A3C",
          url: require("../Assets/fire.png"),
          repeat: "no-repeat",
          height: "5rem",
        };
      case "water":
        return {
          color: "#539AE2",
          url: require("../Assets/water.png"),
          repeat: "no-repeat",
          height: "5rem",
        }; // Blue
      case "electric":
        return {
          color: "#E5C531",
          url: require("../Assets/electric.png"),
          repeat: "no-repeat",
          height: "5rem",
        }; // Yellow
      case "grass":
        return {
          color: "#71C558",
          url: require("../Assets/grass.png"),
          repeat: "no-repeat",
          height: "5rem",
        };
      case "bug":
        return {
          color: "#94BC4A",
          url: require("../Assets/bug.png"),
          repeat: "no-repeat",
          height: "5rem",
        };
      case "dark":
        return {
          color: "#736C75",
          url: require("../Assets/bug.png"),
          repeat: "no-repeat",
          height: "5rem",
        };
      case "fighting":
        return {
          color: "#CB5F48",
          url: require("../Assets/fighting.png"),
          repeat: "no-repeat",
          height: "5rem",
        };
      case "ghost":
        return {
          color: "#846AB6",
          url: require("../Assets/poison.png"),
          repeat: "no-repeat",
          height: "5rem",
        };
      case "ground":
        return {
          color: "#CC9F4F",
          url: require("../Assets/ground.png"),
          repeat: "no-repeat",
          height: "5rem",
        };
      case "ice":
        return {
          color: "#70CBD4",
          url: require("../Assets/ice.png"),
          repeat: "no-repeat",
          height: "5rem",
        };
      case "normal":
        return {
          color: "#AAB09F",
          url: require("../Assets/normal.png"),
          repeat: "no-repeat",
          height: "5rem",
        };
      case "poison":
        return {
          color: "#B468B7",
          url: require("../Assets/poison.png"),
          repeat: "no-repeat",
          height: "5rem",
        };
      case "psychic":
        return {
          color: "#E5709B",
          url: require("../Assets/psychic.png"),
          repeat: "no-repeat",
          height: "5rem",
        };
      case "dragon":
        return {
          color: "#6A7BAF",
          url: require("../Assets/dragon.png"),
          repeat: "no-repeat",
          height: "5rem",
        };
      case "steel":
        return {
          color: "#89A1B0",
          url: require("../Assets/steel.png"),
          repeat: "no-repeat",
          height: "5rem",
        };
      case "rock":
        return {
          color: "#B2A061",
          url: require("../Assets/rock.png"),
          repeat: "no-repeat",
          height: "5rem",
        };
      default:
        return {
          color: "#B468B7",
          url: require("../Assets/dragon.png"),
          repeat: "no-repeat",
          height: "5rem",
        }; // Default color
    }
  };

  const backgroundColor = getTypeColor(type).color;
  const backgroundImage = `URL(${getTypeColor(type).url})`;
  const backgroundRepeat = getTypeColor(type).repeat;
  const backgroundSize = "5rem";
  // console.log(backgroundImage);
  return (
    <div
      className="pokemon-container"
      style={{
        backgroundColor,
        backgroundImage,
        backgroundRepeat,
        backgroundSize,
      }}
    >
      <div className="pokemon-img">
        {officialArtwork ? (
          <img src={officialArtwork} alt="pokemon image" />
        ) : (
          <img src={IMG} alt="default pokemon image" />
        )}
      </div>
      <div className="pokemon-info">
        <h2 className="pokemon-name">{name}</h2>
        <h4 className="pokemon-type">{type}</h4>

        <div className="pokemon-stats">
          <div className="stat-item">
            <span className="stat-label">HP:</span>
            <span className="stat-value">{hp}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Attack:</span>
            <span className="stat-value">{attack}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Defense:</span>
            <span className="stat-value">{defense}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Special Attack:</span>
            <span className="stat-value">{specialAttack}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Speed:</span>
            <span className="stat-value">{speed}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
