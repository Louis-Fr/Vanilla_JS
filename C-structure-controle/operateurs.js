// opérateurs logique

// exemples
let x = 5;
let y = -20;

// getElementById nous sert à acceder à un id présent dans la page HTML et à insérer le texte renseigné après l'opérateur d'affectation 

if (x >= 0 && x <= 10){// ET dans cet exemple chaque condition doit être vraie
 document.getElementById('p1').innerHTML = 'x contient une valeur comprise entre 0 et 10';
 }

 // || OU 
 if (y < -10 || y > 10) {
     document.getElementById('p2').innerHTML = 'y vaut' + y + 'et est une valeur plus petite ou plus grande que 10';
    } 

    // NO
    // dans notre exemple x = 5
    // opérateur inversé ; ce n'est pas vrai, la valeur de x (5) n'est pas inférieur ou égal à 2, autrement dit le teste est false l'opérateur inversé (la négation) renvoie true donc on éxecute le code
    // on teste le fait que ça soit faux 
    
        if (! (x <=2) ) {//NO
            document.getElementById('p3').innerHTML = 'x contient une valeur strictement supérieur à 2';
        }
     