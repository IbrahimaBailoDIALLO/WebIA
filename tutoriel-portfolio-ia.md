# Tutoriel : Créer son Portfolio Professionnel

## Introduction
Ce tutoriel vous guidera pas à pas dans la création de votre portfolio professionnel. Nous allons utiliser des technologies web simples et gratuites pour créer un site moderne et attractif.

## Prérequis
Pour suivre ce tutoriel, vous aurez besoin de :
- Un ordinateur avec un navigateur web
- Un éditeur de code (nous recommandons Visual Studio Code - gratuit)
- Des connaissances de base en HTML et CSS
- Une connexion internet

## Structure du Projet
```
mon-portfolio/
│
├── index.html          # Page principale
├── styles/
│   ├── main.css       # Styles principaux
│   └── dark-mode.css  # Styles du mode sombre
│
├── scripts/
│   └── main.js        # Code JavaScript
│
└── images/            # Dossier pour vos images
```

## Jour 1 : Mise en Place du Projet

### 1. Installation des Outils
1. Téléchargez et installez Visual Studio Code depuis [code.visualstudio.com](https://code.visualstudio.com)
2. Installez les extensions recommandées :
   - Live Server (pour voir votre site en direct)
   - HTML CSS Support
   - JavaScript (ES6) code snippets

### 2. Création de la Structure
1. Créez un nouveau dossier nommé `mon-portfolio`
2. Créez les sous-dossiers : `styles`, `scripts`, `images`
3. Créez les fichiers principaux :

```bash
touch index.html
touch styles/main.css
touch scripts/main.js
```

### 3. Configuration de Base HTML
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Portfolio - [Votre Nom]</title>
    <link rel="stylesheet" href="styles/main.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#apropos">À Propos</a></li>
                <li><a href="#projets">Projets</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="accueil">
            <h1>Bienvenue sur mon portfolio</h1>
        </section>
    </main>

    <script src="scripts/main.js"></script>
</body>
</html>
```

### 4. Styles CSS de Base
```css
/* styles/main.css */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 1rem;
}

nav a {
    text-decoration: none;
    color: #333;
}

section {
    padding: 2rem;
    min-height: 100vh;
}
```

### Exercices du Jour 1
1. Personnalisez le titre avec votre nom
2. Ajoutez une couleur d'arrière-plan à votre goût
3. Modifiez la police de caractères

## Jour 2 : Section "À Propos"

### 1. Structure HTML
Ajoutez cette section après la section "accueil" :

```html
<section id="apropos">
    <h2>À Propos de Moi</h2>
    <div class="apropos-contenu">
        <img src="images/photo-profil.jpg" alt="Ma photo de profil">
        <div class="apropos-texte">
            <p>Bonjour ! Je suis [Votre Nom], développeur web passionné.</p>
            <div class="competences">
                <h3>Mes Compétences</h3>
                <ul>
                    <li>HTML & CSS</li>
                    <li>JavaScript</li>
                    <li>Responsive Design</li>
                </ul>
            </div>
        </div>
    </div>
</section>
```

### 2. Styles CSS
Ajoutez ces styles à votre fichier main.css :

```css
.apropos-contenu {
    display: flex;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.apropos-contenu img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 50%;
}

.apropos-texte {
    flex: 1;
}

.competences ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
}

.competences li {
    background: #f0f0f0;
    padding: 0.5rem 1rem;
    border-radius: 20px;
}

