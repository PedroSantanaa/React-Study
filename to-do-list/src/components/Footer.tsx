import styles from "./Footer.module.css";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.titleFooter}>Todo List</h1>
      <p className={styles.subtitle}>Pedro Santana @2023</p>
      <div className={styles.icons}>
        <a href="https://github.com/PedroSantanaa" target="_blank">
          <img src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/pedro-santana-7305151a5/" target="_blank">
          <img src={linkedin} alt="github" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
