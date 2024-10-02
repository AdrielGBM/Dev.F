let dia;

do {
  dia = prompt("Por favor, ingresa un día de la semana:");

  switch (dia.toLowerCase()) {
    case "lunes":
      alert("Comenzando la semana.");
      break;
    case "martes":
      alert("Marte está muy lejos, ¿no?");
      break;
    case "miércoles":
    case "miercoles":
      alert("Ya es la mitad de la semana.");
      break;
    case "jueves":
      alert("¡Queda poco yaa!");
      break;
    case "viernes":
      alert("Uff, ya es viernes.");
      break;
    case "sábado":
    case "sabado":
      alert("¡Esto se va a descontrolar!");
      break;
    case "domingo":
      alert("Ve a descansar.");
      break;
    default:
      alert("No es un día válido.");
  }
} while (dia.toLowerCase() !== "domingo");
