// Mon premier fichier .js - Louis Colombbus
// ce fichier est lié à la page 01-04-introduction.html

// un commentaire monoLigne 

/* un commentaire 
multiligne
en JS */

let bonjour = document.getElementById('b1');
let ajouter = document.getElementById('b2');

bonjour.addEventListener('click', popup);
ajouter.addEventListener('click', ajout);

function popup(){
    alert('Bonjour!');

}

function ajout (){
    let para = document.createComment('p');
    para.textContent = 'Paragraphe ajouté';
    document.body.appendChild(para);
}

