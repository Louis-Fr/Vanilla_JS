// .js pour la page sur if else

let x = 4;
let y = 0;


// il faut obligatoirement une condition à if
if(x > 3){ // la condition est évalué à true
    alert('x contient une valeur supérieure à 1'); // si c'est true on éxecute ce bloc de code   
}

if(x == y ){    
    alert('x et y contiennent la même valeur');
}

if(y){// l'alerte ne s'affiche pas car la valeur de y contient 0, qui est une des valeurs false (cf. liste dans la page html)
    alert('La valeur de y est évalué à true');
    }
    // c'est faux donc pas d'éxécution

// inversion du test logique > vérifier que c'est faux

// let z = 4;
// let w = 0;

if((x > 1) == false){//au lieu de vérifier que le test est vrai on va vérifier qu'il est faux 
    alert('x contient une valeur inférieur à 1');
}

if((x == y) == false) {
    alert('x et y ne contiennent pas la même valeur');
}

// VOIR

