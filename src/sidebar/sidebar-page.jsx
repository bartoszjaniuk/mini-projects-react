import React from "react";
import Hamburger from "./hamburger";
import Sidebar from "./sidebar";
import "./sidebar.styles.scss";

const SidebarPage = () => {
  return (
    <div>
      <Hamburger />
      <Sidebar />
    </div>
  );
};

export default SidebarPage;
