import { useState, useEffect } from "react";
import { data } from "./data";
import { Link, useParams } from "react-router-dom";

const Person = ({ match }) => {
  const id = match.params.id;
  const currentPerson = data.find((person) => person.id === parseInt(id));
  return (
    <div>
      <p>
        User with {id} has name {currentPerson.name}
      </p>
    </div>
  );
};

export default Person;
