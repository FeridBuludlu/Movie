function searchMovie() {
    var input = document.getElementById("searchInput").value;
    var apiKey = "e5801996";
    var url = "https://www.omdbapi.com/?apikey=" + apiKey + "&t=" + input;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.Response === "True") {
            var movieInfo = `
            <div>
                <img src="${data.Poster}" alt="${data.Title} Poster"> 
                <div>
                    <h2>${data.Title}</h2>
                    <p><i class="fa-solid fa-star"></i> ${data.imdbRating} </p>
                    <div>
                      <p> ${data.Rated} / ${data.Year} / " ${data.Website} "</p>
                    </div>
                <p>${data.Genre}</p>
                </div>
            </div>
            <p><strong>Plot:</strong> ${data.Plot}</p>
            <p><strong>Actors:</strong> ${data.Actors}</p>
            `;
            document.getElementById("movieInfo").innerHTML = movieInfo;
        } else {
            document.getElementById("movieInfo").innerHTML = "<p> 'Elə Bir kino yoxdur'!</p>";
        }
    })
    .catch(error => console.log("Error:", error));
}
