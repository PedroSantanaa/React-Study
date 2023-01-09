import { useState } from "react";
const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "Tiago", "Isabela"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Pedro", age: 23 },
    { id: 2, name: "Tiago", age: 23 },
    { id: 3, name: "Maria", age: 28 },
  ]);
  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };
  return (
    <div>
      ListRender
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}--{user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete a random user</button>
    </div>
  );
};
export default ListRender;
