// const customers = ['Max', 'Manuel', 'Anna'];
// const activeCustomers = ['Max', 'Manuel'];

// const inactiveCustomers = _.difference(customers, activeCustomers);

// console.log(inactiveCustomers);

// async function getPokemon(pokemon) {
//     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

//     console.log(res.data);
//     document.body.innerHTML = `
//         <img src="${res.data.sprites.other.dream_world.front_default}">
//     `;
// }

// async function getAllPokemon() {
//     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`);
//     const pokemonList = res.data.results;
//     const pokeListElem = document.querySelector('.poke-list');

//     pokemonList.forEach(pokemon => {
//         console.log(pokemon);
//     })
// }

async function getPokemon() {
    const pokeList = document.querySelector(".poke-list");
    const pokeCardTemp = document.querySelector(".poke-card-temp");

    for (let i = 1; i < 151; i++) {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const pokemon = res.data;
        const pokeCard = document.importNode(pokeCardTemp.content, true);

        pokeCard.querySelector(
            ".img-container"
        ).innerHTML = `<img class="avatar" data-id="${pokemon.id}" src="${pokemon.sprites.other.dream_world.front_default}"> `;
        pokeCard.querySelector("h3").textContent = pokemon.id;
        pokeCard.querySelector("h1").textContent = pokemon.name;
        pokeCard.querySelector(
            "h2"
        ).textContent = `${pokemon.name} is a ${pokemon.types[0].type.name} type`;
        pokeCard.querySelector(
            "p"
        ).textContent = `${pokemon.name} will fuck you up with a ${pokemon.moves[2].move.name}`;
        pokeCard.querySelector("button").textContent = `Catch ${pokemon.name}`;

        pokeList.append(pokeCard);


    }
}

getPokemon();


// const elem = document.createElement('img');
// Object.assign(elem, {
//     className: 'my-image-class',
//     src: 'https://dummyimage.com/320x240/ccc/fff.jpg',
//     height: 120,
//     width: 160,
//     onclick: function() {alert('Clicked')}
// });

// document.body.appendChild(elem);
