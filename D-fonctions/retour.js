// valeurs de retour

function division(a, b) {
    if (b == 0) {
    return 'Division par 0 impossible !';
    } else {
        alert('attend le calcul');
    return a / b;
    // après un return plus d'instruction possible, plus rien se se passe.
    }// fin if else
}// fin function

console.log(division (10,2)); // là je passe des arguments

let nbr1 = prompt('entrez un nombre à diviser');
let nbr2 = prompt('entrez un second nombre pour diviser le premier ');

console.log(nbr1, nbr2);

let resultatDivision = division(nbr1, nbr2); // on peut mettre une fonction dans une variable


document.getElementById('p1').innerHTML = 'le résultat de la fonction = ' + resultatDivision+ ' .';