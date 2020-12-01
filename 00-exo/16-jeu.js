// exo 16 - jeu 

// alert('la page est bien liée');


// let question = 'je ne sais pas';
// console.info(question);

// while ((question === 'oui') || (question === 'non')) {
//     document.write('<p>Vous avez perdu</p>');
//     break
// } if ((question !== 'non') || (question !== 'oui')) {
//     prompt('Vouslez-vous jouer au ni oui ni non?');
// } else {
//     document.write('Vous avez perdu');
// }

// let reponse = prompt('Ni oui ni non?');

// if (( reponse === 'oui') || ( reponse === 'non')) {
//     document.getElementById('p1').innerHTML = 'le jeu est fini ! Tu as perdu, tu as répondu ' + reponse + '.';
//     while (( reponse !== 'oui') || ( reponse !== 'non')){
//     prompt('Voulez-vous jouer à ni oui ni non ?');  
//     } else {
//         prompt('Voulez-vous jouer à ni oui ni non ?');
//     }
// }


//  while (( reponse === 'oui') || ( reponse === 'non')) {
//     document.getElementById('p1').innerHTML = 'le jeu est fini ! Tu as perdu, tu as répondu ' + reponse + '.';
//  } if (( reponse !== 'oui') || ( reponse !== 'non')) {
//     prompt('Voulez-vous jouer à ni oui ni non ?');
//   } else {
//     prompt('Voulez-vous jouer à ni oui ni non ?');
//      } 

// let reponse2 = prompt('On joue au ni-oui ni-non?');
// console.info(reponse2);

// while (reponse2 !== 'oui' || 'non') {
//     prompt('On joue au ni-oui ni-non?');
// } if (reponse2 == 'oui' || 'non') {
//     document.write('vous avez gagné');
// } else {
//     prompt('On joue au ni-oui ni-non?')
// }

// Correction exercice

let disMoi= ''; // initialisation de la variable avec une string vide, on y rentrera la réponse de l'utilisateur
console.info(typeof disMoi, disMoi);

var i = 1;

// tant que le prompt ne contient pas oui ET non ne contient pas non, boucle
while ((disMoi !== 'oui') && (disMoi!== 'non')) {
    disMoi = prompt('On joue au ni-oui, ni-non');
    i++; // une boucle a besoin d'un nombre de tours                   
} 

document.write('<p>Perdu</p>');

// 





