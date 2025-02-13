const exerciseFour = () => {
  document.getElementById("upper").addEventListener("click", () => {
    showMessage(
      console.log,
      "PejeLagarto en mayúsculas es " + ordenSuperior("PejeLagarto", upper)
    );
  });
  document.getElementById("lower").addEventListener("click", () => {
    showMessage(
      console.log,
      "PejeLagarto en minúsculas es " + ordenSuperior("PejeLagarto", lower)
    );
  });
};

const ordenSuperior = (cadena, callback) => {
  return callback(cadena);
};

const upper = (cadena) => {
  return cadena.toUpperCase();
};

const lower = (cadena) => {
  return cadena.toLowerCase();
};

document.addEventListener("DOMContentLoaded", exerciseFour);
