import React, { useEffect, useState } from "react";
import data from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
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
    <section className="slider__section">
      <div className="slider__title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="slider__section-center">
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
              <img
                src={image}
                alt={name}
                className="slider__person-img-circle"
              />
              <h4>{name}</h4>
              <p className="slider__title">{title}</p>
              <p className="slider__text">{quote}</p>
              <FaQuoteRight className="slider__icon" />
            </article>
          );
        })}
        <button
          className="slider__prev"
          onClick={() => {
            if (index === 0) return setIndex(people.length - 1);
            else return setIndex(index - 1);
          }}
        >
          <FiChevronLeft />
        </button>
        <button className="slider__next" onClick={() => nextSlide()}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Slider;
