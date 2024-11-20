function recorrido(pueblos) {
  let aux = [];
  let ida = "Recorrido de ida: ";
  let vuelta = "Recorrido de vuelta: ";

  while (pueblos.length > 0) {
    const pueblo = pueblos.pop();
    vuelta += pueblo;
    if (pueblos.length > 0) {
      vuelta += " → ";
    }
    aux.push(pueblo);
  }

  while (aux.length > 0) {
    const pueblo = aux.pop();
    ida += pueblo;
    if (aux.length > 0) {
      ida += " → ";
    }
  }
  console.log(ida);
  console.log(vuelta);
}

let pueblos = ["Pueblo Origen", "Pueblo 1", "Pueblo 2", "Destino"];
recorrido(pueblos);
