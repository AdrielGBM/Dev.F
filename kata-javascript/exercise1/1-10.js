let programa = prompt("¿Qué programa te interesa? (Course, Carrera, Master)");

let costoMensual = 0;
let duracion = 0;
let descuento = 0;

switch (programa.toLowerCase()) {
  case "course":
    costoMensual = 4999;
    duracion = 2;
    break;
  case "carrera":
    costoMensual = 3999;
    duracion = 6;
    break;
  case "master":
    costoMensual = 2999;
    duracion = 12;
    break;
  default:
    alert(`El programa ${programa} no existe.`);
}

let beca = prompt("¿Tienes alguna beca? (Facebook, Google, Jesua, Ninguna)");

switch (beca.toLowerCase()) {
  case "facebook":
    descuento = 0.2;
    break;
  case "google":
    descuento = 0.15;
    break;
  case "jesua":
    descuento = 0.5;
    break;
  case "ninguna":
    break;
  default:
    alert(`La beca ${beca} no existe.`);
}

let costoConDescuento = costoMensual * (1 - descuento);
let costoTotal = costoConDescuento * duracion;

alert(`El costo mensual es ${costoConDescuento} MXN`);
alert(`El costo total por el programa es ${costoTotal} MXN`);
