import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRA711Gh8iEH5h9zYJ_FVWJ85_F2z_X6dtRivmOTYewdONo4u2-96l8eUOWKODB6oF4so&usqp=CAU"
        alt="todo-img"
        className={styles.todoImg}
      />
      <h1 className={styles.titleHeader}>Todo List</h1>
    </header>
  );
};
export default Header;
