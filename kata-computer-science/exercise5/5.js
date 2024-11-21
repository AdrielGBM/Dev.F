function numeroMasRepetido(lista) {
  let contador = {};
  let frecuenciaMax = 0;
  let numeroRepetido;

  lista.forEach((num) => {
    contador[num] = (contador[num] || 0) + 1;
    if (contador[num] >= frecuenciaMax) {
      frecuenciaMax = contador[num];
      numeroRepetido = num;
    }
  });
  return numeroRepetido;
}

function encontrarLetras(lista) {
  let letras = [];
  lista.forEach((elemento) => {
    if (typeof elemento === "string" && elemento.length === 1) {
      letras.push(elemento);
    }
  });
  return letras;
}

function numeroMasGrande(lista) {
  let max = lista[0];
  lista.forEach((num) => {
    if (num > max) {
      max = num;
    }
  });
  return max;
}

function numeroMasPequeno(lista) {
  let min = lista[0];
  lista.forEach((num) => {
    if (num < min) {
      min = num;
    }
  });
  return min;
}

class Contacto {
  constructor(nombre, apellidos, telefono) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.telefono = telefono;
  }
}

class ListaContactos {
  constructor() {
    this.contactos = [];
  }

  agregarContacto(contacto) {
    this.contactos.push(contacto);
  }

  buscarContactoPorNombre(nombre) {
    let encontrados = [];
    this.contactos.forEach((contacto) => {
      if (contacto.nombre === nombre) {
        encontrados.push(contacto);
      }
    });
    return encontrados;
  }
}

const array1 = [3, 6, 1, 8, 2, 3, 6, 3, 2, 5, 6];
console.log("El número más repetido es el", numeroMasRepetido(array1) + ".");

const array2 = [8, "e", 7, 2, "a", "d", "f", 2, 3, 1, 4, 3];
console.log(encontrarLetras(array2).join(", ") + " son letras.");

const array3 = [1, 4, 7, 2, 4, 1, 9, 4, 0, 2, 4, 5, 12];
console.log("El número mayor es el", numeroMasGrande(array3) + ".");

const array4 = [1, 4, 5, -1, -7, 2, 3, 9];
console.log("El número menor es el", numeroMasPequeno(array4) + ".");

let listaContactos = new ListaContactos();
listaContactos.agregarContacto(new Contacto("Juan", "Pérez", "123456789"));
listaContactos.agregarContacto(new Contacto("Ana", "Gómez", "987654321"));
listaContactos.agregarContacto(new Contacto("Juan", "Martínez", "567890123"));

const buscar = "Juan";
console.log(
  "Contactos encontrados de nombre",
  buscar + ":",
  listaContactos.buscarContactoPorNombre(buscar)
);
