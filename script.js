const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const pokeDex = {};

function getPokemonByID(id) {
  const errorSection = document.querySelector(".error") || null;
  if (errorSection) {
    errorSection.remove();
  }
  fetch(BASE_URL + "/" + id) // results in a Promise
    .then((x) => x.json()) // results in a Promise
    .then((res) => {
      // results in an OBJECT
      if (!pokeDex[id]) {
        const article = document.createElement("article");
        console.log(res);
        article.innerHTML = `<img src=${res.sprites.front_default} alt=${res.name} />
      <h2>${res.name} (#${res.order})</h2>`;

        document.querySelector(".pokemon").append(article);
        pokeDex[id] = true;
      } else {
        const seenBefore = document.createElement("section");
        seenBefore.setAttribute("class", "error");

        seenBefore.innerHTML = `<p>There was an error!</p>
    <p class="message">You've already found this pokemon!</p>`;

        document.querySelector("main").append(seenBefore);
      }
    })
    .catch((error) => {
      console.log("error triggered", error);
      const errorSection = document.createElement("section");
      errorSection.setAttribute("class", "error");

      errorSection.innerHTML = `<p>There was an error!</p>
    <p class="message">${error}</p>`;

      document.querySelector("main").append(errorSection);
    });
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // const input = document.getElementById("pokemon-id").value;

  console.log(e.target.id.value);
  getPokemonByID(e.target.id.value);
  e.target.id.value = "";
});














// const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// const pokeDex = {};

// function getPokemonByID(id) {
//     const errorSection = document.querySelector("error") || null;
//         if(errorSection) {
//             errorSection.remove();
//         }
//     fetch(BASE_URL + "/" + id)
//     .then((res) => res.json())
//     .then((res) => {
//         if(!pokeDex[id]) {

//             pokeDex[id] = true;
//         } else {
//             const seenBefore = document.createElement("section");
//             seenBefore.setAttribute("class", "error");

//             seenBefore.innerHTML = ``
//         }
        
//         ? null : {}
//         const article = document.createElement("article")
//         console.log(res);
//         article.innerHTML = `<img src=${res.sprites.front_default} alt=${res.name} />
//         <h2>${res.name} (#${res.order})</h2>`

//         document.querySelector(".pokemon").append(article);
//     })
//     .catch((error) => {
//         console.log("error triggered", error);
//         const errorSection = document.createElement("section");
//         errorSection.setAttribute("class", "error");

//         errorSection.innerHTML = `<p>There was an error!</p>
//         <p class="message">${error}</p>`

//         document.querySelector("main").append(errorSection);
//     });


// }

// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     // const input = document.getElementById("pokemon-id")
//     console.log(e.target.id.value);
//     getPokemonByID(e.target.id.value);
//     e.target.id.value = "";
// });



// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// .then((response) => response.json())
// .then(console.log)
// .catch(console.log)