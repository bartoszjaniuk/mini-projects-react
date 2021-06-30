import React from "react";
import Navbar from "./navbar";
import "./navbar.styles.scss";
import { navigationLinks } from "./links";
const logoUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png";
const NavbarPage = () => {
  return (
    <Navbar
      navigationLinks={navigationLinks}
      logoIcon={logoUrl}
      title="Reusable Nav"
    />
  );
};

export default NavbarPage;
