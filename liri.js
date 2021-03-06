//required to make program work and grab the needed libraries and initialize them as variables
require("dotenv").config();
var fs = require("fs");//allows asychron file systems
var axios = require("axios");//require usage of axios
var keys = require("./keys.js");//need keys
var moment = require("moment");//need moment.js api for time feature

//require spotify api packages
//doesnt matter to use var/const/let use let or const
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

//be able to take in user input to get needed info
var action = process.argv[2];//command from user 'what to look up'
var query = process.argv.slice(3).join(" "); //word to look unp

//functions for program using case switch instead of if else statements
//switch statement used to perform diferent actions based on different conditions
//userInput is hardcoded set commands to run the function and the inputUserQuery is random input from user

//function for command

function commands(action, query) {
  switch (action) {
    case "concert-this":
      concertThis(query);
      break;
    case "spotify-this":
      spotifyThisSong(query);
      break;
    case "movie-this":
      movieThis(query);
      break;
    case "do-this":
      doThis(query);
      break;
    default:
      console.log("Please enter a specific command: concert-this, spotify-this, movie-this, or do-this.");//error handling
      break;
  }
}
commands(action, query);

//function for concertThis
function concertThis() {
  console.log("searching for concerts");
  var URL = `https://rest.bandsintown.com/artists/${query}/events?app_id=codingbootcamp`;
  axios.get(URL) //promise
  .then(function(response) {//pass in callback funciton to do what we want once get back
    //console.log(response.data); //response name doesnt matter its a parameter short res / resp

    for (var i = 0; i < response.data.length; i++) {
      console.log("----");
      console.log("venue: " + response.data[i].venue.name);
      console.log("city: " + response.data[i].venue.city);
      console.log("region: " + response.data[i].venue.region);
      console.log("date/time: " + response.data[i].datetime);
      console.log("----");
    } 
  })
  .catch(function(err) {
    console.log(err);
  })
}

function movieThis() {
 console.log("searching for movies");
 var URL = `http://www.omdbapi.com/?apikey=trilogy&t=${query}`;
 axios.get(URL) //promise
   .then(function (response) { //pass in callback funciton to do what we want once get back
      console.log(response.data); //response name doesnt matter its a parameter short res / resp
      console.log(response.data.Title);
      console.log(response.data.Year);
      console.log(response.data.Actors);
   })
   .catch(function (err) {
     console.log(err);
    })
 }

function spotifyThisSong() {
  console.log(`searching spotify for ${query}`);

  spotify.search({
    type: 'track',
    query: query
  }, function (err, data){
    if (err) {
      console.log("error occured: " + err);
      return;
    }
    var arr = data.tracks.items;
    
    for (i = 0; i < arr.length; i++) {
      console.log("----");
      console.log(`artist: ${arr[i].artists[0].name}`);
      console.log(`song: ${arr[i].name}`);
      console.log(`album: ${arr[i].album.name}`);
      console.log(`spotify link: ${arr[i].preview_url}`);
      console.log("----"); 
    }
  })
};

//need to access random.txt file
function doThis() {
  fs.readFile("random.txt", "utf8", function (err, response) {
    if (err) {
      return console.log(err);
    }
    var dArray = response.split(",");
    var action = dArray[0]; //take objects from txt file to use as parameters
    var query = dArray[1];

    commands(action, query)
  });
};