let palabras = [];
let palabra;

do {
  palabra = prompt(
    "Por favor, ingresa una letra o palabra (deja vacío para terminar):"
  );
  if (palabra) {
    palabras.push(palabra);
  }
} while (palabra);

let resultado = palabras.join(" ");
console.log(resultado);
