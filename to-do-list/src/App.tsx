import { useState } from "react";

//Css
import styles from "./App.module.css";

//Interfaces
import { ITask } from "./interfaces/Task";

//Componentes
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };
  return (
    <h1>
      <Header />
      <main className={styles.main}>
        <div className="form"></div>
        <Form btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList} />
        <div className={styles.todo}>
          <List taskList={taskList} handleDelete={deleteTask} />
        </div>
      </main>
      <Footer />
    </h1>
  );
}

export default App;
