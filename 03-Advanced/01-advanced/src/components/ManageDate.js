import { useState } from "react";
const ManageDate = () => {
  const [number, setNumber] = useState(10);

  const changeNumber = () => {
    setNumber(15);
  };

  return (
    <div>
      <div>
        <p>O valor da variavel é:{number}</p>
        <button onClick={changeNumber}>Trocar valor da variavel</button>
      </div>
    </div>
  );
};
export default ManageDate;
