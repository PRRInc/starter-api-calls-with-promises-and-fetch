const BASE_URL = "https://pokeapi.co/api/v2/pokemon";


function getPokemonByID(id) {
    fetch(BASE_URL + "/" + id)
    .then((res) => res.json())
    .then((res) => {
        const article = document.createElement("article")
        console.log(res);
        article.innerHTML = `<img src=${res.sprites.front_default} alt=${res.name} />
        <h2>${res.name} (#${res.order})</h2>`

        document.querySelector(".pokemon").append(article);
    })
    .catch((error) => {
        console.log("error triggered", error);
        const errorSection = document.createElement("section");
        errorSection.setAttribute("class", "error");

        errorSection.innerHTML = `<p>There was an error!</p>
        <p class="message">${error}</p>`

        document.querySelector("main").append(errorSection);
    });


}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // const input = document.getElementById("pokemon-id")
    console.log(e.target.id.value);
    getPokemonByID(e.target.id.value);
    e.target.id.value = "";
});



// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// .then((response) => response.json())
// .then(console.log)
// .catch(console.log)