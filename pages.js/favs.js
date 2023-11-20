import { filtrarPorTitulo, filtrarporgenero, crearTarjeta, cardFiltrada, createTemplate } from '../module/funciones.js'
import { crearTarjeta } from './function.js'
const contenedorFavs = document.getElementById("contenedorFavs")

const url = `https://moviestack.onrender.com/api/movies`
const opciones = {
    headers: {
        "x-api-key": '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
    }
}
fetch(url, opciones)
    .then(Response => Response.json())
    .then(data => {
        const movies = data.movies
        console.log(data.movies)
        const recuLocalStorage = JSON.parse(localStorage.getItem("like"))
        const favorite = movies.filter(movie => recuLocalStorage.some(favs => favs.id === movie.id))
        console.log(favorite);
        contenedorFavs.innerHTML += createTemplate(favorite)
        checkboxes.addEventListener('change', () => {
            const filtradoporgenero = filtrarporgenero(movies, checkboxes.value)
            const filtradoPorTitulo = filtrarPorTitulo(filtradoporgenero, inputBusqueda.value)
            cardFiltrada(filtradoPorTitulo, contenedor, crearTarjeta)
        })
        inputBusqueda.addEventListener("keyup", () => {
            const filtradoPorTitulo = filtrarPorTitulo(movies, inputBusqueda.value)
            cardFiltrada(filtradoPorTitulo, contenedor, crearCard)
        })
    })

