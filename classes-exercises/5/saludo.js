function saludar(nombre, callback) {
  console.log("Hola, " + nombre);
  callback();
}

function despedirse() {
  console.log("¡Nos vemos!");
}

saludar("Adriel", despedirse);
