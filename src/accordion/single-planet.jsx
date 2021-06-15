import React, { useState } from "react";
import "./accordion.styles.scss";
import { FiPlus, FiMinus } from "react-icons/fi";
const SinglePlanet = ({ name, population, terrain, gravity }) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div className="question">
      <header>
        <h4>{name}</h4>
        <button
          className="accordion__btn"
          onClick={() => setShowDescription(!showDescription)}
        >
          {!showDescription ? <FiPlus /> : <FiMinus />}
        </button>
      </header>
      {showDescription && (
        <>
          <p>Population: {population}</p>
          <p>Terrain: {terrain}</p>
          <p>Gravity: {gravity}</p>
        </>
      )}
    </div>
  );
};

export default SinglePlanet;
