// EXO 18 Fizzbuzz

// alert('la page est liée');

// for et if else if

// Un nombre entier est divisible par un autre quand le résultat est un entier sans reste.



// for (let nombre = 1; nombre <= 100; nombre++) {
//       let passage = "";
//      if (nombre % 3 === 0) {
//         console.log(passage + ' = Fizz');
//      } if ( nombre % 5 === 0) {
//         console.log(passage + ' = Buzz');
//    }
//    console.log(passage);
   
   
   // Correction Patrick

   for (let nombre = 1; nombre <= 100; nombre++) {
      if ((nombre % 3 === 0) && (nombre % 5 === 0)) {  // le nombre est divisible par 3 et 5
         console.log('Fizbuzz'); 
      
      
      
      } // fin if 
      
   } // fin for


   for (var nombre = 1; nombre <=100; nombre++) {
      if ((nombre % 3 === 0) && (nombre % 5 === 0)) {// le nombre est divisible par 3 ET 5 
          console.log('FizzBuzzzzz'); 
      } else if (nombre % 3 === 0) {
          console.log('Fizzz');
      } else if (nombre % 5 === 0) {
          console.log('Buzzzz'); }  
      else {
          console.log(nombre);
          } //fin if else
      }//fin for

 
      // Correction de Justine

      for(var i = 0; i <= 100; i++){
         if(i % 15 === 0){ // modulo de 15 qui équivaut à un modulo pour 3 et 5
              document.getElementById('p1').innerHTML += 'FizzBuzz <br>';
          }else if(i % 3 === 0){
              document.getElementById('p1').innerHTML += 'FIzz <br>';
          }else  if(i % 5 === 0){
              document.getElementById('p1').innerHTML += 'Buzz <br>';
          }else{
              document.getElementById('p1').innerHTML += i + '<br>';
          }
      } // fin de la boucle for

      console.log('correction exercice Mike');

      // Correction Mike

      for (var nombre = 1; nombre <= 100; nombre++) {
         var message = '';//initialisation de la var message
         if (nombre % 3 === 0) { //Si le modulo de 3 est egale a 0, il est divisible par 3
             message +='Fizz';
             }
         if (nombre % 5 === 0){ //Si le modulo de 5 est egale a 0, il est divisible par 5
             message += 'Buzz';
             }
         if (message == ''){
             message = nombre;
             }
         console.log(message);
     }//fin de for