import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    submenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const containerRef = useRef(null);
  const [columns, setColumns] = useState("col-2");
  useEffect(() => {
    setColumns("col-2");
    const submenu = containerRef.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns("col-3");
    }

    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]);

  return (
    <aside
      ref={containerRef}
      className={`${submenuOpen ? "submenu show" : "submenu"}`}
    >
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
