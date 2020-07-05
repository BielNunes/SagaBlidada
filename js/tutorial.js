/* aprendendo a mexer em javascript */

/*
document.querySelector('html').onclick = function() {
    background color change;
}
*/

function hw(eID) {
    let elem = document.createElement('h1');
    let div = document.getElementById(eID);
    div.innerHTML = null;
    div.appendChild(elem);
    elem.innerHTML = 'Hello World!';
}

function prime(eID) {
    let num = 1;
    let output = [];
    let man = document.createElement('h3');
    let poop = document.createElement('h1');
    let mace = document.getElementById(eID);
    mace.innerHTML = null;
    mace.appendChild(man);
    mace.appendChild(poop);
    
    while (num < 10000) {
        let isPrime = true;
        // NAO TA APARECENDO O 3 !!!!!
        for (let index = 0; index < output.length; index += 2) {
            const element = output[index];
    
            if ( num % element === 0 && !(element === 1)) {
                isPrime = false;
                break;
            }
            
        }
    
        if (isPrime) {
            output.push(num);
            man.append(num + ',  ');
        }
        num ++;
    }
    
    let total = output.length;
    poop.append('Total de primos calculados: ' + total);
}

function shrek(eID) {
    let div = document.getElementById(eID);
    div.innerHTML = null;
    let elem = document.createElement('img');
    div.appendChild(elem);
    elem.setAttribute('src', 'img/sk1.jpg');

    elem.onclick = function imgchange () {
        let elemadress = elem.getAttribute('src');
        if (elemadress === 'img/sk1.jpg') {
            elem.setAttribute('src', 'img/king.png');
        } else if (elemadress === 'img/king.png') {
            elem.setAttribute('src', 'img/paw.jpg');
        } else {
            elem.setAttribute('src', 'img/sk1.jpg');
        }
    }
}

function clr(eID) {
    let div = document.getElementById(eID);
    div.innerHTML = null;
}