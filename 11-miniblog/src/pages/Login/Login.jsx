//css
import styles from "./Login.module.css";
//hooks
import { useState, useEffect } from "react";
import { useAutentication } from "../../hooks/useAutentication";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAutentication();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setError("");

    const user = {
      email,
      password,
    };
    const res = await login(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <p>Sign In to create your posts</p>
      <form onSubmit={handleSubmit}>
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
        {!loading && <button className="btn">Login</button>}
        {loading && (
          <button className="btn" disabled>
            Wait...
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};
export default Login;
