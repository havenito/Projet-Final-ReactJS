import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./NotFoundPage.scss";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h3 className="not-found-title">Erreur 404</h3>
        <p className="not-found-text">La page que vous cherchez n'existe pas. Vous serez redirigé vers l'accueil dans 3 secondes.</p>
        <button onClick={() => navigate("/")} className="not-found-button">Retour à l'accueil</button>
      </div>
    </div>
  );
}