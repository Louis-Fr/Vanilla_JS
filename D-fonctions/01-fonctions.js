// les fonctions introduction

// exemple la fonction random("aléatoire")

document.getElementById('p1').innerHTML = Math.random(); 

console.log(Math.random());

// fonction replace()

let discours1 ="Bonjour, je suis Donald Trump, et j'ai gagné!";

console.log(discours1);

let discours2 = discours1.replace(' Donald Trump',' Obama'); //le nom d'une fonction est suivi d'une couple de parenthèse qui contiennent des arguments

document.getElementById('p2').innerHTML = discours2;

console.log(discours2);

// création de fonctions
//1- Multiplier le résultat de random() par 100
function randomX100() {
    return Math.random() * 100;
}

console.log(randomX100());
document.getElementById('p3').innerHTML = randomX100();

//2- une simple mutiplication

function multiplier(nbr1, nbr2) {
    return ('Multiplions ' + nbr1 + 'X' +  nbr2 + ' = ' + (nbr1 * nbr2) );
}

console.log(multiplier(2,6));
document.getElementById('p4').innerHTML = multiplier(2,6);

// soustraction
function soustraire(nbr1, nbr2){
    // return (nbr1, nbr2);
    return('soustraction de' + nbr1 + ' - ' + nbr2 + '=' + (nbr1 - nbr2) );
}
console.log(soustraire(10,6));

// division
function division (nbr1, nbr2){
    return('division de ' + nbr1 + '/' + nbr2 + '=' + (nbr1 / nbr2));
}
console.log(division(100,2));

// addition
function addition (nbr1, nbr2){
    return('addition de' + nbr1 + '+' + nbr2 + '=' + (nbr1 + nbr2));
}
console.log(addition(10,10));
// modulo


// EXERCICE PERSO
// Création d'une fonction qui compare les valeurs

// function comparer(valeur1, valeur2){
//     return ('comparer ' + valeur1 + ' et ' + valeur2 + ' = ' + (valeur1 == valeur2));
// }

// console.log(comparer(7,7));


// function type(type1, type2){
//     return ('compare le type de ' + type1 + ' et ' + type2 + ' = ' + (type1 === type2));
// }

// console.log(type (20,'20'));