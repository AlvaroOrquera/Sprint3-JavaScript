import { crearTemplate, crearTarjeta, CreateSelector, printTemplate, FilterTitle, filterGenres } from "../pages.js/function.js"


const url = `https://moviestack.onrender.com/api/movies`
const key = `0ff70d54-dc0b-4262-9c3d-776cb0f34dbd`

const options = {
    headers: {
        'X-API-KEY': key
    }
}

fetch(url, options)
    .then(response => response.json())
    .then(data => {
        const movies = data.movies
        console.log(movies)
        const Alvapeli = document.getElementById(`Alvapeli`)
        Alvapeli.innerHTML += crearTemplate(movies)
        const inputSearch = document.getElementById('inputSearch');
        const inpuntList = document.getElementById('inputList');
        const movieGenres = movies.map(movie => (movie.genres)).flat();
        const ListGenres = ['All', ...new Set(movieGenres)];
        console.log(ListGenres);
        printTemplate(ListGenres, inpuntList, CreateSelector);
        let genreFilter = null;
        let searchFilter = null;
        inpuntList.addEventListener("input", () => {
            const selectedGenre = inpuntList.value;
            if (selectedGenre === "All") {
                genreFilter = null;
                applyFiltersAndPrint();
            } else {
                genreFilter = selectedGenre !== "" ? filterGenres(movies, selectedGenre) : null;
                applyFiltersAndPrint();
            }
        });
        inputSearch.addEventListener("input", () => {
            const searchValue = inputSearch.value;
            searchFilter = searchValue !== "" ? FilterTitle(movies, searchValue) : null;
            applyFiltersAndPrint();
        });
        function applyFiltersAndPrint() {
            const combinedFilter = combineFilters([genreFilter, searchFilter]);
            if (combinedFilter.length > 0) {
                printTemplate(combinedFilter, Alvapeli, crearTarjeta);
            } else {
                Alvapeli.innerHTML = "<p>No movies found</p>";
            }
        }
        function combineFilters(filters) {
            return filters.reduce((result, currentFilter) => {
                if (currentFilter === null) {
                    return result;
                }
                return result.filter(movie => currentFilter.includes(movie));
            }, movies);
        }
    })

const contendor = document.getElementById('Alvapeli');

contendor.addEventListener("click", (event) => {
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
    }
})

let favoritos = [];


