//css
import styles from "./Register.module.css";
//hooks
import { useState, useEffect } from "react";
const Register = () => {
  return (
    <div>
      <h1>Register to post</h1>
      <p>Create an account to shared and enjoy of stories</p>
      <form>
        <label>
          <span>Name:</span>
          <input type="text" name="displayName" required placeholder="UserName" />
        </label>
        <label>
          <span>Email:</span>
          <input type="email" name="email" required placeholder="Email" />
        </label>
        <label>
          <span>Password:</span>
          <input type="password" name="password" required placeholder="Password" />
        </label>
        <label>
          <span>Confirm your Password:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirm your Password"
          />
        </label>
        <button className="btn">Register</button>
      </form>
    </div>
  );
};
export default Register;
