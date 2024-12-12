/* Récupération des pièces depuis le fichier JSON */
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

const article = pieces[0];

/* Créer les éléments dans le DOM */
const imageElement = document.createElement("img");
imageElement.src = article.image;

const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;


const prixElement = document.createElement("p");
//prixElement.innerText = `Prix: ${article.prix} €`;
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;


const categorieElement = document.createElement("p");
//categorieElement.innerText = article.categorie;
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";


const descriptionElement = document.createElement("p");
descriptionElement.innerText = article.description ?? "Pas de description pour le moment";

const disponibiliteElement = document.createElement("p");
disponibiliteElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";




/* Afficher en DOM */
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(disponibiliteElement);