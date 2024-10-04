function suma() {
    let numero1 = +document.getElementById('numero1').value;
    let numero2 = +document.getElementById('numero2').value;
    let display = document.getElementById('salida'); 

    display.textContent = numero1 + numero2;
}

function resta() {
    let numero1 = +document.getElementById('numero1').value;
    let numero2 = +document.getElementById('numero2').value;
    let display = document.getElementById('salida'); 

    display.textContent = numero1 - numero2;
}

function multiplicacion() {
    let numero1 = +document.getElementById('numero1').value;
    let numero2 = +document.getElementById('numero2').value;
    let display = document.getElementById('salida'); 

    display.textContent = numero1 * numero2;
}

function division() {
    let numero1 = +document.getElementById('numero1').value;
    let numero2 = +document.getElementById('numero2').value;
    let display = document.getElementById('salida'); 

    if (numero2 !== 0) {
        display.textContent = numero1 / numero2;
    } else {
        display.textContent = 'Error';
    }
}

function potenciacion() {
    let numero1 = +document.getElementById('numero1').value;
    let numero2 = +document.getElementById('numero2').value;
    let display = document.getElementById('salida'); 

    display.textContent = Math.pow(numero1, numero2);
}

function raizcuadrada() {
    let numero1 = +document.getElementById('numero1').value;
    let display = document.getElementById('salida'); 

    if (numero1 >= 0) {
        display.textContent = Math.sqrt(numero1);
    } else {
        display.textContent = 'Error';
    }
}

function borrar() {
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    let display = document.getElementById('salida'); 

    display.textContent = '';
}
