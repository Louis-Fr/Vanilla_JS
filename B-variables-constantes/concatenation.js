// scripts pour la page concaténation

// une variable dans laquelle on met votre âge

let monAge = 22;

// caractère d'échappement '\' ou anti-slash
let phrase = 'Bonjour j\'ai '+ monAge + ' ans.';

console.log(phrase);

// alert(phrase + monAge + ' ans.');

// alert(phrase + ' ' + monAge + ' ans.')

// littéraux de gabarits

let x = 501;
let y = 99;

// concaténer une chaîne de caractères et des variables 
// pour sauter une ligne \n
alert('x contient ' + x + 
    '\n y contient' + y +
    '\n leur somme est égale à ' + (x + y));


// ici en littéraux de gabarits
// alert (`x contient ${x}
// y contient ${y}
// leur somme est égale à 

alert(`x contient ${x}
 y contient${y}
 leur somme est égale à ${x + y}`);

alert(`x contient ${x}`);




