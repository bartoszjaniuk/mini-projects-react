import React from "react";
import { Link } from "react-router-dom";
import styles from "./showcase.module.scss";

const projectList = [
  { id: 1, name: "accordion", url: "/accordion" },
  { id: 2, name: "color-generator", url: "/color-generator" },
  { id: 3, name: "fetch-example", url: "/fetch-example" },
  { id: 4, name: "grocery-list", url: "/grocery-list" },
  { id: 5, name: "lorem-generator", url: "/lorem-generator" },
  { id: 6, name: "navbar", url: "/navbar" },
  { id: 7, name: "react-router", url: "/react-router" },
  { id: 8, name: "restaurant-menu", url: "/restaurant-menu" },
  { id: 9, name: "reviews", url: "/reviews" },
  { id: 10, name: "sidebar", url: "/sidebar" },
  { id: 11, name: "six-tabs-menu", url: "/six-tabs-menu" },
  { id: 12, name: "slider", url: "/slider" },
  { id: 13, name: "tasks-todo-with-reducer", url: "/tasks-todo-with-reducer" },
  { id: 14, name: "memo", url: "/memo" },
  { id: 15, name: "shopping-cart", url: "/cart" },
  { id: 16, name: "coctails", url: "/coctails" },
];

const ShowcasePage = () => {
  return (
    <div className={styles.showcase}>
      <div className={styles.showcase__container}>
        {projectList.map((project) => {
          const { id, name, url } = project;
          return (
            <div className={styles.card} key={id}>
              <p className={styles.card__name}>{name}</p>
              <button className={styles.card__button}>
                <Link className={styles.card__button__link} to={url}>
                  GO TO PROJECT
                </Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowcasePage;
