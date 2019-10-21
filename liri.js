require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api")
var spotify = new Spotify(keys.spotify);
// console.log(spotify);

var command = process.argv[2]
var input = process.argv[3]

if (command === "spotify-this-song") {
    spotify.search({ type: "track", query: input, }, function (err, response) {
        if (err) {
            return console.log("error has occured " + err)
        }
        var data = response.tracks.items[0]
        console.log("Artist: " + data.album.artists[0].name)
        console.log("Song Name: " + data.name)
        console.log(data.album.preview_url)
        console.log("Album: " + data.album.name)

    })
}

if (command === "movie-this") {
    axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            var movie = response.data
            console.log("Title: " + movie.Title)
            console.log("Release Date: " + movie.Released)
            console.log(movie.Ratings[0].Source + " " + movie.Ratings[0].Value)
            console.log(movie.Ratings[1].Source + " " + movie.Ratings[1].Value)
            console.log("Country: " + movie.Country);
            console.log("Language: " + movie.Language);
            console.log("Plot: " + movie.Plot);
            console.log("Actors: " + movie.Actors);
        })
}