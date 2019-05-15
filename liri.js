//required to make program work and grab the needed libraries and initialize them as variables
require("dotenv").config();

//allows asychron file systems
var fs = require("fs");

//require usage of axios
var axios = require("axios");

//need keys
var keys = require("./keys.js");

//require spotify api packages
var Spotify = require("node-spotify-api");
var spotify = new Spotify("keys.spotify");

var request = require("request");
//need moment.js api for time feature
var moment = require("moment");

//require usage of request
var request = require("request");

//need ombd api
var ombd = require("omdb");

//need bandsintown api
var bandsintown = require("bandsintown")

//be able to take in user input to get needed info
var userInput = process.argv[2];
var userInputQuery = process.argv.slice(3).join(" ")

//functions for program using case switch instead of if else statements
//switch statement used to perform diferent actions based on different conditions
//userInput is hardcoded set commands to run the function and the inputUserQuery is random input from user
//function for command
function runCommand(userInput, userInputQuery) {
  switch (userInput) {
    case "concert-this":
      concertThis();
      break;
    case "spotify-this":
      spotifyThisSong();
      break;
    case "movie-this":
      movieThis();
      break;
    case "do-this":
      doThis(userInputQuery);
      break;
    default:
      console.log("Please search another term");
      break;
  }
}
runCommand(userInput, userInputQuery);

//function for concertThis
function concertThis() {
  //template literal to help display data
  console.log(`\n - - - - - \n\n ${userInputQuery}'s next concert is: `);
  //use request here as a query url with the specified parameters from docs and userInputQuery
  request("https://rest.bandsintown.com/artist/" + userInputQuery + "/events?app_id=" + bandsintown, function (error, response, body) {
    
  } )
  
}
