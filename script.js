const API_URL = "https://countries.dev/countries";

// Tous les pays reçus de l'API (rempli une seule fois, au chargement)
let allCountries = [];

// TODO : récupère ici les éléments du DOM dont tu as besoin

/**
 * Récupère tous les pays depuis l'API.
 * - Utilise fetch avec async/await.
 * - Appelée UNE SEULE FOIS, au chargement de la page.
 *
 * @returns {Promise<Array>} Le tableau de tous les pays.
 */
async function fetchCountries() {
     try {
          
          const reponse = await fetch("https://countries.dev/countries");
          const data = await reponse.json();
          console.log(data[0]);
            console.log("heello");
            allCountries = data ;
          displayCountries(allCountries)

            console.log(allCountries);
            

     } catch (error) {
          console.log(erreur.message);
          
     }

}
 fetchCountries();

 

/**
 * Crée la carte HTML d'un pays, sur le modèle de la maquette :
 * drapeau (avec un texte alternatif utile), nom, capitale, population.
 *
 * @param {Object} country - Un pays tel que renvoyé par l'API.
 * @returns {HTMLElement} La carte, prête à être ajoutée à la grille.
 */
 function createCountryCard(country) {
    const liste = document.getElementById("liste_carte");

    const carte = document.createElement("div");
          carte.classList.add("div_carte");

    const image = document.createElement("img");
          
         if (country.name === "Afghanistan" ) {
              image.src = "https://cdn.discordapp.com/attachments/1558131398555205753/1571845803633287168/Drapeau_img.png?ex=6afc36fb&is=6afae57b&hm=db3a2a5590e22e6b1e65ce89fa2853dceae1d12bcc6eeecd214e5ca0c8925e60"
         } else {
            
              image.src = country.flags.png;
         }
             
    const div_titre = document.createElement("div");
          div_titre.classList.add("div_titre");

    const nom_pys = document.createElement("h4");
          nom_pys.classList.add("nom_pys");
          nom_pys.textContent = country.name;

    const div_info = document.createElement("div");
          div_info.classList.add("div.info");

    const div_capitale = document.createElement("div");
          div_capitale.classList.add("div_apitale");

    const capitale = document.createElement("p");
          capitale.classList.add("capitale");

    const ville = document.createElement("h6");
          ville.classList.add("ville");

    const div_Population = document.createElement("div");
          div_Population.classList.add("div_Population");

    const population = document.createElement("p");

            capitale.textContent = "Capitale :";
            ville.textContent = country.capital;

    population.textContent = "Population : " + country.population;

    div_Population.append(population);
    div_capitale.append(capitale, ville);

    div_info.append(div_capitale, div_Population);
    div_titre.append(nom_pys, div_info);

    carte.append(image, div_titre);

    liste.append(carte);

}




  


/**
 * Affiche une liste de pays dans la grille.
 * - Vide d'abord la grille (sinon les cartes s'accumulent).
 * - Ajoute une carte par pays.
 * - Si la liste est vide, affiche le message « Aucun pays ne correspond ».
 *
 * @param {Array} countries - Les pays à afficher.
 */
function displayCountries(countries) {
    countries.forEach(element => {
        createCountryCard(element);
    });
}

/**
 * Applique les deux filtres EN MÊME TEMPS sur allCountries :
 * - le continent choisi dans la liste déroulante ;
 * - le texte saisi dans la recherche (majuscules et minuscules ignorées).
 * Puis affiche le résultat avec displayCountries().
 *
 * Aucune requête vers l'API ici !
 */
function filterCountries() {
       
}


// ------------------------------------------------------------
// BONUS
// ------------------------------------------------------------

/**
 * (Bonus) Trie des pays par population, du plus peuplé au moins peuplé.
 * Attention : ne modifie pas le tableau allCountries d'origine.
 *
 * @param {Array} countries
 * @returns {Array} Un nouveau tableau trié.
 */
function sortByPopulation(countries) {
  // TODO
}

/**
 * (Bonus) Affiche ou masque le message « Chargement des pays… ».
 *
 * @param {boolean} isLoading - true pour l'afficher, false pour le masquer.
 */
function showLoader(isLoading) {
  // TODO
}

/**
 * (Bonus) Affiche un message d'erreur clair quand l'API ne répond pas.
 *
 * @param {string} message
 */
function showError(message) {
  // TODO
}


// ------------------------------------------------------------
// DÉMARRAGE
// ------------------------------------------------------------

/**
 * Point d'entrée de l'application :
 * 1. récupère les pays avec fetchCountries() et les stocke dans allCountries ;
 * 2. affiche les pays du continent sélectionné par défaut ;
 * 3. écoute les changements de continent et la saisie dans la recherche.
 *
 * (Bonus) Gère le chargement et les erreurs avec try...catch.
 */
async function init() {
  // TODO
}

init();


















