import "./MyForms.css";
import { useState } from "react";

const MyForms = ({ user }) => {
  //6-Controlled inputs
  //3-Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //7-limpar forms
    setName("");
    setEmail("");
    setBio("");
  };
  return (
    <div>
      {/* 5-Envio de form */}
      {/* criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* label envolvendo input */}
        <label>
          <span>Email:</span>
          {/* simplicação de manipulação com state inline */}
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* Text area */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="descrição do usuario"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* select */}
        <label>
          <span>Função do sistema:</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuario</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>

        <input type="submit" />
      </form>
    </div>
  );
};
export default MyForms;
