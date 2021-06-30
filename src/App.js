import React from "react";
import AccordionPage from "./accordion/accordion-page";
import ColorGeneratorPage from "./color-generator/color-generator-page";
import GroceryListPage from "./grocery-list/grocery-list-page";
import LoremGeneratorPage from "./lorem-generator/lorem-generator-page";
import RestaurantMenuPage from "./restaurant-menu/restaurant-menu-page";
import ReviewsPage from "./reviews/reviews-page";
import SliderPage from "./slider/slider-page";
import NavbarPage from "./navbar/navbar-page";
import TasksTodoPage from "./tasks-todo-with-reducer/tasks-todo-page.jsx";
import SidebarPage from "./sidebar/sidebar-page";
import { AppProvider } from "./sidebar/context";
import FetchExamplePage from "./fetch-example/fetch-example-page";
import StripeSubmenuPage from "./stripe-submenu/stripe-submenu-page";
import { SubmenuAppProvider } from "./stripe-submenu/context";
import ReactRouterPage from "./react-router/react-router-page";
import ShowcasePage from "./showcase/showcase-page";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ErrorPage from "./showcase/error-page";
import PeopleList from "./react-router/people-list";
import Person from "./react-router/person";
import MemoPage from "./memo/memo-page";
import CartPage from "./cart/cart-page";
import { Provider } from "react-redux";
import { CartProvider } from "./cart/context";
import CoctailsPage from "./coctails/coctails-page";
import { coctailsStore } from "./coctails/redux/coctailsStore";

const App = () => {
  return (
    <>
      <Router>
        <button>
          <Link to="/">🏠</Link>
        </button>
        <Switch>
          <Route exact path="/" component={ShowcasePage} />
          <Route path="/accordion" component={AccordionPage} />
          <Route path="/color-generator" component={ColorGeneratorPage} />
          <Route path="/fetch-example" component={FetchExamplePage} />
          <Route path="/grocery-list" component={GroceryListPage} />
          <Route path="/lorem-generator" component={LoremGeneratorPage} />
          <Route path="/navbar" component={NavbarPage} />

          <Route path="/react-router" component={ReactRouterPage} />
          <Route path="/people" component={PeopleList} />
          <Route path="/person/:id" children={Person} />

          <Route path="/restaurant-menu" component={RestaurantMenuPage} />
          <Route path="/memo" component={MemoPage} />
          <Route path="/reviews" component={ReviewsPage} />
          <Route
            path="/cart"
            render={() => (
              <CartProvider>
                <CartPage />
              </CartProvider>
            )}
          />
          <Route
            path="/sidebar"
            render={() => (
              <AppProvider>
                <SidebarPage />
              </AppProvider>
            )}
          />
          <Route
            path="/six-tabs-menu"
            render={() => (
              <SubmenuAppProvider>
                <StripeSubmenuPage />
              </SubmenuAppProvider>
            )}
          />
          <Route path="/slider" component={SliderPage} />
          <Route path="/tasks-todo-with-reducer" component={TasksTodoPage} />
          <Route
            path="/coctails"
            render={() => (
              <Provider store={coctailsStore}>
                <CoctailsPage />
              </Provider>
            )}
          />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
