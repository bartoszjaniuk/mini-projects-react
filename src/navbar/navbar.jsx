import React, { useState } from "react";
import { navigation } from "./links";
import SocialIcons from "./social-icons";

const logoUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setShowLinks(!showLinks);
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar__center">
        <div className="navbar__header">
          <div className="logo__container">
            <img src={logoUrl} alt="logo" className="logo__img" />
          </div>
          <div className="logo__title">React Menu</div>
          <button
            className={`${isActive ? "hamburger active" : "hamburger"}`}
            onClick={toggleMenu}
          >
            <span className="hamburger__container">
              <span className="hamburger__inner" />
            </span>
          </button>
        </div>
        <div className={`links-container ${isActive ? "active" : ""}`}>
          <ul className="links">
            {navigation.map((link) => {
              return (
                <li className="item" key={link.id}>
                  <a href="#" className="link">
                    {link.text.toUpperCase()}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <SocialIcons isActive={isActive} />
      </div>
    </nav>
  );
};

export default Navbar;
