// page 04 Conversion - Louis

// alert('04 - Conversion.js');

let celsius = prompt('Entrez une témperature en degrés Celsius');
let farenheit = celsius * 9 / 5 + 32;
console.log(farenheit);

let celsius2 = 23;
let farenheit2 = celsius2 * 9 / 5 + 32;
console.log(farenheit2);

let celsius3 = 1;
let farenheit3 = (celsius3 - 32) * 5/9;
console.log(farenheit3);

let celsius4 = 73.4;
let farenheit4 = (celsius4 - 32) * 5/9;
console.log(farenheit4);



document.getElementById('p1').innerHTML=(celsius + ' degrés Celsius = ' + farenheit + ' Fahrenheit.');

document.getElementById('p2').innerHTML=(celsius2+ ' degrés celsius = ' + farenheit2 + ' Fahrenheit.');

document.getElementById('p3').innerHTML=(celsius3 + ' degrés Fahrenheit = '+ farenheit3 + ' Celsius.');

document.getElementById('p4').innerHTML=(celsius4 + ' degrés Fahrenheit = ' + farenheit4 + ' Celsius.');
