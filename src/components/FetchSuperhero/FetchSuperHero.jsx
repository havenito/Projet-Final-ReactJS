import React from "react";
import { useNavigate } from "react-router"; 
import FetchApi from "../../api/ApiFetch";
import "./FetchSuperhero.scss";

export default function FetchSuperHero() {
  const navigate = useNavigate(); 

  const handleSuperHeroClick = (superheroId) => {
    navigate(`/superhero/${superheroId}`);
  };

  return (
    <FetchApi
      url="https://corsproxy.io/https://www.superheroapi.com/api.php/d8a6fd25123706b7feac3255d13cc3b6/search/a"  
    >
      {(data) => (
        <div className="superhero-container">
          <h1 className="superhero-title">Galerie de Super-héros</h1>
          <div className="superhero-gallery">
            {data.results.map((superhero) => (
              <div
                key={superhero.id}
                className="superhero-item"
                onClick={() => handleSuperHeroClick(superhero.id)}
              >
                <div className="superhero-link" role="button" tabIndex={0}>
                  <img
                    src={superhero.image.url}
                    alt={superhero.name}
                    className="superhero-image"
                  />
                  <p className="superhero-name">{superhero.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </FetchApi>
  );
}