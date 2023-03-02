import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, doc, getDoc } from "firebase/firestore";

export const useFetchDocument = (docColletion, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  //memory leak
  const [cancelled, setCancelled] = useState(false);
  useEffect(() => {
    async function loadDocument() {
      if (cancelled) return;

      setLoading(true);

      try {
        const docRef = await doc(db, docColletion, id);
        const docSnap = await getDoc(docRef);
        setDocument(docSnap.data());
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    loadDocument();
  }, [docColletion, id, cancelled]);

  useEffect(() => {
    return () => {
      setCancelled(true);
    };
  }, []);

  return { document, loading, error };
};
