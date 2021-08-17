var API_URL = 'https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=f59db0d7df317b31f4207e1c560b99c0&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('latest');

fetmovies(API_URL)
async function fetmovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    showmovies(data.results)
}


function showmovies(movies) {
    main.innerHTML = "";
    movies.forEach(move => {
        var { title, poster_path, vote_average, overview } = move

        var moveEl = document.createElement('div')
        moveEl.classList.add('allmovies')
        moveEl.innerHTML += `
        
        <div class="movie">
        <img src="${IMG_PATH + poster_path}"
            alt="">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="green">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>overview</h3>
          ${overview}
        </div>
    </div>

        `;
        main.appendChild(moveEl)
    });
}

form.addEventListener('submit', e => {
    e.preventDefault()
    const searchterm = search.value
    if (searchterm && searchterm !== '') {
        fetmovies(SEARCH_URL + searchterm)
        search.value = ""

    } else {
        window.location.reload()
    }
})