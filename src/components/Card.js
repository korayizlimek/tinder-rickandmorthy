import React, { useState } from "react";
import "./Card.css";

// Icons
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

//Button
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

function Card({ id, status, character }) {
  const [favorite, setFavorite] = useState(false);
  const [star, setStar] = useState(false);
  const [flash, setFlash] = useState(false);

  let cardClassName;
  if (character.status === "Alive") {
    cardClassName = "card-alive";
  } else if (character.status === "Dead") {
    cardClassName = "card-dead";
  } else {
    cardClassName = "";
  }

  const cartContentInformations = [
    "name",
    "status",
    "species",
    "gender",
    "type",
    "location",
  ];

  const contentFirstLetterUpperCase = (information) => {
    return information.charAt(0).toUpperCase() + information.slice(1);
  };

  const contentInformationToPropsName = (information) => {
    if (information === "location") {
      return character[information].name;
    }
    return character[information];
  };

  return (
    <div className={`card ${cardClassName}`}>
      <Link to={`/detail/${id}`}>
        <div className="card-image-section">
          <img className="card-image" src={character.image} alt="avatar" />
        </div>
        <div className="card-content-section">
          {cartContentInformations.map(
            (information) =>
              contentInformationToPropsName(information) !== "" && (
                <p>
                  <span className="card-title">
                    {contentFirstLetterUpperCase(information)}:
                  </span>
                  {contentInformationToPropsName(information)}
                </p>
              )
          )}
        </div>
      </Link>
      <div className="card-buttons">
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

export default Card;
