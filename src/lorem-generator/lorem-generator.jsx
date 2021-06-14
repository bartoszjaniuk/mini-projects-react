import React, { useState } from "react";
import data from "./data";
import "./lorem.styles.scss";

const LoremGenerator = () => {
  const [number, setNumber] = useState(0);
  const [type, setType] = useState("paragraphs");
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    let amount = parseInt(number);
    e.preventDefault();
    if (type === "paragraphs") {
      if (amount <= 0) return (amount = number + 1);
      if (amount > 8) return (amount = 8);
      const countedParagraphs = data.splice(0, amount);
      setText(countedParagraphs);
    }
    if (type === "words") {
      const countedWord = data[0]
        .toString()
        .split(" ")
        .slice(0, number)
        .join(" ");
      setText(countedWord);
    }
  };
  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  return (
    <section className="section-center-lorem">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <select name="type" id="type" value={type} onChange={handleChangeType}>
          <option value="paragraphs">Paragraphs</option>
          <option value="words">Words</option>
        </select>
        <input
          type="number"
          name="number"
          id="number"
          value={number}
          onChange={handleChange}
        />
        <button className="btn">Generate</button>
      </form>
      <article className="lorem-text">
        <p>{text}</p>
      </article>
    </section>
  );
};

export default LoremGenerator;
