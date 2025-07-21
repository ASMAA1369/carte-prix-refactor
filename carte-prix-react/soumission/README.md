# 💳 Refactorisation de Carte de Prix
## 📁 Structure du dossier
 ``` 
soumission/
├── code-apres/
│ ├── App.js
│ ├── Card.js
│ └── style.css
├── code-avant.html
└── README.md
 ``` 

---

## 🧾 Description du projet

Ce projet montre la refactorisation d'une carte de prix codée initialement en HTML/CSS vers une version plus moderne et réutilisable en React.  
L'objectif principal est de **rendre le code modulaire, maintenable et évolutif**, en utilisant des composants fonctionnels.

---

## 🔁 Différences avant/après

| Avant (`code-avant.html`) | Après (`code-apres/`)                  |
|---------------------------|-------------------------------------|
| HTML/CSS statique          | Composants React dynamiques          |
| Répétition de structure    | Composant `Card` réutilisable        |
| Pas d'interactivité        | Fonction `onClick` avec alerte personnalisée |
| Pas de séparation logique  | Fichiers organisés (`App.js`, `Card.js`, `style.css`) |

---

## 🧩 Composants

### 📦 `Card.js`

Un composant React qui prend des **props dynamiques** :  
- `title` (titre de l'offre)  
- `price` (prix)  
- `features` (liste des avantages)  
- `onButtonClick` (fonction appelée au clic sur le bouton)

### ⚙️ `App.js`

Contient :  
- Une liste de cartes générées dynamiquement  
- Une fonction `handleClick()` pour déclencher une alerte personnalisée  
- L’intégration du style global

---

## 🎨 Styles

Le fichier `style.css` contient les styles appliqués à la carte :  
- Bordures arrondies  
- Couleurs harmonieuses  
- Responsive simple  
- Image d’arrière-plan  
- Footer fixé en bas de page

---

## ▶️ Lancer le projet

1. Cloner le projet ou copier les fichiers dans un projet React existant.  
2. Vérifier que `Card.js` est bien dans un dossier `components/`.  
3. Importer et utiliser le composant `<Card />` dans `App.js`.

---

✅ Résultat attendu  
L’application affiche plusieurs cartes de prix bien stylisées, réutilisables, avec un bouton fonctionnel.  
Le code est clair, organisé, et prêt à évoluer facilement.

---

Auteur :  
Asmaa – Juillet 2025  
Projet de refactorisation cartes de prix.