/* Style pour les écrans mobiles */
@media (max-width: 768px) {
    .apropos-contenu {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
}
```

### Exercices du Jour 2
1. Ajoutez votre photo de profil
2. Personnalisez la liste des compétences
3. Ajoutez une animation au survol des compétences

## Jour 3 : Section "Projets"

### 1. Structure HTML
Ajoutez cette section après la section "apropos" :

```html
<section id="projets">
    <h2>Mes Projets</h2>
    <div class="projets-contenu">
        <div class="projet">
            <h3>Projet 1 : Site Web</h3>
            <p>Création d'un site web pour une entreprise.</p>
            <img src="images/projet1.jpg" alt="Projet 1">
        </div>
        <div class="projet">
            <h3>Projet 2 : Application Mobile</h3>
            <p>Développement d'une application mobile pour les utilisateurs.</p>
            <img src="images/projet2.jpg" alt="Projet 2">
        </div>
    </div>
</section>
```

### 2. Styles CSS
Ajoutez ces styles à votre fichier main.css :

```css
.projets-contenu {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.projet {
    flex: 1;
    background: #f0f0f0;
    padding: 1rem;
    border-radius: 20px;
}

.projet img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 20px;
}
```

### Exercices du Jour 3
1. Ajoutez vos propres projets
2. Personnalisez les styles des projets
3. Ajoutez des liens vers les projets

## Jour 4 : Section "Contact"

### 1. Structure HTML
Ajoutez cette section après la section "projets" :

```html
<section id="contact">
    <h2>Me Contacter</h2>
    <div class="contact-contenu">
        <form>
            <label for="nom">Nom :</label>
            <input type="text" id="nom" name="nom"><br><br>
            <label for="email">Email :</label>
            <input type="email" id="email" name="email"><br><br>
            <label for="message">Message :</label>
            <textarea id="message" name="message"></textarea><br><br>
            <input type="submit" value="Envoyer">
        </form>
    </div>
</section>
```

### 2. Styles CSS
Ajoutez ces styles à votre fichier main.css :

```css
.contact-contenu {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    background: #f0f0f0;
    border-radius: 20px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

label {
    font-weight: bold;
}

input, textarea {
    padding: 0.5rem;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input[type="submit"] {
    background: #333;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

input[type="submit"]:hover {
    background: #555;
}
```

### Exercices du Jour 4
1. Ajoutez un champ de téléphone
2. Personnalisez les styles du formulaire
3. Ajoutez une validation des champs

## Jour 5 : Responsive Design

### 1. Structure HTML
Ajoutez ces lignes dans le head de votre fichier index.html :

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 2. Styles CSS
Ajoutez ces styles à votre fichier main.css :

```css
/* Style pour les écrans mobiles */
@media (max-width: 768px) {
    /* Ajoutez vos styles ici */
}

/* Style pour les écrans tablettes */
@media (max-width: 1024px) {
    /* Ajoutez vos styles ici */
}
```

### Exercices du Jour 5
1. Ajoutez des styles pour les écrans mobiles
2. Personnalisez les styles pour les écrans tablettes
3. Testez votre site sur différents appareils

## Jour 6 : Déploiement

### 1. Création d'un compte GitHub
Créez un compte GitHub si vous n'en avez pas déjà un.

### 2. Création d'un dépôt
Créez un nouveau dépôt pour votre portfolio.

### 3. Déploiement
Déployez votre portfolio sur GitHub Pages.

### Exercices du Jour 6
1. Créez un compte GitHub
2. Créez un dépôt pour votre portfolio
3. Déployez votre portfolio

## Jour 7 : Mode Sombre

### 1. Ajout du Bouton Mode Sombre
Ajoutez ce code dans la navigation de votre `index.html` :

```html
<button id="theme-toggle" class="theme-toggle">
    <span class="light-icon">☀️</span>
    <span class="dark-icon">🌙</span>
</button>
```

### 2. Styles CSS pour le Mode Sombre
Créez un nouveau fichier `styles/dark-mode.css` :

```css
/* Mode clair (par défaut) */
:root {
    --background-color: #ffffff;
    --text-color: #333333;
    --section-bg: #f0f0f0;
}

/* Mode sombre */
[data-theme="dark"] {
    --background-color: #1a1a1a;
    --text-color: #ffffff;
    --section-bg: #2d2d2d;
}

/* Application des couleurs */
body {
    background-color: var(--background-color);
    color: var(--text-color);
    transition: all 0.3s ease;
}

.projet, .contact-contenu {
    background: var(--section-bg);
}

/* Style du bouton */
.theme-toggle {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
}

.dark-icon {
    display: none;
}

[data-theme="dark"] .light-icon {
    display: none;
}

[data-theme="dark"] .dark-icon {
    display: inline;
}
```

### 3. JavaScript pour le Mode Sombre
Ajoutez ce code dans `scripts/main.js` :

```javascript
// Gestion du mode sombre
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    // Appliquer le thème sauvegardé ou le thème système
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Initialiser le thème au chargement
document.addEventListener('DOMContentLoaded', initTheme);
```

### Exercices du Jour 7
1. Personnalisez les couleurs du mode sombre
2. Ajoutez une animation de transition
3. Testez le mode sombre sur différents navigateurs

## Jour 8 : Animations et Transitions

### 1. Animations CSS
Ajoutez ces styles à votre `main.css` :

```css
/* Animation d'entrée pour les sections */
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Animation au survol des projets */
.projet {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.projet:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* Animation du menu */
nav a {
    position: relative;
}

nav a::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: currentColor;
    transition: width 0.3s ease;
}

nav a:hover::after {
    width: 100%;
}
```

### 2. JavaScript pour les Animations
Ajoutez ce code à votre `main.js` :

```javascript
// Animation au défilement
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => observer.observe(element));
}

// Ajouter la classe fade-in aux sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
});

