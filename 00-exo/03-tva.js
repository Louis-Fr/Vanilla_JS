// page js tva

// alert("page 03-tva");

// let prixH = prompt('Entrez un prix HT');
// console.log(prixH);
// let prixT = 1.20;
// console.log(prixT);

// function ttc (prixH, prixT){
//     return ('Le prix TTC est de ' + prixH + 'X' + prixT + ' = ' + (prixH * prixT));
// }


// console.info(ttc(1023,1.20));

// alert('Le prix TTC est de ' + prixH + 'X' + prixT + ' = ' + (prixH * prixT));

// correction
// ce n'était pas nécessaire de faire une fonction

let priceHT = prompt('Entrer un prix HT');
let priceTTC = priceHT * 1.20;

console.log(priceTTC);

