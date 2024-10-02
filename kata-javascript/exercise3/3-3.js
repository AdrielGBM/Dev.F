let numeros = [];
let numero;

do {
  numero = prompt("Por favor, ingresa un número (ingresa 0 para terminar):");
  if (!isNaN(numero) && numero != 0) {
    numeros.push(Number(numero));
  } else if (numero != 0) {
    alert("Por favor, ingresa un número válido.");
  }
} while (numero != 0);

console.log("Números capturados:", numeros);
