import { useState } from "react";
import { Link } from "react-router";
import "./SearchBar.scss";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://corsproxy.io/https://superheroapi.com/api/ba89627ef6d5cdd0d38c2317d97be959/search/${query}`);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données");
      }
      const data = await response.json();
      if (data.response === "error") {
        setError("Aucun résultat trouvé");
        setResults([]);
      } else {
        setResults(data.results || []);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Rechercher un super héros..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Rechercher</button>
      </form>
      {isLoading && <div className="loader"></div>}
      {error && <div className="error-message">{error}</div>}
      <div className="results">
        {results.map((hero) => (
          <div key={hero.id} className="result-card">
            <Link to={`/hero/${hero.id}`} className="result-link">
              <img src={hero.image.url} alt={hero.name} className="result-image" />
              <div className="result-body">
                <h5 className="result-title">{hero.name}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}