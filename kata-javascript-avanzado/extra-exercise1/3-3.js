const exerciseThree = () => {
  document.getElementById("add").addEventListener("click", () => {
    showMessage(
      console.log,
      "El resultado de 10 + 5 es " + calculate(10, 5, add)
    );
  });
  document.getElementById("subtract").addEventListener("click", () => {
    showMessage(
      console.log,
      "El resultado de 10 - 5 es " + calculate(10, 5, subtract)
    );
  });
  document.getElementById("multiply").addEventListener("click", () => {
    showMessage(
      console.log,
      "El resultado de 10 x 5 es " + calculate(10, 5, multiply)
    );
  });
  document.getElementById("divide").addEventListener("click", () => {
    showMessage(
      console.log,
      "El resultado de 10 : 5 es " + calculate(10, 5, divide)
    );
  });
};

const calculate = (num1, num2, callback) => {
  return callback(num1, num2);
};

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  if (b === 0) {
    throw new Error("No se puede dividir por 0.");
  }
  return a / b;
};

document.addEventListener("DOMContentLoaded", exerciseThree);
