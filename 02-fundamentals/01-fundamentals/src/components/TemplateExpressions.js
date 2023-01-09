const TemplateExpressions = () => {
  const name = "Pedro";
  const data = {
    age: "23",
    job: "Student",
  };
  return (
    <div>
      <h1>Olá, meu nome é {name}</h1>
      <p>Atualmente meu trabalho é: {data?.job}</p>
    </div>
  );
};

export default TemplateExpressions;
