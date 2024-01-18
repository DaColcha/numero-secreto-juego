let numeroSecreto = 5;
let numeroUsuario = 0;
let intentos = 1;
while (numeroUsuario != numeroSecreto) {
  numeroUsuario = prompt("Me indicas un número entre 1 y 10, por favor.");

    if (numeroUsuario > numeroSecreto) {
      alert("El número secreto es menor.");
    } else {
      alert("El número secreto es mayor.");
    }
    // La condición es falsa
    //alert('Lo siento, no acertaste el número.');
}
// Acertamos el número
alert(`Acertaste, el número es: ${numeroUsuario}`);

console.log(numeroUsuario);
