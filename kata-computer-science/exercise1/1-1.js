function cortarPila(pila, num) {
  if (num > pila.length) {
    throw new Error(
      "El número de elementos a retornar es mayor que la cantidad de elementos en la pila."
    );
  }

  let aux = [];
  let resultado = [];

  while (pila.length > 0) {
    aux.push(pila.pop());
  }
  for (let i = 0; i < num; i++) {
    resultado.push(aux.pop());
  }

  return resultado;
}

let pila = [
  "Manzana",
  "Cebolla",
  "Apio",
  "Naranja",
  "Papaya",
  "Sandía",
  "Melón",
];
let num = 4;
console.log(cortarPila(pila, num));
