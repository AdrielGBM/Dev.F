let numero1 = prompt("Por favor, ingresa el primer número (entre 1 y 50):");
let numero2 = prompt("Por favor, ingresa el segundo número (entre 1 y 50):");

let i = 1;

while (i <= 50) {
  if (i == numero1 || i == numero2) {
    console.log(`${i} ¡Lotería!`);
  } else {
    console.log(i);
  }
  i++;
}
