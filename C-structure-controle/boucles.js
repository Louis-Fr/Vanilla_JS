// page boucles

// alert('test fonctionnement de notre page');

// Intro
// incrémentation et décrémentation

let a = 10, b = 10, c = 20, d = 20;
console.log(a); 

// a++ va incrémenter (ajouter 1) après la valeur 
document.getElementById('p1').innerHTML = ('<strong>a</strong> contient la valeur ' + a + ' on va post-incrémenter de 1, donc <strong>a</strong> = ' + a++ + ' puis ensuite = ' + a); 

console.log(b);

document.getElementById('p2').innerHTML = '<strong>b</strong> contient la valeur ' +  b + ' on va pré-incrémenter avant, donc maintenant <strong>b</strong> contient ' + ++b;

console.log(c);

document.getElementById('p3').innerHTML = '<strong>c</strong> contient la valeur ' + c + ' on post-décrémente de 1, donc <strong>c</strong> est toujours égal à ' + c-- + ' puis après <strong>c</strong> sera égal à ' + c;

console.log('c');

document.getElementById('p4').innerHTML = '<strong>d</strong> contient la valeur ' + d + ' , là je pré-décrémente de 1, donc <strong>d</strong> est égal à' + --d;

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
    document.getElementById('while3').innerHTML += 'w3 contient la valeur ' + w3 + ' <br>'; 
    +w3++; //incrémente 
}
while ( w3 <= 10){ //tant que le test est vrai

}