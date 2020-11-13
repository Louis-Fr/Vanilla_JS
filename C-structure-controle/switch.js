// page switch

let x = 15;


// on va switcher sur la variable
switch(x) {
    // case un des "cas" possible ou une des "issues"
    case 2:  
        document.getElementById('p1').innerHTML = 'x stocke la valeur 2';
        // ne pas oublier le break ! là il sort du switch
        break;
    case 5:
        document.getElementById('p1').innerHTML = 'x stocke la valeur  5';
        break;
    case 10:
        document.getElementById('p1').innerHTML = 'x stocke la valeur  10';
        break;
    case 15:
        document.getElementById('p1').innerHTML = 'x stocke la valeur  15';
        break;
        // après default il sortira naturellement
    default:
        document.getElementById('p1').innerHTML = 'x ne contient ni 2, ni 5, ni 10, ni 15, ni 20';        
}


