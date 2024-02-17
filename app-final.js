let numeroSecreto=0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

// Función para asignar texto a un elemento
function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

// Función para asignar un evento al boton de intento
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `¡Felicidades! Has acertado en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acerto
        limpiarInput();
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
    }
    return;
}

function limpiarInput(){
    document.getElementById('valorUsuario').value = '';
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(numerosSorteados);

    if(numerosSorteados.length == numeroMaximo){
        //Todos los números han sido sorteados
        asignarTextoElemento('p', 'Se han sorteado todos los números.');
    }else{
        //Retornar el número generado si no ha sido sorteado previamente
        if(numerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Ingresa un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar el input
    limpiarInput();

    //Condiciones iniciales
    condicionesIniciales();

    //Desactivar boton de reiniciar
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}

condicionesIniciales();