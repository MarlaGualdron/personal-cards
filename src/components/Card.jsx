import React from "react";
import "../../src/index.css";
import Marla from "../images/Marla.jpg";

const person = [
  {
    id: 1,
    name: "Marla",
    age: 30,
    position: "programador",
    linkdn: "https://www.linkedin.com/in/marla-gualdron/",
    image: Marla,
  },
  {
    id: 2,
    name: "Miguel",
    age: 25,
    position: "programador",
    linkdn: "",
    image: "",
  },
  {
    id: 3,
    name: "Sole",
    age: 41,
    position: "programador",
    linkdn: "",
    image: "",
  },
  {
    id: 4,
    name: "Lucas",
    age: 30,
    position: "programador",
    linkdn: "",
    image: "",
  },
  {
    id: 5,
    name: "Nati",
    age: 50,
    position: "diseñador gráfico",
    linkdn: "",
    image: "image",
  },
];

const CardListItem = (props) => {
  return (
    <div className="container">
      <div className="card">
        <img src={props.person.image} alt="profile" />
        <h2>Name: {props.person.name}</h2>
        <h3>Position: {props.person.position}</h3>
        <h3>Age: {props.person.age}</h3>
        <p>
          <a href={props.person.linkdn}>Linkdn</a>
        </p>
      </div>
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
