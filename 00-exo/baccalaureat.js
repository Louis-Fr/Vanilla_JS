// exo baccalaureat

// alert('la page est bien liée');

// parseFloat permet de s'assurer que la réponse soit co
let moyenne = parseFloat(prompt('Entrez votre moyenne'));
console.info(typeof moyenne);


if ((moyenne > 0) && (moyenne < 10)) {
    document.getElementById('p1').innerHTML='Vous êtes recalé';
} else if ((moyenne >= 10) && (moyenne <= 12)) {
    document.getElementById('p1').innerHTML='Vous êtes recu sans mention!';
} else if ((moyenne >= 12) && (moyenne <= 20)) {
    document.getElementById('p1').innerHTML='Bravo vous avez une mention';
} else {
    document.getElementById('p1').innerHTML='Vous devez saisir une note entre 0 et 20'; 
}

