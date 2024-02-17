let maxIntervalo = 10;
let numeroSecreto = Math.floor(Math.random()*maxIntervalo)+1;
let numeroUsuario = 0;
let intentos = 1;
let intentosMax = 3;


while (numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${maxIntervalo}, por favor.`));

  if (numeroUsuario == numeroSecreto) {
    // Acertamos el número
    alert(
      `Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos ==1 ? 'intento': 'intentos' }.`
    );

  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El número secreto es menor.");
    } else {
      alert("El número secreto es mayor.");
    }

    //Control de intentos 
    intentos++;

    if (intentos > intentosMax) {
      // Número de intentos agotados
      alert(`Lo siento, no acertaste el número. Máximo de intentos: ${intentosMax}.`);
      break;
    }
  }
  
}


