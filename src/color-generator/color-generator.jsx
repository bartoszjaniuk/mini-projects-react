import React, { useState } from "react";
import "./color-generator.styles.scss";

import Values from "values.js";

const ColorGenerator = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("👳‍♂️");
    try {
      let colors = new Values(color).all(10);
      console.log("Colors: ", colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={handleChange}
            className={`color-input ${error ? "error" : null}`}
            placeholder="#f15025"
          />
          <button className="btn">submit</button>
        </form>
      </section>
      <section className="colors">
        <h4>list goes here</h4>
      </section>
    </>
  );
};

export default ColorGenerator;
