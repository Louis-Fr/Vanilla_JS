// JS pourl'introduction aux objets 

    // alert ('la page est liée');

// ici on a un objet
let utilisateur = {

    nom : ['Victor','Marie','Hugo'], 
    age : 2, 
    email : 'totor@hugo.com',
    adresse : '12 Avenue Victor Hugo', 


// nom, age et email sont des propriétés de l'objet utilisateur
// ici des propriétés qui sont dans un tableau, un "array" qui débute à 0 !


// une méthode attachée à utilisateur
bonjour: function() {
    alert('J\'ai ' + this.age + ' ans et mon prénom est ' + this.nom[0] + ' ' + this.nom[1] + ' ' + this.nom[2] + '.');
    }

}

console.info(typeof utilisateur); // on voit le type de donnée : object

utilisateur.bonjour(); // ici on affiche 