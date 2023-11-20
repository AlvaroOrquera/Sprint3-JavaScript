import { insertarDetalles } from "../pages.js/function.js";

const url1 = `https://moviestack.onrender.com/api/movies`;
const key1 = `0ff70d54-dc0b-4262-9c3d-776cb0f34dbd`;

const option1 = {
    headers: {
        'X-API-KEY': key1
    }
}

const search = location.search;
const params = new URLSearchParams(search);
const id = params.get("id");
const containerDetalles = document.getElementById("containerDetalles");

fetch(url1, option1)
    .then(response => response.json())
    .then(data => {
        const movies = data.movies
        const peli = movies.find(movie => movie.id == id);


        insertarDetalles(peli, containerDetalles);
    })