// EXO valeurs

// alert('la page est liée');

var nb1 = Number (prompt("Entrez nb1 :"));
var nb2 = Number (prompt("Entrez nb2 :"));
var nb3 = Number (prompt("Entrez nb3 :"));


if (nb1 > nb2) {
    nb1 = nb3 * 2;
} else {
    nb1++;
    if (nb1 > nb3) {
        nb1 = nb1 + nb3;
    } else {
        nb1 = 0;
        nb3 = nb3 * 2 + nb2;
    }
}

console.info(nb1);
console.info(nb2);
console.info(nb3);