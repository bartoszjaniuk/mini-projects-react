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
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          filterItems={filterItems}
          categories={allCategoriesFromData}
          searchItems={searchItems}
        />
        <MenuItems items={menu} />
      </section>
    </main>
  );
};

export default RestaurantMenu;
