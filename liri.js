//required to make program work and grab the needed libraries and initialize them as variables
require("dotenv").config();
//allows asychron file systems
var fs = require("fs");
//
var axios = require("axios");
var keys = require("./keys.js");
//require spotify api packages
var Spotify = require("node-spotify-api");
var spotify = new Spotify("keys.spotify");

var request = require("request");
//need moment.js api for time feature
var moment = require("moment");

var request = require("request");

//need ombd api
var ombd = require("omdb");

//need bandsintown api
var bandsintown = require("bandsintown")

//be able to take in user input to get needed info
var userInput = process.argv[2];
var userInputQuery = process.argv.slice(3).join(" ")




//define functions
function LIRI() {
  axios.get
}

//logic of code
//switch statement used to perform diferent actions based on different conditions


