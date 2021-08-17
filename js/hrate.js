const hrate_MOVIES_API='https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=f59db0d7df317b31f4207e1c560b99c0'
const hrate_img = 'https://image.tmdb.org/t/p/w500';
const hrate = document.getElementById('hrate');
fetchhrate(hrate_MOVIES_API)
async function fetchhrate(url) {
    const res = await fetch(url)
    const data = await res.json()
    showhrate(data.results)
}


function showhrate(movies) {
    hrate.innerHTML = "";
    movies.forEach(move => {
        var { title, poster_path, vote_average, overview } = move

        var moveEl = document.createElement('div')
        moveEl.classList.add('hrate')
        moveEl.innerHTML += `
        
        <div class="movie">
        <img src="${hrate_img + poster_path}"
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
        hrate.appendChild(moveEl)
    });
}
