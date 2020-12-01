// page parite

// alert('la page est liée');

// for (var i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.info(i + 'est pair');
//     }
// }

for (var i = 1; i <= 20; i++) {
    if (i % 2 === 1) {
        console.info(i + ' est impair');
    } else { (i % 2 === 0)
        console.info(i + ' est pair');
    }
}

// EXO 2 - Modifier le programme avec un prompt pour récupérer un nombre entier et afficher la nature des 10 nombres supérieurs

let nbrUtilisateur = Number (prompt('Exo 2 : Rentre un nombre entier'));
// ParseInt on est sûr que c'est un nombre entier, avec Number on risque d'avoir un décimal



console.log(typeof nbrUtilisateur, nbrUtilisateur);
let nbrUtilisateurMax = (nbrUtilisateur + 1000);
console.log(typeof nbrUtilisateurMax, nbrUtilisateurMax); 
for (let i = nbrUtilisateur; i <= nbrUtilisateurMax; i++) {
    if (i % 2 === 0) {// si i est pair
         document.write('<p>' +  i + ' est pair</p>');
    } else {// sinon si i est impair
        document.write('<p>' +  i + ' est impair</p>');
    }
}

// Boucle while

let nbrUtilisateur2 = Number (prompt('Exo 2 : Rentre un nombre entier'));

let nbrUtilisateurMax2 = (nbrUtilisateur2 + 10);
for (let i = nbrUtilisateur2; i <= nbrUtilisateurMax2; i++) {
    if (i % 2 === 0) {// si i est pair
         document.write('<p>' +  i + ' est pair</p>');
    } else {// sinon si i est impair
        document.write('<p>' +  i + ' est impair</p>');
    }
}


var chiffre = Number(prompt('choississez un nombre entier'));
console.info(chiffre);

var chiffreMax = (chiffre + 10);
console.log(chiffreMax);

while (chiffre <= chiffreMax) {
    if (chiffre % 2 === 0) {
        document.write(chiffre + ' est pair<br>');
    } else  {
        document.write(chiffre + ' est impair<br>');
    }
    chiffre++;
} 



// exo2
// let nombreEntier = Number(prompt('Entrez un nombre entier'));
// for (var i = (nombreEntier + 10); nombreEntier <= i; nombreEntier++){
//     if ( i % 2 === 1)
//     document.write('le nombre'+ i + 'est impair.<br>');
// }
// console.info(nombreEntier);