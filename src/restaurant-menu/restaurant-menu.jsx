import React, { useState } from "react";
import Categories from "./categories";
import MenuItems from "./menu-items";
import data from "./data";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState([]);

  const allCategoriesFromData = [
    "all",
    ...new Set(data.map((item) => item.category)),
  ];
  const filterItems = (category) => {
    if (category === "all") return setMenu(data);
    const filteredItems = data.filter((item) => item.category === category);
    setMenu(filteredItems);
  };

  const searchItems = (menuTitle) => {
    const searchItem = data.filter((menuItem) =>
      menuItem.title.includes(menuTitle)
    );
    console.log(searchItem);
    setMenu(searchItem);
  };
  return (
    <div>
      <div className="menu restaurant-section">
        <div className="menu__title">
          <h2>Menu</h2>
          <div className="menu__underline"></div>
        </div>
        <Categories
          filterItems={filterItems}
          categories={allCategoriesFromData}
          searchItems={searchItems}
        />
        <MenuItems items={menu} />
      </div>
    </div>
  );
};

export default RestaurantMenu;
