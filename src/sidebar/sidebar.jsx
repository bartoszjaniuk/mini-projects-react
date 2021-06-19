import React from "react";
import { navigationLinks, socialIcons } from "./sidebar-data.js";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context.js";

const Sidebar = () => {
  const { closeSidebar, isOpen } = useGlobalContext();

  const logoUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png";
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <div className="sidebar__header">
        <button className="sidebar__close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>

      <ul className="sidebar__links">
        <div className="sidebar__logo-container">
          <img src={logoUrl} alt="logo" className="sidebar__logo" />
        </div>
        {navigationLinks.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id} className="sidebar__item">
              <a href={url} className="sidebar__link">
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="sidebar__social-icons">
        {socialIcons.map((social) => {
          const { id, url, icon } = social;
          return (
            <li key={id} className="sidebar__social-icons__item">
              <a href={url} className="sidebar__social-icons__link">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
