// Ejercicio 1
const getPokemon = async (pokemonName) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const data = await response.json();
    console.log("-----");
    console.log(`Tipo(s) de ${pokemonName}:`);
    for (let typeInfo of data.types) {
      console.log(typeInfo.type.name);
    }
  } catch (error) {
    console.error("Error al buscar el Pokémon:", error);
  }
};

const getBook = async (bookTitle) => {
  try {
    const response = await fetch(
      `http://openlibrary.org/search.json?q=${encodeURIComponent(bookTitle)}`
    );
    const data = await response.json();
    console.log("-----");
    if (data.docs.length > 0) {
      const firstBook = data.docs[0];
      console.log(`Autor(es) de "${bookTitle}":`);
      for (let author of firstBook.author_name) {
        console.log(author);
      }
    } else {
      console.log(`No se encontraron libros para "${bookTitle}"`);
    }
  } catch (error) {
    console.error("Error al buscar el libro:", error);
  }
};

const getAuthor = async (authorName) => {
  try {
    const response = await fetch(
      `http://openlibrary.org/search.json?author=${encodeURIComponent(
        authorName
      )}`
    );
    const data = await response.json();
    console.log("-----");
    if (data.docs.length > 0) {
      console.log(`Libro(s) de "${authorName}":`);
      for (let book of data.docs) {
        console.log(book.title);
      }
    } else {
      console.log(`No se encontraron libros para "${authorName}"`);
    }
  } catch (error) {
    console.error("Error al buscar los libros del autor:", error);
  }
};

const getBand = async (bandName) => {
  try {
    const response = await fetch(
      `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${encodeURIComponent(
        bandName
      )}`
    );
    const data = await response.json();
    console.log("-----");
    if (data.artists) {
      const band = data.artists[0];
      console.log(`Género de "${bandName}": ${band.strGenre}`);
    } else {
      console.log(`No se encontró la banda "${bandName}"`);
    }
  } catch (error) {
    console.error("Error al buscar la banda:", error);
  }
};

const getCharacter = async (characterName) => {
  try {
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${encodeURIComponent(
        characterName
      )}`
    );
    const data = await response.json();
    console.log("-----");
    if (data.results.length > 0) {
      const character = data.results[0];
      console.log(`Película(s) de "${characterName}":`);
      for (let filmUrl of character.films) {
        const filmResponse = await fetch(filmUrl);
        const filmData = await filmResponse.json();
        console.log(filmData.title);
      }
    } else {
      console.log(`No se encontró el personaje "${characterName}"`);
    }
  } catch (error) {
    console.error("Error al buscar el personaje:", error);
  }
};

const getFirstGenPokemon = async () => {
  try {
    let offset = 0;
    console.log("-----");
    while (offset < 151) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${
          offset + 20 < 151 ? 20 : 151 - offset
        }`
      );
      const data = await response.json();
      for (let pokemon of data.results) {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();
        console.log(`Nombre: ${pokemonData.name}`);
        console.log(
          `Movimientos: ${pokemonData.moves
            .map((move) => move.move.name)
            .join(", ")}`
        );
        console.log(
          `Tipo(s): ${pokemonData.types
            .map((type) => type.type.name)
            .join(", ")}`
        );
        console.log(`Altura: ${pokemonData.height}`);
        console.log(`Peso: ${pokemonData.weight}`);
        console.log("-----");
      }
      offset += 20;
    }
  } catch (error) {
    console.error(
      "Error al obtener los Pokémon de la primera generación:",
      error
    );
  }
};
let delay = 0;
function executeWithDelay(func, arg) {
  setTimeout(() => func(arg), delay);
  delay += 5000;
}

executeWithDelay(getPokemon, "pikachu");
executeWithDelay(getBook, "I robot");
executeWithDelay(getAuthor, "asimov");
executeWithDelay(getBand, "coldplay");
executeWithDelay(getCharacter, "Luke");
executeWithDelay(getFirstGenPokemon);
