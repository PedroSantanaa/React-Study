const UserDetails = ({ name, age, job }) => {
  return (
    <div>
      <h2>
        {name} com idade de {age} e profissao:{job}
      </h2>
      {age >= 18 ? <p>Pode tirar CNH</p> : <p>Não pode tirar CNH</p>}
    </div>
  );
};
export default UserDetails;
