class Nodo {
  constructor(dato) {
    this.dato = dato;
    this.siguiente = null;
  }
}

class ListaEnlazada {
  constructor() {
    this.cabeza = null;
  }

  insertar(dato) {
    const nuevoNodo = new Nodo(dato);

    if (this.cabeza === null) {
      this.cabeza = nuevoNodo;
    } else {
      let actual = this.cabeza;
      while (actual.siguiente !== null) {
        actual = actual.siguiente;
      }
      actual.siguiente = nuevoNodo;
    }
  }

  mostrarSuperiores(valor) {
    let actual = this.cabeza;
    let elementos = [];
    let datos;

    while (actual !== null) {
      if (actual.dato > valor) {
        elementos.push(actual.dato);
      }
      actual = actual.siguiente;
    }
    elementos.forEach((elemento) => {
      if (datos) {
        datos += " → ";
      } else {
        datos = `Nodos con valores superiores a ${valor}: `;
      }
      datos += elemento;
    });
    console.log(datos);
  }

  mostrar() {
    let actual = this.cabeza;
    let elementos = [];
    let datos;

    while (actual !== null) {
      elementos.push(actual.dato);
      actual = actual.siguiente;
    }
    elementos.forEach((elemento) => {
      if (datos) {
        datos += " → ";
      } else {
        datos = "Lista Completa: ";
      }
      datos += elemento;
    });
    console.log(datos);
  }
}

function crearListaAleatoria(tamano, min, max) {
  let lista = new ListaEnlazada();
  for (let i = 0; i < tamano; i++) {
    lista.insertar(numeroAleatorio(min, max));
  }
  return lista;
}

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let lista = crearListaAleatoria(10, 1, 100);

lista.mostrar();
lista.mostrarSuperiores(50);
