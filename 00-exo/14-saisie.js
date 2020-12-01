// page de l'exo 14 saisie

// alert('page bien liée');


let nombre = 0; // valeur initiale qui nous permet d'entrer dans la boucle, avec une valeur inférieur à 50


//  raccourci : /

while ((nombre < 50) || (nombre > 100 )) { // tant que : tout les nombres non compris entre 50 et 100 ; soit il est inférieur à 50 soit il supérieur à 100 
    nombre = Number(prompt('Entrez un nombre entre 50 et 100')); 
}

console.log(nombre + ' > nombre récupérée');