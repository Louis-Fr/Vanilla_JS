// js pour introduction opérateurs de comparaisons
// alert();

let x = 5;
console.log(x);

let testEgalValeur = x == 2;
// valeur identique?
console.log(testEgalValeur);


let testEgalValeurType = x === 5;
console.log(testEgalValeurType);

let testDifferenceValeur = x != 5; // différent de 4?
console.log(testDifferenceValeur);

let testDifferentValeurType = x !==4;// différent en valeur ou en type ?
// console.log(testDifferentValeurType);

let testInferieurOuEgal = x < 4;
console.log(testInferieurOuEgal);

let testSuperieur = x > 4;
console.log(testSuperieur);

alert('Valeur dans x égale à 4 (en valeur) ? : ' + testEgalValeur +
    '\n Valeur dans x égale à 4 (en valeur ET en type)? ' + testEgalValeurType +
    ''
);

alert()