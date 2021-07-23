import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./CardDetail.css";

// Icons
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";
import Episode from "./Episode";

function CardDetail(props) {
  const params = useParams().character;

  const [character, setCharacter] = useState({});

  const [favorite, setFavorite] = useState(false);
  const [star, setStar] = useState(false);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${params}`)
      .then((res) => getCharacter(res.data))
      .catch((err) => console.log("Cart detail error: ", err));
  }, []);

  const getCharacter = (characters) => {
    let lastEpisodes = characters.episode.reverse().slice(0, 5);
    characters.episode = lastEpisodes;
    setCharacter(characters);
  };

  return (
    <div className="cardDetail">
      <div className="cardDetail-image-section">
        <img
          className="cardDetail-image"
          src={character.image}
          alt="CharacterDetailImage"
        />
      </div>
      <div className="cardDetail-descriptions-container">
        <div className="cardDetail-description">
          <p className="cardDetail-description-title">Name :</p>
          <p className="cardDetail-description-value">{character.name}</p>
        </div>
        <div className="cardDetail-description">
          <p className="cardDetail-description-title">Status :</p>
          <p className="cardDetail-description-value">
            {character.status}
          </p>
        </div>
        <div className="cardDetail-description">
          <p className="cardDetail-description-title">Species :</p>
          <p className="cardDetail-description-value">
            {character.species}
          </p>
        </div>
        {character.type && (
          <div className="cardDetail-description">
            <p className="cardDetail-description-title">Type :</p>
            <p className="cardDetail-description-value">
              {character.type}
            </p>
          </div>
        )}

        <div className="cardDetail-description">
          <p className="cardDetail-description-title">Gender :</p>
          <p className="cardDetail-description-value">
            {character.gender}
          </p>
        </div>
        <div className="cardDetail-description">
          <p className="cardDetail-description-title">Location :</p>
          <p className="cardDetail-description-value">
            {character.location?.name}
          </p>
        </div>
        <div className="cardDetail-description">
          <p className="cardDetail-description-title">Origin :</p>
          <p className="cardDetail-description-value">
            {character.origin?.name}
          </p>
        </div>
        <div className="cardDetail-description">
          <p className="cardDetail-description-title">Episodes :</p>
          <p className="cardDetail-description-value">
            {character.episode?.map((episode) => (
              <Episode episode={episode} />
            ))}
          </p>
        </div>
      </div>
      <div className="cardDetail-buttons">
        <IconButton onClick={() => setStar(!star)}>
          <StarRateIcon
            className={`card-button-icon ${
              star ? "card-button-icon-active" : ""
            }`}
          />
        </IconButton>
        <IconButton onClick={() => setFavorite(!favorite)}>
          <FavoriteIcon
            className={`card-button-icon ${
              favorite ? "card-button-icon-active" : ""
            }`}
          />
        </IconButton>
        <IconButton onClick={() => setFlash(!flash)}>
          <FlashOnIcon
            className={`card-button-icon ${
              flash ? "card-button-icon-active" : ""
            }`}
          />
        </IconButton>
      </div>
    </div>
  );
}

export default CardDetail;
