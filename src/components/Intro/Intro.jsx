import React from 'react';
import './Intro.scss';

export default function Intro() {
  return (
    <div className="intro">
      <div className="container">
        <h2 className="intro-title">À propos de ce site</h2>
        <p className="intro-text">
          Ce site vous permet de rechercher des super-héros et de consulter des informations détaillées à leur sujet. Connectez-vous pour accéder à la barre de recherche et découvrir vos super-héros préférés.
        </p>
      </div>
    </div>
  );
}