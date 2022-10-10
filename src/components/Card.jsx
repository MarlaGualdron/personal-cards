// const person = [
//   { name: "Marla", age: 30, position: "programador" },
//   { name: "Miguel", age: 25, position: "programador" },
//   { name: "Sole", age: 41, position: "programador" },
//   { name: "Lucas", age: 30, position: "programador" },
//   { name: "Nati", age: 50, position: "diseñador gráfico" },
// ];

const Card = (props) => {
  return (
    <div class="person">
      <h2>Name: {props.name}</h2>
      <h3>Position: {props.position}</h3>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default Card;
