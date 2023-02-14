import { Link } from "react-router-dom";
import styles from "./About.module.css";
const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        About the Mini<span>Blog</span>
      </h2>
      <p>This project is created in React to FrontEnd and FireBase to BackEnd</p>
      <Link to="/posts/create" className="btn">
        Create a Post
      </Link>
    </div>
  );
};
export default About;
