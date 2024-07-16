fetch('https://api.mercadolibre.com/sites/MLA/search?q=ordenadores')
  .then(response => response.json())
  .then(data => {
    const productos = data.results;
    mostrarProductos(productos);
  })
  .catch(error => console.error('Error:', error));

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => response.json())
  .then(data => {
    mostrarPokemon(data);
  })
  .catch(error => console.error('Error:', error));

function mostrarProductos(productos) {
  const productosContainer = document.getElementById('productos');
  productosContainer.innerHTML = '';

  productos.forEach(producto => {
    const productoDiv = document.createElement('div');
    productoDiv.className = 'producto';
    productoDiv.innerHTML = `
      <img src="${producto.thumbnail}" alt="${producto.title}">
      <h3>${producto.title}</h3>
      <p>Precio: $${producto.price}</p>
    `;
    productosContainer.appendChild(productoDiv);
  });
}

function mostrarPokemon(pokemon) {
  const pokemonContainer = document.getElementById('pokemon');
  pokemonContainer.innerHTML = '';

  const pokemonDiv = document.createElement('div');
  pokemonDiv.className = 'pokemon';
  pokemonDiv.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <h3>${pokemon.name}</h3>
    <p>Altura: ${pokemon.height}</p>
    <p>Peso: ${pokemon.weight}</p>
    <p>Tipo: ${pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
  `;
  pokemonContainer.appendChild(pokemonDiv);
}
