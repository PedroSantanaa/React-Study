import styles from "./CreatePost.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formErrorMessage, setformErrorMessage] = useState("");
  const { user } = useAuthValue();
  const { insertDocument, response } = useInsertDocument("posts");
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
    if (formErrorMessage) {
      return;
    } else {
      insertDocument({
        title,
        image,
        body,
        tags: tagsArray,
        uid: user.uid,
        createBy: user.displayName,
      });
      // //redirect to homepage
      // navigate("/");
    }
  };

  return (
    <div className={styles.create}>
      <h2>Create Post</h2>
      <p>Write whatever you want to share and spread knowledge</p>
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
        {!response.loading && <button className="btn">Post it</button>}
        {response.loading && (
          <button className="btn" disabled>
            Wait...
          </button>
        )}
        {response.error && <p className="error">{response.error}</p>}
        {formErrorMessage && <p className="error">{formErrorMessage}</p>}
      </form>
    </div>
  );
};
export default CreatePost;
