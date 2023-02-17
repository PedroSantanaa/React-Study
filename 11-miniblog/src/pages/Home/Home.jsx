//CSS
import styles from "./Home.module.css";
//HOOKS
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

//COMPONENTS
import PostDetails from "../../components/PostDetails/PostDetails";
const Home = () => {
  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments("posts");
  const handleSubmit = (ev) => {};
  return (
    <div className={styles.home}>
      <h1>Recent Posts</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type="text"
          placeholder="Search for tags"
          onChange={(ev) => setQuery(ev.target.value)}
        />
        <button className="btn btn-dark">Search</button>
      </form>
      <div>
        {loading && <p>Loading...</p>}
        {posts && posts.map((post) => <PostDetails key={post.id} post={post} />)}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Posts not found</p>
            <Link to="/posts/create" className="btn">
              Create first post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
