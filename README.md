# my-flower-app
# 🌹 My Flower Shop - Projet React

*Description du projet :*  
Application développée avec *React*, spécialisée dans la vente et la présentation des fleurs.  
L'utilisateur peut :  
- Voir la liste des fleurs  
- Voir le détail de chaque fleur  
- Ajouter au panier  
- Supprimer du panier  
- Voir le total  
- Utiliser les données via *JSON Server* (db.json)

---

## 🔹 Structure des fichiers

[22:52, 19/11/2025] 🧚🏼Aya🧚🏼: my-flower-app/
│
├── db.json                     # Backend JSON Server
│
├── src/
│   ├── details.js              # Page détail d’une fleur
│   ├── Flowers.css             # Styles des fleurs
│   ├── Form.css                # Styles du formulaire
│   ├── Formulaire.js           # Formulaire d’ajout
│   ├── ProduitFlowers.js       # Liste des produits
│   ├── App.js                  # Gestion du panier
│   └── index.js
│
└── README.md
[22:52, 19/11/2025] 🧚🏼Aya🧚🏼: ---

## 🔹 Exemple db.json

{
  "flowers": [
    { "id": 1, "name": "Rose Rouge", "price": 20, "description": "Une belle rose rouge.", "image": "/images/rose-rouge.jpg" },
    { "id": 2, "name": "Tulipe Jaune", "price": 15, "description": "Tulipe lumineuse et fraîche.", "image": "/images/tulipe-jaune.jpg" }
  ]
}

## 🔹 Exemple ProduitFlowers.js

import React, { useEffect, useState } from "react";
import "./Flowers.css";

function ProduitFlowers({ addToCart }) {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/flowers")
      .then(res => res.json())
      .then(data => setFlowers(data));
  }, []);

  return (
    <div className="flowers-container">
      {flowers.map(flower => (
        <div key={flower.id} className="flower-card">
          <img src={flower.image} alt={flower.name} />
          <h3>{flower.name}</h3>
          <p>{flower.price} DH</p>
          <button onClick={() => addToCart(flower)}>Ajouter au panier</button>
        </div>
      ))}
    </div>
  );
}

export default ProduitFlowers;

## 🔹 Exemple Details.js

import { useParams } from "react-router-dom";

function Details({ flowers }) {
  const { id } = useParams();
  const flower = flowers.find(f => f.id == id);

  return (
    <div>
      <h2>{flower.name}</h2>
      <img src={flower.image} alt={flower.name} />
      <p>{flower.description}</p>
      <p>Prix : {flower.price} DH</p>
    </div>
  );
}

export default Details;

## 🔹 Detsion du panier(App.js)

const [cart, setCart] = useState([]);

const addToCart = flower => setCart([...cart, flower]);
const removeFromCart = id => setCart(cart.filter(item => item.id !== id));
const total = cart.reduce((acc, item) => acc + item.price, 0);

## 🔹 Lancer JSON SERVER

npx json-server --watch db.json --port 3000

## 🔹 Lancer l'application React

npm start

## 🔹 Technologies utilisées

•	React
•	JSON Server
•	JSX / Hooks / Components

## 🔹 Acteur
Aya Nour El
