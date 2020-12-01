// exo comparaison en JS

// alert('la page est bien liée');

let nbr1 = parseInt (prompt('saisir un premier nombre')); // on met parseInt pour être sûr que l'on attend un nombre
console.info(nbr1);

let nbr2 = parseInt (prompt('saisir un second nombre'));
console.info(nbr2);


if ( (!isNaN(nbr1)) && (!isNaN(nbr2)) )   {// utilisation de isNaN ; !isNan nous dis "c'est bien un nombre", "isNaN est une fonction avec ici les arguments (nbr1, nbr2)"

if (nbr1 < nbr2){
    document.getElementById('p1').innerHTML='   Votre 1er nombre ' + nbr1 + ' est plus petit que votre second nombre ' + nbr2 +'.';
} else if (nbr1 > nbr2) {
    document.getElementById('p1').innerHTML='Votre 1er nombre ' + nbr1 + ' est plus grand que votre second nombre' + nbr2 + '.'; 
} else {
    document.getElementById('p1').innerHTML='Vous n\'avez pas saisi de nombre';
}

} // fin if vérification que c'est un nombre