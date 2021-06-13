import React, { useEffect, useState } from "react";
import data from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./slider.styles.scss";

const Slider = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     nextSlide();
  //   }, 5000);
  //   return () => {
  //     clearInterval(slider);
  //   };
  // }, [index]);

  const nextSlide = () => {
    if (index === people.length - 1) return setIndex(0);
    else return setIndex(index + 1);
  };

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img-circle" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() => {
            if (index === 0) return setIndex(people.length - 1);
            else return setIndex(index - 1);
          }}
        >
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => nextSlide()}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Slider;
