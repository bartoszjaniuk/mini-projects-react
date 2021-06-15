import React, { useEffect, useState } from "react";
// import "./review.styles.scss";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [people, setPeople] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchPeople = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const peopleWithImages = data.map((person, index) => {
        return {
          ...person,
          image: `https://robohash.org/${index + 1}/?set=set2`,
          info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        };
      });
      setPeople(peopleWithImages);
    } catch (error) {
      console.error(error);
    }
  };

  const nextSlide = () => {
    setIndex((index) => {
      return index === people.length - 1 ? (index = 0) : index + 1;
    });
  };

  const prevSlide = () => {
    setIndex((index) => {
      return index === 0 ? (index = people.length - 1) : index - 1;
    });
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <article className="review__article">
      <div className="review__img-container">
        <img
          src={people[index]?.image}
          alt={people[index]?.name}
          className="review__person-img"
        />
        <span className="review__quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="review__author">{people[index]?.name}</h4>
      <p className="review__job">{people[index]?.website}</p>
      <p className="review__info">{people[index]?.info}</p>
      <div className="review__button-container">
        <button className="review__prev-btn">
          <FaChevronLeft onClick={prevSlide} />
        </button>
        <button className="review__next-btn">
          <FaChevronRight onClick={nextSlide} />
        </button>
      </div>
    </article>
  );
};

export default Review;
