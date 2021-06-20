import React from "react";
import Hero from "./hero";
import Submenu from "./submenu.jsx";
import "./stripe-submenu.styles.scss";
import StripeNavbar from "./stripe-navbar";
import StripeSidebar from "./stripe-sidebar";

const StripeSubmenuPage = () => {
  return (
    <>
      <StripeNavbar />
      <StripeSidebar />
      <Hero />
      <Submenu />
    </>
  );
};

export default StripeSubmenuPage;
