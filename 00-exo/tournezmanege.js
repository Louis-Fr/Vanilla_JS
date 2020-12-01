// EXO tournez manege

// alert('page liée');

// boucle while
let nb1 = 0; 
document.write('Boucle while simple');
while (nb1 < 10) {
    nb1++;
    document.getElementById('p1').innerHTML += 'C\'est le tour de manège n'+ nb1 + ' <strong>avec while sans prompt</strong><br>'; 
}


// ici on initialise i à 1 ; i prend la valeur 1, boucle une 1ère fois et incrémente ensuite (jusqu'à 10) 
for (var i = 1; i <= 10; i++) { 
    document.write('Avec une boucle for ; c\'est le tour n°' + i + ' avec <strong>for sans prompt</strong><br>');
}

// boucle while avec prompt
let nb2 = 0; 
let manege = Number(prompt('Combien  de tour de manège voulez-vous?'));
while (nb2 < manege) {
    nb2++;
    document.getElementById('p2').innerHTML += 'C\'est le tour de manège n'+ nb2 + ' avec <strong>while et prompt</strong><br>'; 
}


// boucle for avec prompt
let tour = Number(prompt('Combien de tour?'));
console.info(tour);
for (let i = 1; i <= tour; i++) {
    document.getElementById('p3').innerHTML += "c'est enfin le tour n° " + i +  " avec <strong>for et prompt</strong><br>";
}


var maxTour = 10;
for (var choixTour = Number(prompt('Entrer un nombre')); choixTour <= maxTour; choixTour++) {
    document.write('Vous avez choisi de faire' + choixTour + '.<br>');
}


