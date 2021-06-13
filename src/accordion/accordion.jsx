import React, { useEffect, useState } from "react";
import SinglePlanet from "./single-planet";

const Accordion = () => {
  const [planets, setPlanets] = useState([]);
  const url = "https://swapi.dev/api/planets/";
  const fetchStarWarsPlanets = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPlanets(data.results);
  };

  useEffect(() => {
    fetchStarWarsPlanets();
    console.log(planets);
  }, []);
  return (
    <main className="review">
      <div className="container">
        <h3>Star Wars 🪐 from SWAPI </h3>
        <section className="info">
          {planets.map((planet) => {
            return <SinglePlanet key={planet.id} {...planet} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default Accordion;
