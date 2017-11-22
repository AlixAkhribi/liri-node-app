var Spotify = require('node-spotify-api');
var request = require('request')
var fs = require("fs");


// Spotify  // 

var spotify = new Spotify({
    id: "5e2fa0ac19554325b65fa64e148ff427",
    secret: "415f2dbd3c1448b7acdfae3b03da9278"
});

if (process.argv[2] == "spotify-this-song") {
    var songInput = process.argv[3];
    spotify.search({ type: "track", query: songInput, limit: 1 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        console.log("Song Name: " + data.tracks.items[0].name);
        console.log("Spotify Preview Link: " + data.tracks.items[0].external_urls.spotify);
        console.log("Album: " + data.tracks.items[0].album.name);
    });
}


// Movie Search // 

if (process.argv[2] == "movie-this") {
    var movieTitle = process.argv[3];
    var queryUrl = "http://www.omdbapi.com/?t=" + movieTitle + "&apikey=19eaac3a";

    request(queryUrl, function (error, response, body) {

        if (!error && response.statusCode === 200) {

            var movie = JSON.parse(body);

            console.log("Movie Title: " + movie.Title);
            console.log("Release Year: " + movie.Year);
            console.log("IMDB Rating: " + movie.imdbRating);
            console.log("Rotten Tomatoes Rating: " + movie.Ratings[2].Value);
            console.log("Country Produced In: " + movie.Country);
            console.log("Language: " + movie.Language);
            console.log("Plot: " + movie.Plot);
            console.log("Actors: " + movie.Actors);

        }
    });
}

if (process.argv[2] == "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            logOutput.error(err);
        }
          // We will then print the contents of data
  console.log(data);


    });
}
