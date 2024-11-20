function filtrarCola(cola) {
  let colaFinal = [];
  let retirados = [];

  while (cola.length > 0) {
    let elemento = cola.shift();

    if (elemento.ticket) {
      colaFinal.push(elemento);
    } else {
      retirados.push(elemento);
    }
  }

  return [colaFinal, retirados];
}

let cola = [
  { user: "User1", ticket: true },
  { user: "User2", ticket: true },
  { user: "User3", ticket: false },
  { user: "User4", ticket: true },
  { user: "User5", ticket: false },
  { user: "User6", ticket: false },
  { user: "User7", ticket: true },
  { user: "User8", ticket: true },
  { user: "User9", ticket: true },
  { user: "User10", ticket: false },
  { user: "User11", ticket: true },
];

console.log("Cola inicial:", cola);

let [colaFinal, retirados] = filtrarCola(cola);
console.log("Elementos retirados:", retirados);
console.log("Cola final:", colaFinal);
