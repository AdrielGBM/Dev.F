function main() {
  document.querySelector(".main__form").addEventListener("submit", enter);
}

function enter(event) {
  event.preventDefault();

  const age = document.getElementById("age").value;
  const height = document.getElementById("height").value;
  const message = document.querySelector(".main__message");

  message.innerHTML = messages(age, height);
}

function messages(age, height) {
  if (!(age >= 18)) {
    return "Solo pueden subirse personas mayores de 18 años.<br>";
  }
  if (!(height >= 160)) {
    return "Solo pueden subirse personas que midan más de 160 cm.";
  }
  return "¡Bienvenido a Mortal Life P3!";
}

document.addEventListener("DOMContentLoaded", main);
