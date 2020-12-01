// Page multiplication

// alert('la page est liée');

var nombre1 = Number(prompt('Choisis un 1er nombre :'));
console.log(nombre1);


// 1-intialisation de la variable
// 2-opération
// 3- bloc de code à éxecuter

// for (var i = 1; i <=10; i++) { 
//     var resultat = nombre1 * i; 
//     document.getElementById('p1').innerHTML += nombre1 + 'x' + i + ' = ' + resultat + '<br>';
// }

// for (var i =1; i <=10; i++) {
//     document.getElementById
// }


for (var i = 1; i <=10; i++) {//1- initialisation de la variable; 2- test ou condition de sortie; 3- incrémentation
    var resultat = nombre1 * i;    // on fait l'opération avant et on la passe en variable
    document.getElementById('p1').innerHTML += nombre1 + ' x ' + i + ' = ' + resultat + '<br>';//le nombre1 à chaque passage FOIS la variable i = la variable résultat
}
for (var i = 1; i <=10; i++) { 
    document.getElementById('p1').innerHTML += nombre1 + ' x ' + i + ' = ' + nombre1 * i + '<br>';//on fait l'opération dans la bloce de code
}

