import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../auth/AuthProvider";
import SearchBar from "../components/SearchBar/SearchBar";
import "./SearchPage.scss";

export default function SearchPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      const timer = setTimeout(() => {
        navigate("/loginout-page");
      }, 5000);

      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }
  }, [user, navigate]);

  return (
    <div className="search-page">
      <h1 className="search-page__title">Recherche</h1>
      {user ? (
        <SearchBar />
      ) : (
        <p className="search-page__message">
          Veuillez vous connecter pour accéder à la barre de recherche. Vous serez redirigé vers la page de connexion dans 5 secondes.
        </p>
      )}
    </div>
  );
}