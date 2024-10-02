let numero1 = prompt("Por favor, ingresa el primer número:");
let numero2 = prompt("Por favor, ingresa el segundo número:");
let numero3 = prompt("Por favor, ingresa el tercer número:");

//¿Considerar si dos números son iguales se refiere a que se debe decir en el alert?
if (numero1 >= numero2 && numero1 >= numero3) {
  alert(`${numero1} es el número mayor`);
} else if (numero2 >= numero1 && numero2 >= numero3) {
  alert(`${numero2} es el número mayor`);
} else {
  alert(`${numero3} es el número mayor`);
}
