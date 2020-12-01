// page js permutation Louis

// alert('05 permutation');

var nombre1 = 5;
var nombre2 = 3;

var temp;  // variable temporaire 
temp = nombre1;  // on dit à cette variable temporaire de stocker la valeur de nombre1 tmp = 5
// temp = temporaire
nombre1 = nombre2; // nombre 1 = 3
nombre2 = temp; // on dit a nombre 2 de stocker le contenu de notre variable nombre 2 = 5

console.log(nombre1);
console.log(nombre2);

document.getElementById('p1').innerHTML='Départ >> nombre 1 = ' + nombre1 ;

document.getElementById('p2').innerHTML='Départ >> nombre 2 = ' + nombre2 ;

document.getElementById('p3').innerHTML='Départ >> nombre 3 = ' + nombre1 ; 

document.getElementById('p4').innerHTML='Départ >> nombre 4 = ' + nombre2 ;


// autre solution

var nombre1 = 10;

var nombre2 = 7;

document.getElementById('p5').innerHTML = ( ' nombre1 est egale à ' + nombre1)

document.getElementById('p6').innerHTML = ( ' nombre2 est egale à ' + nombre2)

nombre1 = nombre1 + nombre2; // J'additionne la 1ère variable à la 2ème variable

nombre2 = nombre1 - nombre2; //  On retrouve grâce à cette opération la nouvelle valeur de nombre1 que l'on passe dans nombre2.

nombre1 = nombre1 - nombre2; // Pour retrouver la valeur d'origine de nombre2, on fait l'opération inverse que l'on affecte a nombre1.

document.getElementById('p7').innerHTML = ( ' nombre1 est egale à ' + nombre1);

document.getElementById('p8').innerHTML = ( ' nombre2 est egale à ' + nombre2);

console.log(nombre2);
console.log(nombre1);



