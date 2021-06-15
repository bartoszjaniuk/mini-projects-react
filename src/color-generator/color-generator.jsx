import React, { useState } from "react";
import "./color-generator.styles.scss";
import SingleColor from "./single-color";

import Values from "values.js";

const ColorGenerator = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#6666ff").all(5));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("👳‍♂️");
    try {
      let colors = new Values(color).all(5);
      setList(colors);
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
            placeholder="#6666ff"
          />
          <button className="btn">submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          console.log(color);
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
};

export default ColorGenerator;
