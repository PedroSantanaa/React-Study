//CSS
import styles from "./Footer.module.css";
//images
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Fell free to write whatever you want</h3>
      <p>MiniBlog &copy; 2023</p>
      <div className={styles.icons}>
        <a href="https://github.com/PedroSantanaa" target="_blank">
          <img src={github} alt="github" style={{ width: "30px" }} />
        </a>
        <a href="https://www.linkedin.com/in/pedro-santana-7305151a5/" target="_blank">
          <img src={linkedin} alt="linkedin" style={{ width: "30px" }} />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
