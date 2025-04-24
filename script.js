let desc = document.getElementById("desc");
desc.style.display = 'none';


async function getData(name) {
    try {
        let raw = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=736ef7ac`); // HTTPS URL
        let data = await raw.json();
        desc.style.display = 'block';
        console.log(data);
        return data;
    } catch (error) {
        console.log("error: " + error);
    }
}

// Handle "Enter" key press
document.querySelector(".search-container").addEventListener("keydown", async e => {
    if (e.key == "Enter") {
        e.preventDefault();
        let movie = document.getElementById("movie").value;
        await searchMovie(movie);
    }
});

// Handle click event of the search button for mobile users
document.getElementById("searchBtn").addEventListener("click", async () => {
    let movie = document.getElementById("movie").value;
    await searchMovie(movie);
});

async function searchMovie(movie) {
    let data = await getData(movie);
    console.log(`Searching ${movie}`);

    let name = document.querySelector(".movieName");
    name.innerHTML = `<b> ${data.Title} </b>`;

    let thumb = document.querySelector(".img");
    thumb.src = data.Poster;

    let plot = document.querySelector(".plot");
    plot.innerHTML = `<b> ${data.Plot} </b>`;

    let rate = document.querySelector(".rating");
    rate.innerHTML = `<b>IMDB Rating: ${data.imdbRating} </b>`;

    let dur = document.querySelector(".duration");
    dur.innerHTML = `<b>Duration: ${data.Runtime} </b>`;

    let rel = document.querySelector(".release");
    rel.innerHTML = `<b>Released: ${data.Released} </b>`;

    let gen = document.querySelector(".genre");
    gen.innerHTML = `<b>Genre: ${data.Genre} </b>`;

    let boxoff = document.querySelector(".boxoffice");
    boxoff.innerHTML = `<b>Collection: ${data.BoxOffice} </b>`;

    let awards = document.querySelector(".awards");
    awards.innerHTML = `<b>Awards: ${data.Awards} </b>`;

    let writer = document.querySelector(".writer");
    writer.innerHTML = `<b>Writer: ${data.Writer} </b>`;

    let director = document.querySelector(".director");
    director.innerHTML = `<b>Director: ${data.Director} </b>`;

    let actor = document.querySelector(".actors");
    actor.innerHTML = `<b>Actors: ${data.Actors} </b>`;
}
