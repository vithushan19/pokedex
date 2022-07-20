function start() {
  // Name
  const pokemonName = "Lugia";
  const pokemonNameMessage = "Pokemon Name: " + pokemonName;
  document.getElementById("name").innerHTML = pokemonNameMessage;

  // Image
  const imageUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png";
  document.getElementById("image").src = imageUrl;
}
