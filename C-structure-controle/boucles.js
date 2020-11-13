// page boucles

// alert('test fonctionnement de notre page');

// Intro
// incrémentation et décrémentation

let a = 10, b = 10, c = 20, d = 20;
console.log(a); 

// a++ va incrémenter (ajouter 1) après la valeur 
document.getElementById('p1').innerHTML = 'a contient la valeur' + a + ', là je vais post-incrémenter de 1, ce qui fait toujours a = ' + a++ + 'et après ça fera a = ' + a; 

console.log(b);

document.getElementById('p2').innerHTML = 'b contient la valeur' + b + ' là je vais pré-incrémenter avant, donc maintenant b contient' + ++b;

console.log(c);

document.getElementById('p3').innerHTML = 'c contient la valeur' + c + 'on post-décrémente de 1, donc c est toujours égal à' + c-- + ' et donc après c sera égal à ' + c;

console.log('c');

document.getElementById('p4').innerHTML = 'd contient la valeur ' + d + ', là je pré-décrémente de 1, donc d est égal à' + --d;

console.log(d);


// A compléter


// boucle while

let w1 = 0; // la variable de départ

 
while ( w1 < 10 ){ 
    // += rajoute à chaque tour la chaîne de caractéres tant que la boucle n'est pas terminée
    document.getElementById('while1').innerHTML += 'w1 contient la valeur ' + w1 + '<br>';
    w1++; // incrémente la valeur de la variable de départ
 
}

// dans le while2

let w2 = 10;

// boucler tant que w2 est inférieur ou égal à 10

while ( w2 < 10 ){
    document.getElementById('while2').innerHTML += 'w2 contient' + w2 +'<br>'; w2++;
}

// on va reproduire la boucle avec do... while... : "faire tant que"

let w3 = 0;

do { //fait
    document.getElementById('while3').innerHTML += 'Regarder w3 contient la valeur' + w3 '<br>'.; 
    +w3++; //incrémente 
}
while ( w3 <= 10){ //tant que le test est vrai

}