import styles from "./Search.module.css";

//hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";
import { Link } from "react-router-dom";
//components
import PostDetails from "../../components/PostDetails/PostDetails";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");
  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className={styles.search_container}>
      <h2>Search</h2>
      <div>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Posts that you are searched not founded</p>
            <Link to="/" className="btn btn-dark">
              Back to Home
            </Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetails key={post.id} post={post} />)}
        {posts && (
          <Link to="/" className="btn btn-dark">
            Back to Home
          </Link>
        )}
      </div>
    </div>
  );
};
export default Search;
