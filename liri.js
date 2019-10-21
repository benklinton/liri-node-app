require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api")
var spotify = new Spotify(keys.spotify);
// console.log(spotify);

var command = process.argv[2]
var input = process.argv[3]

if (command === "spotify-this-song") {
    spotify.search({type: "track", query: input,}, function(err, response) {
        if(err) {
            return console.log("error has occured " + err)
        }
        var data = response.tracks.items[0] 
        console.log("Artist: " + data.album.artists[0].name)
        console.log("Song Name: " + data.name)
        console.log(data.album.preview_url)
        console.log("Album: " + data.album.name)
        
    })
}