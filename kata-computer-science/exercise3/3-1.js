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
    if (this.contiene(dato)) {
      console.log(`El dato ${dato} ya está en la lista, no se puede insertar.`);
      return;
    }

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

    console.log(`Dato ${dato} insertado al final de la lista.`);
  }

  contiene(dato) {
    let actual = this.cabeza;
    while (actual !== null) {
      if (actual.dato === dato) {
        return true;
      }
      actual = actual.siguiente;
    }
    return false;
  }

  mostrar() {
    let actual = this.cabeza;
    let elementos = [];
    let datos = "";

    while (actual !== null) {
      elementos.push(actual.dato);
      actual = actual.siguiente;
    }
    elementos.forEach((elemento) => {
      if (datos) {
        datos += " → ";
      }
      datos += elemento;
    });
    console.log(datos);
  }
}

const lista = new ListaEnlazada();
lista.insertar(1);
lista.insertar(2);
lista.insertar(3);
lista.insertar(4);
lista.insertar(5);
lista.insertar(3);
lista.insertar(1);

lista.mostrar();
