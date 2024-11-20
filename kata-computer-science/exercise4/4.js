class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.izquierdo = null;
    this.derecho = null;
  }
}

function sonIdenticos(arbolA, arbolB) {
  if (arbolA === null && arbolB === null) {
    return true;
  }

  if (arbolA === null || arbolB === null) {
    return false;
  }

  return (
    arbolA.valor === arbolB.valor &&
    sonIdenticos(arbolA.izquierdo, arbolB.izquierdo) &&
    sonIdenticos(arbolA.derecho, arbolB.derecho)
  );
}

function copiarArbol(arbol) {
  if (arbol === null) {
    return null;
  }

  const nuevoNodo = new Nodo(arbol.valor);
  nuevoNodo.izquierdo = copiarArbol(arbol.izquierdo);
  nuevoNodo.derecho = copiarArbol(arbol.derecho);

  return nuevoNodo;
}

function nodosEnNivel(arbol, nivel) {
  if (arbol === null) {
    return;
  }

  if (nivel === 1) {
    console.log(arbol.valor);
  } else if (nivel > 1) {
    nodosEnNivel(arbol.izquierdo, nivel - 1);
    nodosEnNivel(arbol.derecho, nivel - 1);
  }
}

function contarHojas(arbol) {
  if (arbol === null) {
    return 0;
  }

  if (arbol.izquierdo === null && arbol.derecho === null) {
    return 1;
  }

  return contarHojas(arbol.izquierdo) + contarHojas(arbol.derecho);
}

let arbolA = new Nodo(1);
arbolA.izquierdo = new Nodo(2);
arbolA.derecho = new Nodo(3);
arbolA.izquierdo.izquierdo = new Nodo(4);
arbolA.izquierdo.derecho = new Nodo(5);
console.log("Se creó y agregaron valores al Árbol A.");

let arbolB = copiarArbol(arbolA);
console.log("Se copió el Árbol A en el B.");

console.log(
  "Árbol A y Árbol B",
  sonIdenticos(arbolA, arbolB) ? "son" : "no son",
  "idénticos."
);
arbolB.derecho.derecho = new Nodo(6);
console.log("Se agregó el valor 6 en el Árbol B a la derecha -> derecha.");
console.log(
  "Árbol A y Árbol B",
  sonIdenticos(arbolA, arbolB) ? "son" : "no son",
  "idénticos"
);

console.log("Nodos del Árbol A en el nivel 2:");
nodosEnNivel(arbolA, 2);
console.log("Nodos del Árbol B en el nivel 3:");
nodosEnNivel(arbolB, 3);

console.log("Número de hojas en el Árbol A:", contarHojas(arbolA));
console.log("Número de hojas en el Árbol B:", contarHojas(arbolB));
