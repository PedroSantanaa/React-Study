import { useState, useEffect } from "react";

//4-Custom hooks

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  //5- refatorando o POST
  const [configs, setConfigs] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  //6-loading
  const [loading, setLoading] = useState(false);

  //7-tratando erros
  const [error, setError] = useState(null);

  //8-desafio
  const [itemId, setItemId] = useState(null);

  const htppConfig = (data, method) => {
    if (method === "POST") {
      setConfigs({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else if (method === "DELETE") {
      setConfigs({
        method,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    setMethod(method);
    setItemId(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      //6-loading
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError("Algum erro inesperado aconteceu!!");
      }
      setLoading(false);
    };
    fetchData();
  }, [url, callFetch]);
  //5- refatorando o POST
  useEffect(() => {
    const htppRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, configs];
        const res = await fetch(...fetchOptions);
        const json = res.json();
        setCallFetch(json);
      } else if (method === "DELETE") {
        const deleteUrl = `${url}/${itemId}`;
        let fetchOptions = [deleteUrl, configs];
        const res = await fetch(...fetchOptions);
        const json = res.json();
        setCallFetch(json);
      }
    };
    htppRequest();
  }, [configs, method, url, itemId]);
  return { data, htppConfig, loading, error };
};
