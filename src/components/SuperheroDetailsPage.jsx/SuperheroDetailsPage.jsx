import React, { useEffect, useState } from "react";
import { useParams } from "react-router"; 
import { Comment } from "../Comments/Comments"; 
import "./SuperHeroDetails.scss";

export default function SuperheroDetailsPage() {
  const { id } = useParams(); 
  const [superheroDetails, setSuperheroDetails] = useState(null);

  useEffect(() => {
    if (id) {
      fetchSuperheroDetails(id);
    }
  }, [id]);

  const fetchSuperheroDetails = async (superheroId) => {
    try {
      const response = await fetch(`https://corsproxy.io/https://www.superheroapi.com/api.php/d8a6fd25123706b7feac3255d13cc3b6/${superheroId}`);
      const data = await response.json();
      setSuperheroDetails(data);
    } catch (error) {
      console.error("Error fetching superhero details:", error);
    }
  };

  if (!superheroDetails) return null;

  return (
    <div className="superhero-details-container">
      <div className="card">
        <h3 className="text-2xl">{superheroDetails.name}</h3>

        <div className="image-container">
          <img
            src={superheroDetails.image.url}
            alt={superheroDetails.name}
            className="rounded-lg mb-4"
          />
          <p className="title">{superheroDetails.biography["full-name"]}</p>
          <p className="blurb">{superheroDetails.biography["place-of-birth"]}</p>
        </div>

        <div className="details-section">
          <h4 className="section-title">Biographie :</h4>
          <ul className="list">
            <li><strong>Nom complet:</strong> {superheroDetails.biography["full-name"]}</li>
            <li><strong>Lieu de naissance:</strong> {superheroDetails.biography["place-of-birth"]}</li>
            <li><strong>Première apparition:</strong> {superheroDetails.biography["first-appearance"]}</li>
            <li><strong>Éditeur:</strong> {superheroDetails.biography.publisher}</li>
            <li><strong>Alignement:</strong> {superheroDetails.biography.alignment}</li>
          </ul>
        </div>

        <div className="details-section">
          <h4 className="section-title">Statistiques :</h4>
          <ul className="list">
            <li><strong>Intelligence:</strong> {superheroDetails.powerstats.intelligence}</li>
            <li><strong>Force:</strong> {superheroDetails.powerstats.strength}</li>
            <li><strong>Vitesse:</strong> {superheroDetails.powerstats.speed}</li>
            <li><strong>Durabilité:</strong> {superheroDetails.powerstats.durability}</li>
            <li><strong>Puissance:</strong> {superheroDetails.powerstats.power}</li>
            <li><strong>Combat:</strong> {superheroDetails.powerstats.combat}</li>
          </ul>
        </div>

        <div className="comments-section">
          <Comment superheroId={id} />
        </div>
      </div>
    </div>
  );
}