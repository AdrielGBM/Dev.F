function reemplazar(pila, nuevo, viejo) {
  while (pila.length > 0) {
    let elemento = pila.pop();
    if (elemento === viejo) {
      pila.push(nuevo);
      break;
    }
  }
  return pila;
}

let pila = [3, 2, 3, 4, 6, 8, 1, 2, 5, 5];
let nuevo = 7;
let viejo = 2;
console.log(reemplazar(pila, nuevo, viejo));
