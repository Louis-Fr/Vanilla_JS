// page sur la portée des variables

// deux variables globales
let x = 5;
var y = 10;

console.log(x,y);
// 

function portee1() {
    document.getElementById('p1').innerHTML = 'Depuis portee1() : x = ' + x + 'y = ' + y;
}

portee1();

// function portee2() {//2nde fonction qui définit des variables locales
//     let a = 1;
//     var b = 2;
//     document.getElementById('p2').innerHTML = 'Depuis portee2() : a = '+ a + 'b = ' + b ;
// }

// function portee3() {
//     let x = 20;
//     var y = 40;
//     document.getElementById('p3').innerHTML = 'Depuis portee3() : x = ' + x + ' y = ' + y ;
// }

portee1();
portee2();
portee3();

// on tente d'afficher les globales
document.getElementById('p4').innerHTML = "<em>Ce code n'est pas dans une fonction et le message dans la console géneré par cette ligne est normal</em> ; Depuis l'espace global : x ' + x + ' y = ' + y; "

// on tente d'afficher les locales
document.getElementById('p5').innerHTML = "Depuis l'espace global : a = ' + a + ' b = ' + b ;
