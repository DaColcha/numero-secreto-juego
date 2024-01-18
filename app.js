let numeroSecreto = 8;
let numeroUsuario = prompt('Me indicas un número entre 1 y 10, por favor.');

/* 
    Este código compara los números 
*/
if (numeroUsuario == numeroSecreto) {
    // Acertamos el número
    alert(`Acertaste, el número es: ${numeroUsuario}` );
} else{
    // La condición es falsa
    alert('Lo siento, no acertaste el número.');
}

console.log(numeroUsuario);