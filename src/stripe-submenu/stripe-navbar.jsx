import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const StripeNavbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    console.log("oPEN SubMeNu👴");
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    console.log(tempBtn);
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    console.log(bottom);
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("stripe-nav__link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <nav className="stripe-nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="stripe-nav__header">
          <img src={logo} alt="logo" className="stripe-nav__logo" />
          <button
            className="stripe-nav__btn stripe-nav__toggle-btn"
            onClick={openSidebar}
          >
            <FaBars />
          </button>
        </div>
        <ul className="stripe-nav__links">
          <li className="stripe-nav__item">
            <button
              className="stripe-nav__link-btn"
              onMouseOver={displaySubmenu}
            >
              products
            </button>
          </li>
          <li className="stripe-nav__item">
            <button
              className="stripe-nav__link-btn"
              onMouseOver={displaySubmenu}
            >
              developers
            </button>
          </li>
          <li className="stripe-nav__item">
            <button
              className="stripe-nav__link-btn"
              onMouseOver={displaySubmenu}
            >
              company
            </button>
          </li>
        </ul>
        <button className="stripe-nav__btn stripe-nav__signin-btn">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default StripeNavbar;
