function dividirColas(cola) {
  let colaImpares = [];
  let colaPares = [];
  let indice = 1;

  while (cola.length > 0) {
    let elemento = cola.shift();

    if (indice % 2 === 0) {
      colaImpares.push(elemento);
    } else {
      colaPares.push(elemento);
    }

    indice++;
  }

  return [colaPares, colaImpares];
}

let cola = [
  "amarillo",
  "rosa",
  "rojo",
  "verde",
  "azul",
  "negro",
  "morado",
  "blanco",
];

console.log("Cola original:", cola);

let [cola1, cola2] = dividirColas(cola);
console.log("Cola 1:", cola1);
console.log("Cola 2:", cola2);
