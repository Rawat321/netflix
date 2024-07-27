// https://api.themoviedb.org/3/search/movie?query=Extraction&api_key=82cd2b704222085553ce3fa989bd7ee2 


let input = document.getElementById("searchInput")
let btn = document.querySelector("#searchBtn")
let movieDiv = document.querySelector("#movie-div")

const imageBaseURL = "https://image.tmdb.org/t/p/";

function searchMovie(searching) {

    fetch(`https://api.themoviedb.org/3/search/movie?query=${searching}&api_key=82cd2b704222085553ce3fa989bd7ee2`)
        .then((res) => res.json())
        .then((ans) => {
            showMovies(ans.results)
        })
}


function showMovies(data) {
    movieDiv.innerHTML = ""
    data.forEach((item) => {

        movieDiv.innerHTML += `
        <div class="card" style="width: 18rem;">
  <img src="${imageBaseURL}w1280${item.poster_path}" id="myImg" class="card-img-top" alt="..." height="250" width="250">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.overview.slice(1, 100)}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
    })

}

btn.addEventListener("click", function () {
    movieDiv.style.setProperty('display', 'grid', 'important')
    let data = input.value
    searchMovie(data)

})