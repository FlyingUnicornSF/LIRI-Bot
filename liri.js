// // Twitter
//var keys = require("./keys.js");
var Twitter = require('twitter');
//var client = new Twitter(keys.twitterKeys);
var client = new Twitter({
  consumer_key: ' 9RirWMu6hbhBXDXK3D6G9rZw6',
  consumer_secret: 'uCpsmLCXQPMfzNS2jtKkdU95VmT8HDan0ecMi3PDrb7rAfeSbn',
  access_token_key: '920005219362074624-28sC26uf63qy0WQ3giXjUINH3dpoUb0',
  access_token_secret: 'sYchVDQQDjBcDGlHakmQ0ybD0eRR9ggyKiDDbBft7eNVT',
});
console.log(client.options)

var params = "FlyinginSF";


var queryUrl = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name="+params+"&count=2";
client.get(queryUrl, params, function(error, tweets, response) {
  if (!error) {
    console.log(response);
  } else {
    console.log(error);
  }
});


var request = require('request')
var movieName = "Frozen"
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

request(queryUrl, function(error, response, body) {
  if (error) {
    return console.log('Error: ', error)
  }

  body = JSON.parse(body)

  console.log(body.Year)
})

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: 'd5204c7352ac40fe9556d27558ed6a29',
  secret: '8014df42ffe04ca49999c4af751e4627'
});
 
spotify.search({ type: 'track', query: "I'll cover you" }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
    //var jsonData = JSON.stringify(data, null, 2); 
    //var jData = JSON.parse(data); 
    console.log(data.tracks.items[2].artists[1].name)

});

