# 🌹 My Flower Shop - Projet React

**Description du projet :**\
Application développée avec **React**, spécialisée dans la présentation
et la vente de fleurs.\
L'utilisateur peut :\
- Voir la liste des fleurs\
- Ajouter une fleur au panier\
- Supprimer du panier\
- Voir le total\
- Consulter les détails de chaque fleur

------------------------------------------------------------------------

## 🔹 Structure des fichiers (version Aya)

    my-flower-app/
    │
    ├── src/
    │   ├── details.js              # Page détail d'une fleur
    │   ├── Flowers.css             # Style de la page principale des fleurs
    │   ├── Form.css                # Style du formulaire
    │   ├── Formulaire.js           # Formulaire d'ajout (si existe)
    │   ├── ProduitFlowers.js       # Page principale des produits (fleurs)
    │   └── App.js                  # Composant global
            db.json
    │
    ├── public/
    │   └── images/                 # Images des fleurs
    │
    └── README.md

------------------------------------------------------------------------

## 🔹 Fonctionnalités

-   **Liste des fleurs** (ProduitFlowers.js)
-   **Détails d'une fleur** (details.js)
-   **Ajouter au panier**
-   **Supprimer du panier**
-   **Total automatique**
-   **Formulaire** (Formulaire.js)

------------------------------------------------------------------------

## 🔹 Exemple (Gestion panier)

``` jsx
const [cart, setCart] = useState([]);

const addToCart = (flower) => {
  setCart([...cart, flower]);
};

const removeFromCart = (id) => {
  setCart(cart.filter((item) => item.id !== id));
};

const total = cart.reduce((acc, item) => acc + item.price, 0);
```

------------------------------------------------------------------------

## 🔹 Installation

1.  Cloner le projet :

``` bash
git clone https://github.com/aya-nourelhadi/my-flower-shop.git
```

2.  Installer :

``` bash
npm install
```

3.  Lancer :

``` bash
npm start
```

------------------------------------------------------------------------

## 🔹 Technologie utilisée

-   **React** (JSX, Components, Hooks)

------------------------------------------------------------------------

## 🔹 Auteur

**Aya Nourelhadi**

