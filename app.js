function fetchPokemon() {
  const requestURL = "https://pokeapi.co/api/v2/pokemon/pikachu";

  fetch(requestURL)
    .then((x) => x.json())
    .then((obj) => {
      console.log(obj);
    });
}
