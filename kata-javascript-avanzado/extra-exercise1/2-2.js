const exerciseTwo = () => {
  document.getElementById("number").addEventListener("click", () => {
    checkVariableType(101, (type, value) => {
      showMessage(console.log, `El valor es: ${value}`);
      showMessage(console.log, `El tipo de dato es: ${type}`);
    });
  });
  document.getElementById("text").addEventListener("click", () => {
    checkVariableType("Hola, ¿cómo estás?", (type, value) => {
      showMessage(console.log, `El valor es: ${value}`);
      showMessage(console.log, `El tipo de dato es: ${type}`);
    });
  });
  document.getElementById("boolean").addEventListener("click", () => {
    checkVariableType(true, (type, value) => {
      showMessage(console.log, `El valor es: ${value}`);
      showMessage(console.log, `El tipo de dato es: ${type}`);
    });
  });
};

const checkVariableType = (variable, callback) => {
  const type = typeof variable;
  callback(type, variable);
};

document.addEventListener("DOMContentLoaded", exerciseTwo);
