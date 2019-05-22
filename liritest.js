require("dotenv").config();
var fs = require("fs"); //allows asychron file systems
var axios = require("axios"); //require usage of axios
var keys = require("./keys"); //need keys
var moment = require("moment"); //need moment.js api for time feature

//require spotify api packages
//doesnt matter to use var/const/let use let or const
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);


spotify.search({
  type: 'track',
  query: 'All the Small Things'
}, function (err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

  console.log(data);
});