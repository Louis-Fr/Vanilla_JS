// page D-05 conclusion.html

// on va créer une fonction anonyme

// function () {
//     alert('Alerte exécutée par une fonction anonyme');
// }

// Comment appeler ma fonction si elle n'a pas de nom ?
// je la place dans une variable

let alerte = function () {
    alert ('Alerte exécutée par une fonction anonyme')
}

// toujours "appeler" la fonction anonyme sinon erreur dans la poursuite du script
alerte ();

// auto-invocation d'une fonction anonyme


// cela ne fonctionne pas
// function () {
//     alert('Alerte !!!! Seconde exécution d\'une fonction anonyme');
// }

//(on met la fonction dans ce couple de parenthèses)(); suivie d'un couple de parenthèses.

// au déclechement d'un évènement

// function () {
//     alert('Eh ! Tu as bien cliqué sur le paragraphe 1');
// }

let paragraphe1 = document.getElementById('p1');
console.log(paragraphe1);

paragraphe1.addEventListener('click', function() {
    alert('Eh ! Tu as bien cliqué sur le paragraphe 1!');
});

let paragraphe2 = document.getElementById('p2');

paragraphe2.addEventListener('click', function (){
    alert('bien joué');
});

// fonction récursive 

function decompte(t) {
    if (t > 0){ // si 't' est strictement inférieur à 0
        document.getElementById('p3').innerHTML += t + '<br>'; // on additionne puis affecte le résultat et on l'affiche dans le html
        return decompte (t - 1);
    } else {
        return t;
    } //fin if else
}// fin function

decompte(5);