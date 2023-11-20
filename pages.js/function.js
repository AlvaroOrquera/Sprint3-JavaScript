export function crearTemplate(listaMovies) {
    let template = ""
    for (const movie of listaMovies) {
        template += crearTarjeta(movie)
    }
    console.log(template)
    return template
}

export function crearTarjeta(movies) {
    return `<article class=" w-[350px] h-fit border flex flex-col gap-5 bg-gradient-to-t from-slate-700 to-slate-900 rounded-xl px-5 pb-5  p-4 items-center border-none ">
    <img class="h-[70%]" src="https://moviestack.onrender.com/static/${movies.image}" alt="">
    <h2 class="text-center">${movies.title}</h2>
    <h3 class="text-center">${movies.tagline}</h3>
    <p class="line-clamp-5">${movies.overview}</p>
    <a href="./detalles.html?id=${movies.id}">More details ></a>
    <button id="botonFavorito" data-id="${movies.id}">Add Favs</button>
</article>`
}


export function CreateSelector(genresFilter) {
    return `<option value="${genresFilter}">${genresFilter}</option>`
}
export function printTemplate(ListGenres, ContainerListSearch, fn) {
    let template = ""
    for (const genre of ListGenres) {
        template += fn(genre)
    }
    ContainerListSearch.innerHTML = template
}
export function FilterTitle(list, title) {
    const Filter = list.filter(movie => movie.title.toLowerCase().startsWith(title.toLowerCase()))
    return Filter
}
export function filterGenres(listMovies, genreSelect) {
    const filterGenres = listMovies.filter(movie => movie.genres.includes(genreSelect))
    return filterGenres
}



export function crearDetalles(peliculas) {
    return `<article
        class="flex flex-col md:flex-row bg-gradient-to-t from-slate-700 to-slate-900 items-center justify-center mt-3 rounded-3xl">

        <div class="flex flex-col flex-wrap items-center md:justify-center gap-10">
            <img class="md:h-[20rem] md:w-[70rem] md:flex-row rounded-lg md:mt-3 md:ml-5" src="https://moviestack.onrender.com/static/${peliculas.image}" alt="${peliculas.title}"></img>
                <div class="flex flex-col flex-wrap justify-center gap-3 text-white">
                    <h2 class="font-kanit; text-3xl p-2">${peliculas.title}</h2>
                    <h3 class="font-semibold p-2 w-[10rem]">${peliculas.tagline}</h3>
                    <p class="font-medium text-sm p-2 md:w-[25rem]">${peliculas.overview}</p>
                </div>
                
        </div>
        <div class="flex flex-wrap justify-around items-center p-6 gap-5 rounded-lg">
            <table
                class="border-black text-white mt-8 bg-gradient-to-t from-slate-700 to-slate-900 p-10 gap-5 rounded-lg text-center md:w-[20rem] md:h-[10rem] w-64 border-solid-white">
                <tbody>
                    <tr>
                        <th>Original Lenguage</th>
                        <td>${peliculas.original_language}</td>
                    </tr>
                    <tr>
                        <th>Release Date</th>
                        <td>${peliculas.release_date}</td>
                    </tr>
                    <tr>
                        <th>Runtime</th>
                        <td>${peliculas.runtime}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>${peliculas.status}</td>
                    </tr>
                </tbody>
            </table>
            <table class="border-black text-white mt-8 bg-gradient-to-t from-slate-700 to-slate-900 p-10 gap-5 rounded-lg text-center md:w-[20rem]  md:h-[10rem] w-64 border-solid-white">
                <tr>
                    <th>Vote Average</th>
                    <td>${peliculas.vote_average}</td>
                </tr>
                <tr>
                    <th>Budget</th>
                    <td>${peliculas.budget}</td>
                </tr>
                <tr>
                    <th>Revenue</th>
                    <td>${peliculas.revenue}</td>
                </tr>
            </table>
        </div>
    </article>`
}

export function insertarDetalles(peliculas, contenedor) {
    crearDetalles(peliculas)
    contenedor.innerHTML += crearDetalles(peliculas)
}



