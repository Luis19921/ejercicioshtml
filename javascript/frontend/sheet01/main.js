let pokemons = [
    {
        id: 1,
        nombre: "Bulbasur",
        imagen: "Bulbasur.png",
        tipos:["Poison","Grass"],
        evolucion: false,
    },
    {
        id: 2,
        nombre: "Ivysaur",
        imagen: "Ivysaur.png",
        tipos: ["Poison", "Grass"],
        evolucion: "Bulbasur",
    },
    {
        id: 3,
        nombre: "Venusaur",
        imagen: "Venusaur.png",
        tipos: ["Poison", "Grass"],
        evolucion: "Ivysaur",
    },
    {
        id: 4,
        nombre: "Charmander",
        imagen: "Charmander.png",
        tipos:["Fire"],
        evolucion: false,
    },
    {
        id: 5,
        nombre: "Charmeleon",
        imagen: "Charmeleon.webp",
        tipos:["Fire"],
        evolucion:"Charmander",
    },
    {
        id: 6,
        nombre: "Charizard",
        imagen: "Charizard.webp",
        tipos:["Flying","Fire"],
        evolucion:"Charmeleon",
    },
    {
        id: 7,
        nombre: "Squirtle",
        imagen: "Squirtle.webp",
        tipos:["Water"],
        evolucion: false,
    },
    {
        id: 8,
        nombre: "Wartortle",
        imagen: "Wartortle.webp",
        tipos:["Water"],
        evolucion:"Squirtle",
        },
    {
        id: 9,
        nombre: "Blastoise",
        imagen: "Blastoise.webp",
        tipos:["Water"],
        evolucion:"Wartortle",
    },
]

/*
function filterPokemons(searchTerm) {
    const filteredPokemons = pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
 renderPokemons(filteredPokemons);
}
let result = filterPokemons();
document.getElementById("demo").innerHTML = result;
*/

let pokemon =    {
    id: 2,
    nombre: "Ivysaur",
    imagen: "Ivysaur.png",
    tipos: ["Poison", "Grass"],
    evolucion: "Bulbasur",
}

function pokemonHtml(pokemon) {
    return `<div>
             
<img src="bulbasur.png"
width="70" height="80" alt="15px">
    <h1>"+pokemon.ID",""</h1>
    <h2>"+pokemon.name",""</h2>
<ul class="types-list">
    <li>"+pokemon.tipo",""</li>
    <li>"+pokemon.tipo",""</li>
    </ul>
</div>`
}

console.log(pokemonHtml(pokemon))