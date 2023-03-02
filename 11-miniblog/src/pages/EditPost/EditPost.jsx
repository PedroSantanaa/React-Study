import styles from "./EditPost.module.css";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import { useFetchDocument } from "../../hooks/useFetchDocument";
const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formErrorMessage, setformErrorMessage] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
      setImage(post.image);
      const textTags = post.tags.join(", ");
      setTags(textTags);
    }
  }, [post]);

  const { user } = useAuthValue();
  const { updateDocument, response } = useUpdateDocument("posts");
  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();

    setformErrorMessage("");

    //validate image URL
    try {
      new URL(image);
    } catch (error) {
      return setformErrorMessage("Image need to be a URL");
    }
    //array of tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());
    //create all the values
    if (!title || !image || !tags || !body) {
      return setformErrorMessage("fill all the inputs");
    }
    const data = {
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createBy: user.displayName,
    };
    if (formErrorMessage) {
      return;
    } else {
      updateDocument(id, data);
      // //redirect to homepage
      navigate("/dashboard");
    }
  };

  return (
    <div className={styles.editPost}>
      {post && (
        <>
          <h2>Editing Post: {post.title}</h2>
          <p>Edit your post to what ever you want</p>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Title:</span>
              <input
                type="text"
                name="title"
                placeholder="Title of the post"
                value={title}
                onChange={(ev) => setTitle(ev.target.value)}
              />
            </label>
            <label>
              <span>Image URL:</span>
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={image}
                onChange={(ev) => setImage(ev.target.value)}
              />
            </label>
            <p className={styles.preview_title}>Current Image: </p>
            <img src={post.image} alt={post.title} className={styles.img_preview} />
            <label>
              <span>Content:</span>
              <textarea
                name="body"
                placeholder="Content of the post"
                value={body}
                onChange={(ev) => setBody(ev.target.value)}
                required
              ></textarea>
            </label>
            <label>
              <span>Tags:</span>
              <input
                type="text"
                name="tags"
                required
                placeholder="Insert tags separated by comma"
                value={tags}
                onChange={(ev) => setTags(ev.target.value)}
              />
            </label>
            {!response.loading && <button className="btn">Update it</button>}
            {response.loading && (
              <button className="btn" disabled>
                Wait...
              </button>
            )}
            {response.error && <p className="error">{response.error}</p>}
            {formErrorMessage && <p className="error">{formErrorMessage}</p>}
          </form>
        </>
      )}
    </div>
  );
};
export default EditPost;
