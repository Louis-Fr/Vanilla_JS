// EXO 19 - Devinette

// alert('la page est liée');

// on doit trouver un nombre au hasard que l'utilisateur doit deviner
// 1- le nombre

let nbrHasard = Math.random()
console.log(typeof nbrHasard, nbrHasard);

// 2- on multiplie le nombre génerer par 100
let  nombreX100 = nbrHasard * 100;
console.log(nombreX100);

// 3- On arrondi le nombre
let nombreArrondi = Math.floor(nombreX100);
console.log(nombreArrondi);

// 2 et 3 autre solution pour arrondir le nombre
// nombreX100 = parseInt(nbrHasard * 100);
// console.log(nombreX100);


// boucle for avec des conditions (if else if else)

// let nbrUtilisateur = prompt('Entrer un nombre pour votre 1er essai');
// console.info(nbrUtilisateur);

// for (let nbrEssai = 1; nbrEssai <= 6; nbrEssai++) {
//     let proposition = Number(prompt('Por'))
    
// }


// une var solution = nombre à trouver



var NombreEssai = 1;
  
for (NombreEssai = 1; NombreEssai <= 6 ; NombreEssai++) {
var proposition = Number(prompt("Proposez un chifre entre 1 et 100"));

var solution = nombreArrondi;
console.info(solution);
     
if (proposition === solution) {
    console.log("Bravo, la solution est " + solution + ". Vous avez trouvé en " + NombreEssai + " essais.");
    break;
     
} if ((proposition < solution) && (NombreEssai !== 6))  {
    prompt(proposition + " est trop petit, il vous reste" + NombreEssai + "tentative");
 
} if ((proposition > solution) && (NombreEssai !== 6)) {
    prompt(proposition + " est trop grand, il vous reste " + NombreEssai + "tentative");
 
} if ((proposition < solution) && (NombreEssai === 6)) {
    prompt(proposition + " est trop petit. Vous avez perdu, il vous reste" + NombreEssai + "tentative");
 
} if ((proposition > solution) && (NombreEssai === 6)) {
    prompt(proposition + " est trop grand. Vous avez perdu, il vous reste" + NombreEssai + "tentative");
}
}   