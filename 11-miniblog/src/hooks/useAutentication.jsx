import { db } from "../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";

export const useAutentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  //cleanup
  //deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  //auth
  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  //create User
  const createUser = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);
    try {
      const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(user, { displayName: data.displayName });
      setLoading(false);
      return user;
    } catch (error) {
      let errorMessage;
      if (error.message.includes("password")) {
        errorMessage = "Password should be at least 6 characters";
      } else if (error.message.includes("email")) {
        errorMessage = "Email already used";
      } else {
        errorMessage = "Something wrong occurred";
      }
      setLoading(false);
      setError(errorMessage);
    }
  };

  //logout
  const logout = () => {
    checkIfIsCancelled();
    signOut(auth);
  };

  //login
  const login = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(false);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
    } catch (error) {
      let errorMessage;
      if (error.message.includes("user-not-found")) {
        errorMessage = "User Not Exists";
      } else if (error.message.includes("wrong-password")) {
        errorMessage = "Wrong Password";
      } else {
        errorMessage = "Something wrong occurred";
      }
      setLoading(false);
      setError(errorMessage);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);
  return { auth, createUser, error, loading, logout, login };
};
