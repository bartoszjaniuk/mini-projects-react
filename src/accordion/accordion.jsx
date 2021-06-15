import React, { useEffect, useState } from "react";
import SinglePlanet from "./single-planet";

const Accordion = () => {
  const [planets, setPlanets] = useState([]);
  const url = "https://swapi.dev/api/planets/";
  const fetchStarWarsPlanets = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPlanets(data.results);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchStarWarsPlanets();
    console.log(planets);
  }, []);
  return (
    <main className="main">
      <div className="accordion__container">
        <h3>Star Wars 🪐 from SWAPI </h3>
        <section className="info">
          {planets.map((planet, index) => {
            return <SinglePlanet key={index} {...planet} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default Accordion;
