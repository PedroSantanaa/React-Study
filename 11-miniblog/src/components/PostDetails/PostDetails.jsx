import styles from "./PostDetails.module.css";
import { Link } from "react-router-dom";

const PostDetails = ({ post }) => {
  return (
    <div className={styles.post_details}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createdBy}>{post.createdBy}</p>
      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        See
      </Link>
    </div>
  );
};
export default PostDetails;
