import React, { useState } from "react";

const Categories = ({ filterItems, categories, searchItems }) => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    searchItems(search);
    console.log(e.target.value);
  };
  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <button
          className="filter-btn"
          onClick={() => filterItems(category)}
          key={index}
        >
          {category}
        </button>
      ))}
      <form>
        <input
          name="search"
          placeholder="search"
          value={search}
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
};

export default Categories;
