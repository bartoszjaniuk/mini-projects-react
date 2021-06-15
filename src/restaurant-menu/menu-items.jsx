import React from "react";
import "./restaurant-menu.styles.scss";

const MenuItems = ({ items }) => {
  return (
    <div className="menu__section-center">
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <div key={id} className="menu-item">
            <div className="photo-container">
              <img src={img} alt={title} className="photo" />
            </div>

            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
