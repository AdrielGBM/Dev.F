const productos = {
  Aqua: 200,
  Emocion: 180,
  Alegria: 160,
  Frescura: 150,
};

const ventas = {
  Juana: { Aqua: 0, Emocion: 0, Alegria: 0, Frescura: 0 },
  Pedro: { Aqua: 0, Emocion: 0, Alegria: 0, Frescura: 0 },
};

function venderProducto(vendedor, producto) {
  ventas[vendedor][producto]++;
  console.log(`${vendedor} vendió ${producto}`);
}

function calcularTotalVentas(vendedor) {
  let total = 0;
  for (let producto in ventas[vendedor]) {
    total += ventas[vendedor][producto] * productos[producto];
  }
  return total;
}

function mostrarResultados() {
  const totalJuana = calcularTotalVentas("Juana");
  const totalPedro = calcularTotalVentas("Pedro");
  console.log("------------------------------------------------------------");
  console.log(
    `Ventas de Juana: ${ventas.Juana.Aqua} Aqua, ${ventas.Juana.Emocion} Emoción, ${ventas.Juana.Alegria} Alegría y ${ventas.Juana.Frescura} Frescura`
  );
  console.log(`Total recolectado por Juana: $${totalJuana}`);
  console.log(
    `Ventas de Pedro: ${ventas.Pedro.Aqua} Aqua, ${ventas.Pedro.Emocion} Emoción, ${ventas.Pedro.Alegria} Alegría y ${ventas.Pedro.Frescura} Frescura`
  );
  console.log(`Total recolectado por Pedro: $${totalPedro}`);

  if (totalJuana > totalPedro) {
    console.log("La empleada del mes es Juana");
  } else if (totalPedro > totalJuana) {
    console.log("El empleado del mes es Pedro");
  } else if (totalJuana === 0) {
    console.log("No han vendido nada aún");
  } else {
    console.log("Es un empate");
  }
  console.log("------------------------------------------------------------");
}
