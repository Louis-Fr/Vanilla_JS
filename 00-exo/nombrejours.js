// EXO 10 - nombrejours

// alert('page bien liée');

var mois = parseInt(prompt('Quel mois choisissez-vous', 'n° du mois, entre 1 et 12'));
console.info(mois);

// vérificat
/* if (!isNaN(mois)) {
    alert('Ce n\'est pas un nombre');
}

if (mois == 1) {
    document.getElementById('p1').innerHTML='Le mois de Janvier compte 31 jours.'
} else if (mois == 2) {
    document.getElementById('p1').innerHTML='Le mois de Février compte 28 jours.'
} else if (mois == 3) {
    document.getElementById('p1').innerHTML='Le mois de Mars compte 31 jours.'
} else if (mois == 4) {
    document.getElementById('p1').innerHTML='Le mois de Avril compte 30 jours.'
} else if (mois == 5) {
    document.getElementById('p1').innerHTML='Le mois de Mai compte 31 jours.'
} else if  (mois == 6) {
    document.getElementById('p1').innerHTML='Le mois de Juin compte 30 jours.'
} else if (mois == 7) {
    document.getElementById('p1').innerHTML='Le mois de Juillet compte 31 jours.'
} else if (mois == 8) {
    document.getElementById('p1').innerHTML='Le mois de Août compte 31 jours.'
} else if (mois == 9) {
    document.getElementById('p1').innerHTML='Le mois de Septembre compte 30 jours.'
} else if (mois == 10) {
    document.getElementById('p1').innerHTML='Le mois de Octobre compte 31 jours.'
} else if (mois == 11) {
    document.getElementById('p1').innerHTML='Le mois de Novembre compte 30 jours.'
} else if (mois == 12) {
    document.getElementById('p1').innerHTML='Le mois de Décembre compte 31 jours.'
} else {
    alert('saisir un nombre entre 1 et 12'); 
} */


if(!isNaN(mois)){ // est-ce bien un nombre ?
    if(mois >= 1 && mois <= 12){ // si le chiffre est entre 1 et 12, on exécute le bloc de code suivant
        if(mois == 1 || mois == 3 || mois == 5 || mois == 7 || mois == 8 || mois == 10 || mois == 12 ){ 
            document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 31 jours.';
        }else if(mois == 4 || mois == 6 || mois == 9 || mois == 11){
            document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 30 jours.';
        }else{
            document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 28 jours.';
        }
    }else{ // sinon, on exécute ce code
        document.getElementById('p1').innerHTML = 'Il n\' y a que 12 mois dans l\'année !';
    }
}else{ // si mois n'est pas un nombre (isNan), on exécute ce code
    document.getElementById('p1').innerHTML = 'Vous devez saisir un chiffre !';
} //fin de la condition
