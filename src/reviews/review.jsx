import React, { useEffect, useState } from "react";
import "./review.styles.scss";
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
      return index === people.length ? (index = 0) : index + 1;
    });
  };

  const prevSlide = () => {
    setIndex((index) => {
      return index === 0 ? (index = people.length) : index - 1;
    });
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <article className="review">
      <div className="img-container">
        <img
          src={people[index]?.image}
          alt={people[index]?.name}
          className="person-img"
        />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{people[index]?.name}</h4>
      <p className="job">{people[index]?.website}</p>
      <p className="info">{people[index]?.info}</p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft onClick={prevSlide} />
        </button>
        <button className="next-btn">
          <FaChevronRight onClick={nextSlide} />
        </button>
      </div>
    </article>
  );
};

export default Review;
