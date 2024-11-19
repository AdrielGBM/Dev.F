class Estudiante {
  constructor(nombre, calificacion) {
    this.nombre = nombre;
    this.calificacion = calificacion;
  }
}

class Clase {
  constructor() {
    this.estudiantes = [];
  }

  agregarEstudiante(nombre, calificacion) {
    const estudiante = new Estudiante(nombre, calificacion);
    this.estudiantes.push(estudiante);
  }

  obtenerNombresMayusculas() {
    return this.estudiantes.map((estudiante) =>
      estudiante.nombre.toUpperCase()
    );
  }

  encontrarSobresalientes() {
    return this.estudiantes.filter(
      (estudiante) => estudiante.calificacion > 85
    );
  }

  calcularPromedio() {
    let total = 0;
    this.estudiantes.forEach((estudiante) => {
      total += estudiante.calificacion;
    });
    return total / this.estudiantes.length;
  }

  buscarEstudiante(nombre) {
    return this.estudiantes.find((estudiante) => estudiante.nombre === nombre);
  }
}

const clase = new Clase();

function agregarEstudiantes() {
  clase.agregarEstudiante("Ana", 90);
  clase.agregarEstudiante("Juan", 78);
  clase.agregarEstudiante("Luis", 88);
  clase.agregarEstudiante("María", 95);
  document.getElementById("output").innerText = "Estudiantes agregados.";
}

function mostrarNombresMayusculas() {
  const nombres = clase.obtenerNombresMayusculas();
  document.getElementById(
    "output"
  ).innerText = `Nombres en mayúsculas: ${nombres.join(", ")}`;
}

function mostrarSobresalientes() {
  const sobresalientes = clase.encontrarSobresalientes();
  document.getElementById(
    "output"
  ).innerText = `Estudiantes sobresalientes: ${sobresalientes
    .map((e) => e.nombre)
    .join(", ")}`;
}

function mostrarPromedio() {
  const promedio = clase.calcularPromedio();
  document.getElementById(
    "output"
  ).innerText = `Promedio de calificaciones: ${promedio.toFixed(2)}`;
}

function buscarEstudiante() {
  const nombre = prompt("Ingrese el nombre del estudiante a buscar:");
  const estudiante = clase.buscarEstudiante(nombre);
  if (estudiante) {
    document.getElementById(
      "output"
    ).innerText = `Estudiante encontrado: ${estudiante.nombre} con calificación ${estudiante.calificacion}`;
  } else {
    document.getElementById("output").innerText = "Estudiante no encontrado.";
  }
}