// Initialiser les animations au chargement
document.addEventListener('DOMContentLoaded', initScrollAnimations);
```

### Exercices du Jour 8
1. Ajoutez des animations personnalisées
2. Créez une animation pour le formulaire de contact
3. Optimisez les performances des animations

## Jour 9 : Optimisation des Images

### 1. Structure des Images
Organisez vos images dans des sous-dossiers :

```
images/
├── projets/
│   ├── projet1.jpg
│   └── projet2.jpg
├── profil/
│   └── photo.jpg
└── icons/
    └── favicon.ico
```

### 2. HTML pour les Images Optimisées
```html
<!-- Utilisation du lazy loading -->
<img 
    src="images/projets/projet1.jpg" 
    alt="Projet 1"
    loading="lazy"
    width="800"
    height="600"
>
```

### 3. CSS pour les Images Responsives
```css
/* Style pour les images responsives */
.projet img {
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
    object-fit: cover;
}

/* Différentes tailles d'images selon l'écran */
@media (max-width: 768px) {
    .projet img {
        aspect-ratio: 4/3;
    }
}
```

### Exercices du Jour 9
1. Optimisez toutes les images du site
2. Ajoutez des images de remplacement pour le chargement
3. Testez les performances des images

## Jour 10 : Formulaire de Contact Interactif

### 1. HTML du Formulaire Amélioré
```html
<form id="contact-form" class="contact-form">
    <div class="form-group">
        <label for="nom">Nom :</label>
        <input 
            type="text" 
            id="nom" 
            name="nom" 
            required 
            minlength="2"
            pattern="[A-Za-z\s]+"
        >
        <span class="error-message"></span>
    </div>

    <div class="form-group">
        <label for="email">Email :</label>
        <input 
            type="email" 
            id="email" 
            name="email" 
            required
        >
        <span class="error-message"></span>
    </div>

    <div class="form-group">
        <label for="message">Message :</label>
        <textarea 
            id="message" 
            name="message" 
            required 
            minlength="10"
        ></textarea>
        <span class="error-message"></span>
    </div>

    <button type="submit" class="submit-btn">
        <span class="btn-text">Envoyer</span>
        <span class="btn-loading">Envoi en cours...</span>
    </button>
</form>
```

### 2. CSS pour le Formulaire
```css
.form-group {
    margin-bottom: 1.5rem;
    position: relative;
}

.error-message {
    color: #ff3333;
    font-size: 0.8rem;
    position: absolute;
    bottom: -1.2rem;
    left: 0;
}

.form-group input:invalid,
.form-group textarea:invalid {
    border-color: #ff3333;
}

.submit-btn {
    position: relative;
    overflow: hidden;
}

.btn-loading {
    display: none;
}

.submit-btn.loading .btn-text {
    display: none;
}

.submit-btn.loading .btn-loading {
    display: block;
}
```

### 3. JavaScript pour la Validation
```javascript
// Validation du formulaire
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        // Simulation d'envoi
        try {
            const submitBtn = form.querySelector('.submit-btn');
            submitBtn.classList.add('loading');
            
            // Simuler un délai d'envoi
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Réinitialiser le formulaire
            form.reset();
            alert('Message envoyé avec succès !');
        } catch (error) {
            alert('Erreur lors de l\'envoi du message');
        } finally {
            submitBtn.classList.remove('loading');
        }
    });
}

function validateForm() {
    const form = document.getElementById('contact-form');
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        const errorElement = input.nextElementSibling;
        
        if (!input.checkValidity()) {
            isValid = false;
            errorElement.textContent = input.validationMessage;
        } else {
            errorElement.textContent = '';
        }
    });
    
    return isValid;
}

