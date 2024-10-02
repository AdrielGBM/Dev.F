let calificacion = prompt(
  "Por favor, ingresa una calificación (entre 1 y 10):"
);

if (calificacion < 1 || calificacion > 10) {
  alert("Error: La calificación debe estar entre 1 y 10.");
} else if (calificacion < 6) {
  alert("Reprobado");
} else if (calificacion >= 6 && calificacion <= 8) {
  alert("Regular");
} else if (calificacion == 9) {
  alert("Bien");
} else if (calificacion == 10) {
  alert("Excelente");
}
