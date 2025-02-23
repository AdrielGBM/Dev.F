async function main() {
  const pokemons = await getPokemons();
  console.log(pokemons);
}

async function getPokemons() {
  const URL =
    "https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json"; // API no disponible

  const response = await fetch(URL, {
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  const data = await response.json();

  return data;
}

document.addEventListener("DOMContentLoaded", main);
