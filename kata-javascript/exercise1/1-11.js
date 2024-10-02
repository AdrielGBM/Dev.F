let tipoVehiculo = prompt("¿Qué tipo de vehículo es? (coche, moto, autobús)");

let precioKilometro = 0;
let cargoExtra = 0;

switch (tipoVehiculo.toLowerCase()) {
  case "coche":
    precioKilometro = 0.2;
    break;
  case "moto":
    precioKilometro = 0.1;
    break;
  case "autobús":
  case "autobus":
    precioKilometro = 0.5; //¿Debería ser 0.05?
    break;
  default:
    alert(`El vehículo ${tipoVehiculo} no está registrado.`);
}

let kmsRecorridos = prompt("¿Cuántos kilómetros has recorrido?");
let litrosConsumidos = prompt("¿Cuántos litros has consumido?");

if (litrosConsumidos >= 0 && litrosConsumidos <= 100) {
  cargoExtra = 5;
} else if (litrosConsumidos > 100) {
  cargoExtra = 10;
}

let totalPagar = precioKilometro * kmsRecorridos + cargoExtra;

alert(`El total a pagar es ${totalPagar} MXN`);
