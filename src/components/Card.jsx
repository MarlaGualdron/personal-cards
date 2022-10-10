import React from "react";
import "../../src/index.css";

const person = { name: "Miguel", age: 25, position: "programador" };

const Card = () => {
  return (
    <div className="person">
      <h2>Name: {person.name}</h2>
      <h3>Position: {person.position}</h3>
      <p>Age: {person.age}</p>
    </div>
  );
};

export default Card;
