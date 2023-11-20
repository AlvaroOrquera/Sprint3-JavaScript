import { crearTemplate} from "./function.js";





const url = `https://moviestack.onrender.com/api/movies`
const key = `0ff70d54-dc0b-4262-9c3d-776cb0f34dbd`

const options = {
    headers: {
        'X-API-KEY': key
    }
}

let allMovies

fetch(url, options)
    .then(response => response.json())
    .then(data => {
        const movies = data.movies.filter(movie => favoritos.includes(movie.id));
        contenedorFavs.innerHTML += crearTemplate(movies)
        allMovies=data.movies
    })
const contenedorFavs = document.getElementById('contenedorDeFavoritos');

let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

contenedorFavs.addEventListener("click", (event) => {
    const IdBtn = event.target.dataset.id;
    console.log(IdBtn)
    if (IdBtn) {
        if (!favoritos.includes(IdBtn)) {
            favoritos.push(IdBtn);
            localStorage.setItem("favoritos", JSON.stringify(favoritos));

        } else {
            favoritos.splice(favoritos.indexOf(IdBtn), 1);
            localStorage.setItem("favoritos", JSON.stringify(favoritos));
        } 
        const movies = allMovies.filter(movie => favoritos.includes(movie.id));
        contenedorFavs.innerHTML = crearTemplate(movies)
    }
})
