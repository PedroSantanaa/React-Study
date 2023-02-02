import { useContext } from "react";
import { AppContext } from "../App";

const Context = () => {
  const details = useContext(AppContext);
  return (
    <>
      {details && (
        <div>
          <h2>Linguaguem:{details.language}</h2>
          <h4>Framework:{details.framework}</h4>
          <p>Quantidade de projets:{details.projects}</p>
        </div>
      )}
    </>
  );
};
export default Context;
