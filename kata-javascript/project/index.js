const cuentas = [
  { nombre: "Mali", saldo: 200, password: "1234" },
  { nombre: "Gera", saldo: 290, password: "5678" },
  { nombre: "Maui", saldo: 67, password: "91011" },
];

let cuentaSeleccionada = null;

function seleccionarCuenta(nombre) {
  cuentaSeleccionada = cuentas.find((cuenta) => cuenta.nombre === nombre);
  document.getElementById("password").style.display = "block";
}

function verificarPassword() {
  const inputPassword = document.getElementById("inputPassword").value;
  if (inputPassword === cuentaSeleccionada.password) {
    document.getElementById("login").style.display = "none";
    document.getElementById("password").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("nombreUsuario").innerText =
      cuentaSeleccionada.nombre;
  } else {
    document.getElementById("errorPassword").innerText =
      "Contraseña incorrecta. Inténtalo de nuevo.";
  }
}

function consultarSaldo() {
  document.getElementById(
    "mensaje"
  ).innerText = `Tu saldo actual es: $${cuentaSeleccionada.saldo}`;
}

function mostrarIngreso() {
  document.getElementById("ingreso").style.display = "block";
  document.getElementById("retiro").style.display = "none";
}

function mostrarRetiro() {
  document.getElementById("retiro").style.display = "block";
  document.getElementById("ingreso").style.display = "none";
}

function ingresarMonto() {
  const monto = parseFloat(document.getElementById("montoIngreso").value);
  if (isNaN(monto) || monto <= 0) {
    document.getElementById("errorIngreso").innerText =
      "Por favor, ingresa un monto válido.";
    return;
  }
  if (cuentaSeleccionada.saldo + monto > 990) {
    document.getElementById("errorIngreso").innerText =
      "No puedes tener más de $990 en tu cuenta.";
    return;
  }
  cuentaSeleccionada.saldo += monto;
  document.getElementById(
    "mensaje"
  ).innerText = `Has ingresado $${monto}. Tu nuevo saldo es: $${cuentaSeleccionada.saldo}`;
  document.getElementById("ingreso").style.display = "none";
  document.getElementById("errorIngreso").innerText = "";
}

function retirarMonto() {
  const monto = parseFloat(document.getElementById("montoRetiro").value);
  if (isNaN(monto) || monto <= 0) {
    document.getElementById("errorRetiro").innerText =
      "Por favor, ingresa un monto válido.";
    return;
  }
  if (cuentaSeleccionada.saldo - monto < 10) {
    document.getElementById("errorRetiro").innerText =
      "No puedes tener menos de $10 en tu cuenta.";
    return;
  }
  cuentaSeleccionada.saldo -= monto;
  document.getElementById(
    "mensaje"
  ).innerText = `Has retirado $${monto}. Tu nuevo saldo es: $${cuentaSeleccionada.saldo}`;
  document.getElementById("retiro").style.display = "none";
  document.getElementById("errorRetiro").innerText = "";
}

function cerrarSesion() {
  cuentaSeleccionada = null;
  document.getElementById("menu").style.display = "none";
  document.getElementById("ingreso").style.display = "none";
  document.getElementById("errorIngreso").innerText = "";
  document.getElementById("retiro").style.display = "none";
  document.getElementById("errorRetiro").innerText = "";
  document.getElementById("login").style.display = "block";
  document.getElementById("mensaje").innerText = "";
  document.getElementById("inputPassword").value = "";
  document.getElementById("errorPassword").innerText = "";
}
