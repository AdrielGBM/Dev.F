let dia = prompt("Por favor, ingresa un día de la semana:");

switch (dia.toLowerCase()) {
  case "lunes":
    alert("¡Empecemos la semana!");
    break;
  case "viernes":
    alert("¡Por fin es viernes!");
    break;
  case "sábado":
  case "sabado":
  case "domingo":
    alert("¡Es fin de semana, a descansar!");
    break;
  default:
    alert("No es un día especial.");
}
