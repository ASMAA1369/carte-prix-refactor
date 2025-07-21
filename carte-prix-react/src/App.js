import React from 'react';
import Card from './components/Card';
import './style.css';

function App() {
  const handleClick = (title) => {
    alert(`Vous avez choisi : ${title}`);
  };

  return (
    <div>
       <h1 className="main-title">Nos Offres</h1>
      <Card
        title="Forfait de base"
        price="9,99 $/mois"
        features={[
          "1 Go de stockage",
          "Assistance de base",
          "Toutes les fonctionnalités principales"
        ]}
        buttonLabel="Démarrer l’essai"
        onButtonClick={() => handleClick("Forfait de base")}
      />

      <Card
        title="Forfait Pro"
        price="19,99 $/mois"
        features={[
          "10 Go de stockage",
          "Assistance prioritaire",
          "Fonctionnalités avancées"
        ]}
        buttonLabel="S'abonner"
        onButtonClick={() => handleClick("Forfait Pro")}
      />

      <Card
        title="Forfait Premium"
        price="29,99 $/mois"
        features={[
          "Stockage illimité",
          "Support 24/7",
          "Toutes les options débloquées"
        ]}
        buttonLabel="Essayer maintenant"
        onButtonClick={() => handleClick("Forfait Premium")}
      />
      <footer>
  © 2025 Carte Prix Refactorisée. Tous droits réservés.
</footer>

    </div>
  );
}

export default App;

