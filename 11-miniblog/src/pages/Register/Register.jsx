//css
import styles from "./Register.module.css";
//hooks
import { useState, useEffect } from "react";
const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setError("");

    const user = {
      displayName,
      email,
      password,
      confirmPassword,
    };

    if (password !== confirmPassword) {
      setError("Passwords need to be equals");
      return;
    }

    console.log(user);
  };
  return (
    <div className={styles.register}>
      <h1>Register to post</h1>
      <p>Create an account to shared and enjoy of stories</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Username"
            value={displayName}
            onChange={(ev) => setDisplayName(ev.target.value)}
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </label>
        <label>
          <span>Confirm your Password:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirm your Password"
            value={confirmPassword}
            onChange={(ev) => setConfirmPassword(ev.target.value)}
          />
        </label>
        <button className="btn">Register</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};
export default Register;
