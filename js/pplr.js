const POPULAR_MOVIES_API='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f59db0d7df317b31f4207e1c560b99c0'
const popular_img = 'https://image.tmdb.org/t/p/w500';
const popular = document.getElementById('pplr');
fetchpopular(POPULAR_MOVIES_API)
async function fetchpopular(url) {
    const res = await fetch(url)
    const data = await res.json()
    showpopular(data.results)
}


function showpopular(movies) {
    popular.innerHTML = "";
    movies.forEach(move => {
        var { title, poster_path, vote_average, overview } = move

        var moveEl = document.createElement('div')
        moveEl.classList.add('popular')
        moveEl.innerHTML += `
        
        <div class="movie">
        <img src="${popular_img + poster_path}"
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
        popular.appendChild(moveEl)
    });
}
