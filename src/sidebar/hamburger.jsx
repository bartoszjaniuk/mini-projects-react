import React from "react";
import { useGlobalContext } from "./context";
const Hamburger = () => {
  const { openSidebar } = useGlobalContext();
  console.log(openSidebar);
  return (
    <button className="sidebar-hamburger" onClick={openSidebar}>
      <span className="sidebar-hamburger__container">
        <span className="sidebar-hamburger__inner" />
      </span>
    </button>
  );
};

export default Hamburger;
