import React from "react";
import "../../src/index.css";

const person = [
  { id: 1, name: "Marla", age: 24, position: "programador" },
  { id: 2, name: "Miguel", age: 29, position: "programador" },
  { id: 3, name: "Sole", age: 30, position: "programador" },
  { id: 4, name: "Lucas", age: 30, position: "programador" },
  { id: 5, name: "Nati", age: 30, position: "diseñador gráfico" },
];

const CardListItem = (props) => {
  return (
    <div className="card">
      <h2>Name: {props.person.name}</h2>
      <h3>Position: {props.person.position}</h3>
      <p>Age: {props.person.age}</p>
    </div>
  );
};

const CardList = () => {
  return (
    <ul style={{ listStyleType: "none" }}>
      {person.map((person) => {
        return <CardListItem person={person} key={person.id} />;
      })}
    </ul>
  );
};

export default function Card() {
  return (
    <div className="Card">
      <CardList />
    </div>
  );
}
