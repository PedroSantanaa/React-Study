import styles from "./Form.module.css";
import { ITask } from "../interfaces/Task";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number): void;
}
const Form = ({ btnText, taskList, setTaskList, task, handleUpdate }: Props) => {
  //states
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    } else {
    }
  }, [task]);

  //handle functions

  const taskHandle = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      //Id to edit or delete
      const id = Math.floor(Math.random() * 1000);
      const newTask: ITask = { id, title, difficulty };
      setTaskList!([...taskList, newTask]);

      setTitle("");
      setDifficulty(0);
    }
  };
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    if (ev.target.name === "title") {
      setTitle(ev.target.value);
    } else {
      setDifficulty(Number(ev.target.value));
    }
  };
  return (
    <form onSubmit={taskHandle} className={styles.form}>
      <div>
        <label>
          <input
            type="text"
            name="title"
            placeholder="Add a new task"
            onChange={handleChange}
            value={title}
            required
          />
        </label>
      </div>
      <div>
        <label>
          <p>Difficulty:</p>
          <input
            type="text"
            name="difficulty"
            placeholder="0"
            onChange={handleChange}
            value={difficulty}
          />
        </label>
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};
export default Form;