// Initialiser le formulaire
document.addEventListener('DOMContentLoaded', initContactForm);
```

### Exercices du Jour 10
1. Ajoutez plus de validations personnalisées
2. Créez des messages d'erreur personnalisés
3. Ajoutez une animation de succès

## Jour 11 : Intégration de Google Maps

### 1. Obtenir une Clé API Google Maps
Créez un compte Google Cloud et obtenez une clé API pour Google Maps.

### 2. Ajout de Google Maps
Ajoutez ce code dans votre fichier `index.html` :

```html
<div id="map" style="width: 100%; height: 400px;"></div>
```

### 3. Initialisation de Google Maps
Ajoutez ce code dans votre fichier `main.js` :

```javascript
// Initialisation de Google Maps
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 48.8566, lng: 2.3522 },
        zoom: 12,
    });
}

// Charger la bibliothèque Google Maps
function loadGoogleMaps() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    document.body.appendChild(script);
}

// Charger Google Maps au chargement
document.addEventListener('DOMContentLoaded', loadGoogleMaps);
```

### Exercices du Jour 11
1. Personnalisez la carte
2. Ajoutez des marqueurs
3. Intégrer des informations supplémentaires

## Jour 12 : Intégration de Font Awesome

### 1. Installation de Font Awesome
Installez Font Awesome via npm ou yarn :

```bash
npm install @fortawesome/fontawesome-free
```

### 2. Importation de Font Awesome
Ajoutez ce code dans votre fichier `main.css` :

```css
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css');
```

### 3. Utilisation de Font Awesome
Ajoutez ce code dans votre fichier `index.html` :

```html
<i class="fa-solid fa-house"></i>
```

### Exercices du Jour 12
1. Utilisez des icônes personnalisées
2. Créez un bouton avec une icône
3. Intégrer des icônes dans votre formulaire

## Jour 13 : Intégration de Bootstrap

### 1. Installation de Bootstrap
Installez Bootstrap via npm ou yarn :

```bash
npm install bootstrap
```

### 2. Importation de Bootstrap
Ajoutez ce code dans votre fichier `main.css` :

```css
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
```

### 3. Utilisation de Bootstrap
Ajoutez ce code dans votre fichier `index.html` :

```html
<button class="btn btn-primary">Cliquez-moi</button>
```

### Exercices du Jour 13
1. Utilisez des composants Bootstrap
2. Créez un formulaire avec Bootstrap
3. Intégrer des éléments de navigation

## Jour 14 : Intégration de jQuery

### 1. Installation de jQuery
Installez jQuery via npm ou yarn :

```bash
npm install jquery
```

### 2. Importation de jQuery
Ajoutez ce code dans votre fichier `main.js` :

```javascript
import $ from 'jquery';
```

### 3. Utilisation de jQuery
Ajoutez ce code dans votre fichier `main.js` :

```javascript
$(document).ready(() => {
    console.log('jQuery est prêt !');
});
```

### Exercices du Jour 14
1. Utilisez des sélecteurs jQuery
2. Créez des animations avec jQuery
3. Intégrer des événements jQuery

## Jour 15 : Déploiement Final

### 1. Vérification du Code
Vérifiez que votre code est propre et fonctionnel.

### 2. Déploiement sur GitHub Pages
Déployez votre site sur GitHub Pages.

### 3. Partagez Votre Site
Partagez votre site avec vos amis et votre famille.

### Exercices du Jour 15
1. Faites une démo de votre site
2. Obtenez des retours d'utilisateurs
3. Améliorez votre site en fonction des retours

## Conclusion
Félicitations ! Vous avez créé un site web professionnel en suivant ce tutoriel. N'oubliez pas de continuer à apprendre et à améliorer vos compétences en développement web.

## Ressources Supplémentaires
- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Google Maps Platform](https://developers.google.com/maps)
- [jQuery Documentation](https://api.jquery.com/)

## Contact

Pour plus d'informations ou des questions :
- Email : ibrahimabailo.diallo@gmail.com
- LinkedIn : [Ibrahima Bailo DIALLO](https://www.linkedin.com/in/ibrahima-bailo-diallo-ia/)
- GitHub : [IbrahimaBailoDIALLO](https://github.com/IbrahimaBailoDIALLO/WebIA)
- Portfolio : [Portfolio Web](https://ibrahimabailodiallo.github.io/WebIA/)

---
 2024 Ibrahima Bailo DIALLO. Tous droits réservés.
