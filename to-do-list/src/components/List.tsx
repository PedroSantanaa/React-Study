//interface
import { ITask } from "../interfaces/Task";

//css
import styles from "./List.module.css";

type Props = {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void;
};
const List = ({ taskList, handleDelete, handleEdit }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>{task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i
                className="bi bi-pencil"
                onClick={() => {
                  handleEdit(task);
                }}
              ></i>
              <i
                className="bi bi-x-circle"
                onClick={() => {
                  handleDelete(task.id);
                }}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não tem tarefas</p>
      )}
    </>
  );
};
export default List;
