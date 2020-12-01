// Exercice JS jour suivant

// alert('La page est bien liée');


let quelJour = prompt('Entrez le jour de la semaine avec une Majuscule'); // variable avec prompt pour les conditions
console.info(quelJour);


// conditions avec else if
if ( quelJour == 'Jeudi' ) {
    document.getElementById('p1').innerHTML=('<p>Demain nous serons <mark>Vendredi</mark></p>');
} else if (quelJour == 'Vendredi') {
    document.getElementById('p1').innerHTML=('<p>Demain nous serons <mark>Samedi</mark></p>');
} else if (quelJour == 'Samedi') {
    document.getElementById('p1').innerHTML=('<p>Demain nous serons <mark>Dimanche</mark></p>');
} else if (quelJour == 'Dimanche') {
    document.getElementById('p1').innerHTML=('<p>Demain nous serons <mark>Lundi</mark></p>');
} else if (quelJour == 'Lundi') {
    document.getElementById('p1').innerHTML=('<p>Demain nous serons <mark>Mardi</mark></p>');
} else if (quelJour == 'Mardi') {
    document.getElementById('p1').innerHTML=('<p>Demain nous serons <mark>Mercredi</mark></p>');
} else if (quelJour == 'Mercredi') {
    document.getElementById('p1').innerHTML=('<p>Demain nous serons <mark>Jeudi</mark></p>');
} else {
    alert('Erreur de saisie, recharger la page et entrez un jour de la semaine avec une Majuscule');
} 
// fin du else if


// conditions avec switch
switch(quelJour) {
    case 'Lundi': 
    document.getElementById('p2').innerHTML = '<p>Demain nous serons <mark>Mardi</mark></p>';
    break;
    case 'Mardi':
        document.getElementById('p2').innerHTML = '<p>Demain nous serons <mark>Mercredi</mark></p>';
    break;
    case 'Mercredi':
        document.getElementById('p2').innerHTML = '<p>Demain nous serons <mark>Jeudi</mark></p>';
    break;
    case 'Jeudi':
        document.getElementById('p2').innerHTML = '<p>Demain nous serons <mark>Vendredi</mark></p>';
    break;
    case 'Vendredi':
        document.getElementById('p2').innerHTML = '<p>Demain nous serons <mark>Samedi</mark></p>';
    break;
    case 'Samedi':
        document.getElementById('p2').innerHTML = '<p>Demain nous serons <mark>Dimanche</mark></p>';
    break;
    case 'Dimanche':
        document.getElementById('p2').innerHTML = '<p>Demain nous serons <mark>Lundi</mark></p>';
    break;  
    default:
        alert('Erreur de saisie, recharger la page et entrez un jour de la semaine avec une Majuscule');
} 
//  fin du switch