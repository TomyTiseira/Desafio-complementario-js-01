// Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado.

// Inicializando variables
let numero;
const constante = 20;
// Comiendo del bucle while
while (numero != 'FIN') {
    numero = prompt('Ingrese un número para sumarle 20 y ponga "FIN" para finalizar:');
    numeroParseado = parseInt(numero);

    if (numero === 'FIN') {
        break;
    } else {
        let resultado = numeroParseado + constante;
        alert('El resultado es: ' + resultado);
    }
    
}

// Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.

// Inicializando variables
let texto;
const constante2 = 'Hola';
// Comiendo del bucle while
while (texto != 'ESC') {
    texto = prompt('Ingrese un texto para concatenarlo con el string "Hola", ponga "ESC" para finalizar: ');

    if (texto === 'ESC') {
        break;
    } else {
        alert('El resultado es: ' + constante2 + texto);
    }
}

// Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.

// Dejando el espacio para separarlos 
const mensaje = 'Hola ';

let repeticion = prompt('Ingrese la cantidad de veces a repetir el string "Hola": ');
let cantidad = parseInt(repeticion);

let cadenaFinal = '';


for (let i = 0; i < cantidad; i++) {
    cadenaFinal += mensaje;
}

if (cantidad > 0){
    alert(cadenaFinal);
}
