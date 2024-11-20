function apilar(pila, contenedor) {
  pila.push(contenedor);
}

function retirar(pila, contenedorId) {
  let aux = [];

  while (pila.length > 0) {
    let contenedor = pila.pop();
    if (contenedor === contenedorId) {
      break;
    } else {
      aux.push(contenedor);
    }
  }

  while (aux.length > 0) {
    pila.push(aux.pop());
  }
}

let pila = [];
apilar(pila, 1);
apilar(pila, 2);
apilar(pila, 3);
apilar(pila, 4);
apilar(pila, 5);

console.log("Pila inicial: ", pila);

retirar(pila, 3);

console.log("Pila luego de retirar el contenedor 3: ", pila);
