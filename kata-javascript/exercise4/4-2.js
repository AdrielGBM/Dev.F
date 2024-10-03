let numero = parseInt(prompt("Por favor, ingresa un número:"));

for (let i = 1; i <= numero; i++) {
  if (i % 5 === 0 && i <= pokemons.length) {
    console.log(pokemons[i - 1]);
  }
}
