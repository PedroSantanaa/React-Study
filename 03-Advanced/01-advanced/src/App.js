//Css
import "./App.css";
//Imgs
import City from "./assets/city.jpg";
//Components
import ManageDate from "./components/ManageDate";
import CondicionalRender from "./components/CondicionalRender";
import ListRender from "./components/ListRender";
import ShowUserName from "./components/ShowUserName";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import { useState } from "react";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
  const users = [
    { id: 1, name: "Pedro", age: 23 },
    { id: 2, name: "Tiago", age: 23 },
    { id: 3, name: "Raquel", age: 55 },
  ];

  function showMessage() {
    console.log("Evento do componente com funcao de props");
  }

  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const people = [
    { id: 1, name: "Pedro", age: 23, job: "Student" },
    { id: 2, name: "Tiago", age: 16, job: "Student" },
    { id: 3, name: "Raquel", age: 55, job: "Laboratory" },
  ];
  return (
    <div className="App">
      <h1>Advanced React</h1>
      {/* Imagem em public */}
      <div>
        <img src="./img1.jpg" alt="paisagem" />
      </div>
      {/* Imagem em src/asset */}
      <div>
        <img src={City} alt="City" />
      </div>
      {/* Components */}
      <ManageDate />
      <ListRender />
      <CondicionalRender />
      <ShowUserName name="Pedro" age={23} />
      <ShowUserName name="Tiago" age={23} />
      <ShowUserName name="Raquel" age={55} />
      {/* loop in array of objects */}
      {users.map((user) => (
        <div key={user.id}>
          <hr />
          <h2>Using loop</h2>
          <ShowUserName key={user.id} name={user.name} age={user.age} />
          <hr />
        </div>
      ))}
      {/* children prop */}
      <Container>
        <p>Conteudo dentro do Container</p>
      </Container>
      {/* function with props */}
      <ExecuteFunction showMessage={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* Exercice */}
      {people.map((person) => (
        <UserDetails
          key={person.id}
          name={person.name}
          age={person.age}
          job={person.job}
        />
      ))}
    </div>
  );
}

export default App;
