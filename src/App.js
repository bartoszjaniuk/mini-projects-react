import React from "react";
import AccordionPage from "./accordion/accordion-page";
import ColorGeneratorPage from "./color-generator/color-generator-page";
import GroceryListPage from "./grocery-list/grocery-list-page";
import LoremGeneratorPage from "./lorem-generator/lorem-generator-page";
import RestaurantMenuPage from "./restaurant-menu/restaurant-menu-page";
import ReviewsPage from "./reviews/reviews-page";
import SixTabsMenuPage from "./six-tabs-menu/six-tabs-menu-page";
import SliderPage from "./slider/slider-page";
import NavbarPage from "./navbar/navbar-page";
import TasksTodoPage from "./tasks-todo-with-reducer/tasks-todo-page.jsx";
import SidebarPage from "./sidebar/sidebar-page";
import { AppProvider } from "./sidebar/context";
import FetchExamplePage from "./fetch-example/fetch-example-page";
import StripeSubmenuPage from "./stripe-submenu/stripe-submenu-page";
import { SubmenuAppProvider } from "./stripe-submenu/context";

const App = () => {
  // return <ReviewsPage />;
  // return <AccordionPage />;
  // return <RestaurantMenuPage />;
  // return <SixTabsMenuPage />;
  // return <SliderPage />;
  // return <LoremGeneratorPage />;
  // return <ColorGeneratorPage />;
  // return <GroceryListPage />;
  // return <NavbarPage />;
  // return <TasksTodoPage />;

  // return (
  //   <AppProvider>
  //     <SidebarPage />
  //   </AppProvider>
  // );

  // return <FetchExamplePage />;
  return (
    <SubmenuAppProvider>
      <StripeSubmenuPage />
    </SubmenuAppProvider>
  );
};

export default App;
