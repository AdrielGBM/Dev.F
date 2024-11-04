import data from "./data.js";

let personajes = data.map((personaje) => {
  return {
    nombre: personaje.name,
    especie: personaje.species,
    imagen: personaje.image,
  };
});

console.log(personajes);
