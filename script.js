const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then((response) => response.json())
.then(console.log)
.catch(console.log)