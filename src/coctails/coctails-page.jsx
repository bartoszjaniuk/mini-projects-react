import React from "react";
import Coctails from "./coctails";
import Navbar from "../navbar/navbar";
import { navigationLinks } from "./navbar/links";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const logoUrl = "https://image.flaticon.com/icons/png/512/38/38706.png";

const CoctailsPage = () => {
  return (
    <Router>
      <Navbar
        navigationLinks={navigationLinks}
        logoIcon={logoUrl}
        title="Coctails"
      />
      <Route path="/coctails" component={Coctails} />
      {/* COCKTAIL ID */}
      <Route path="/cocktail/:id" component={Coctails} />

      {/* ABOUT TODO */}
      <Route path="/about" component={Coctails} />
    </Router>
  );
};

export default CoctailsPage;
