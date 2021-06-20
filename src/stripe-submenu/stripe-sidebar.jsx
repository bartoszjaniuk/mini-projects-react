import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const StripeSidebar = () => {
  const { closeSidebar, sidebarOpen } = useGlobalContext();
  return (
    <aside
      className={`${sidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}`}
    >
      <div className="stripe-sidebar">
        <button className="stripe-sidebar__close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar__links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <div key={index}>
                <h4>{page}</h4>
                <div className="stripe-sidebar__sublinks">
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default StripeSidebar;
