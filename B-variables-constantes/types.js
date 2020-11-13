// .js pour la page types de données

// string : chaîne de caractères
let presentation = "Je m'appelle Michael.";
let age = "24"
let age2 = "36"

console.log(typeof presentation);
// 1 - récupérer dans le document un élément dont l'id est p1
// 2 - remplacer le contenu d'un élément identifié par son attribut id
// 3 - puis on concatène une string et le résultat de la fonction typeof()
document.getElementById('p1').innerHTML = 'Type de données pour la variable présentation :' + typeof presentation;

let test;
test = 'null';
console.log(typeof test);