import { useState, useEffect } from "react";
import "./loader.scss"; 

export default function ApiFetch({ url, children }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });

    const timer = new Promise((resolve) => setTimeout(resolve, 1200));

    Promise.all([fetchData, timer]).then(() => {
      setIsLoading(false);
    });
    return () => {
    };
  }, [url]);

  if (isLoading) {
    return (
      <div className="container">
        <span className="loader"></span>
        <p className="loader-text">Chargement...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return <>{data && children(data)}</>;
}