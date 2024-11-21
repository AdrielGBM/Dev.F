function ordenarNumeros(lista) {
  for (let i = 0; i < lista.length - 1; i++) {
    for (let j = 0; j < lista.length - 1 - i; j++) {
      if (lista[j] < lista[j + 1]) {
        let aux = lista[j];
        lista[j] = lista[j + 1];
        lista[j + 1] = aux;
      }
    }
  }
  return lista;
}

function ordenarCaracteres(lista) {
  for (let i = 0; i < lista.length - 1; i++) {
    for (let j = 0; j < lista.length - 1 - i; j++) {
      if (lista[j].charCodeAt(0) > lista[j + 1].charCodeAt(0)) {
        let aux = lista[j];
        lista[j] = lista[j + 1];
        lista[j + 1] = aux;
      }
    }
  }
  return lista;
}

class Alumno {
  constructor(nombre, calificaciones) {
    this.nombre = nombre;
    this.calificaciones = calificaciones;
  }

  obtenerPromedio() {
    let suma = 0;
    this.calificaciones.forEach((calificacion) => {
      suma += calificacion;
    });
    return suma / this.calificaciones.length;
  }
}

class Salon {
  constructor() {
    this.alumnos = [];
  }

  agregarAlumno(alumno) {
    this.alumnos.push(alumno);
  }

  ordenarPorPromedio() {
    for (let i = 0; i < this.alumnos.length - 1; i++) {
      for (let j = 0; j < this.alumnos.length - 1 - i; j++) {
        if (
          this.alumnos[j].obtenerPromedio() <
          this.alumnos[j + 1].obtenerPromedio()
        ) {
          let aux = this.alumnos[j];
          this.alumnos[j] = this.alumnos[j + 1];
          this.alumnos[j + 1] = aux;
        }
      }
    }
  }
}

function ordenarPalabras(lista) {
  for (let i = 0; i < lista.length - 1; i++) {
    for (let j = 0; j < lista.length - 1 - i; j++) {
      if (lista[j].length > lista[j + 1].length) {
        let aux = lista[j];
        lista[j] = lista[j + 1];
        lista[j + 1] = aux;
      }
    }
  }
  return lista;
}

function ordenarCoordenadas(lista) {
  function distancia(x, y) {
    return Math.sqrt(x * x + y * y);
  }

  for (let i = 0; i < lista.length - 1; i++) {
    for (let j = 0; j < lista.length - 1 - i; j++) {
      if (
        distancia(lista[j][0], lista[j][1]) >
        distancia(lista[j + 1][0], lista[j + 1][1])
      ) {
        let aux = lista[j];
        lista[j] = lista[j + 1];
        lista[j + 1] = aux;
      }
    }
  }
  return lista;
}

let numeros = [9, 3, 1, 6, 5, 88, -1, 2, 7];
console.log("Lista de números desordenada:");
console.log(numeros);
console.log("Lista de números ordenada:");
console.log(ordenarNumeros(numeros));

let caracteres = ["b", "h", "w", "e", "a"];
console.log("Lista de caracteres desordenada:");
console.log(caracteres);
console.log("Lista de caracteres ordenada:");
console.log(ordenarCaracteres(caracteres));

let alumno1 = new Alumno("Juan", [80, 90, 85, 70, 95]);
let alumno2 = new Alumno("Luis", [70, 80, 85, 60, 75]);
let alumno3 = new Alumno("Ana", [85, 75, 80, 90, 85]);

let salon = new Salon();
salon.agregarAlumno(alumno1);
salon.agregarAlumno(alumno2);
salon.agregarAlumno(alumno3);

console.log("Alumnos:");
console.log(alumno1);
console.log("Promedio:", alumno1.obtenerPromedio());
console.log(alumno2);
console.log("Promedio:", alumno2.obtenerPromedio());
console.log(alumno3);
console.log("Promedio:", alumno3.obtenerPromedio());
console.log("Lista de alumnos desordenada:");
salon.alumnos.forEach((alumno) => {
  console.log(alumno.nombre);
});
salon.ordenarPorPromedio();
console.log("Lista de alumnos ordenada por promedio:");
salon.alumnos.forEach((alumno) => {
  console.log(alumno.nombre);
});

let palabras = ["adios", "hola", "maximo", "uno", "despedida"];

console.log("Lista de palabras desordenada:");
console.log(palabras);
console.log("Lista de palabras ordenada por longitud:");
console.log(ordenarPalabras(palabras));

let coordenadas = [
  [7, 3],
  [2, 2],
  [1, 0],
  [4, 3],
];
console.log("Lista de palabras desordenada:");
console.log(coordenadas.join("; "));
console.log("Lista de coordenadas ordenada por distancia:");
console.log(ordenarCoordenadas(coordenadas).join("; "));
