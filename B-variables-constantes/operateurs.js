// js. pour la page les operateurs

let x = 2;
let y = 50;
let z = 4;
let a = x + 1;
let b = x + y;
let c = x * y;
let d = x - y;
let e = d / 3;
let f = 5 % 3;
let g = 2 ** 3;

console.log('a => ',a,', b => ',b,', c => ', c)
console.log(f)
console.log('2 ** 3 = ',g)

// alert('a contient le résultat : ' + a + 
//      '\nb contient : ' + b +
//       '\nc contient : ' + c +
//       '\nd contient : ' + d +
//       '\ne contient : ' + e +
//       '\nf contient : ' + f );
// priorité des calculs

let h =  1 - 2 - 3;
// print
console.log(h)
let j= 2 ** 3 ** 2;
// le calcul dans j se fait de  droite à gauch
console.log(j)
let k = 1 + 4 -5;
console.log(k)
let l = 1- (2 * 3);
console.log(l)

alert('h contient : ' + h + 
    '\nj contient : ' + k + 
    '\nl contient : ' + l 
);

// opérateurs d'affectation 
// var chiffre1 = 501;
let chiffre1 = 50125;
let chiffre2 = 18

let somme = chiffre1 + chiffre2;
// la console.log est une fonction, prédéfini dans JS.
console.log(somme);


// let prenom = "Louis";
// console.log(prenom);
// console.log(typeof prenom);

let m = 20;
m +=15;  // on ajoute 15 à la valeur stockée
console.log(m);

let o = 50;
o *= 5;
console.log(o);







