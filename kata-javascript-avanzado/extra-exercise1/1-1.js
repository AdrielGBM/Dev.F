const exerciseOne = () => {
  document.getElementById("message").addEventListener("click", () => {
    showMessage(console.log, "Este es un mensaje de log");
  });
  document.getElementById("warn").addEventListener("click", () => {
    showMessage(console.warn, "Este es un mensaje de advertencia");
  });
  document.getElementById("info").addEventListener("click", () => {
    showMessage(console.info, "Este es un mensaje de información");
  });
};

const showMessage = (callback, message) => {
  callback(message);
};

document.addEventListener("DOMContentLoaded", exerciseOne);
