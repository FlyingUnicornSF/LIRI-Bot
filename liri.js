var fs = require('fs');
var request = require('request') // try to stay consistent one way or the other with your semi-colon use 😬


// Twitter
var keys = require("./keys.js");
var Twitter = require('twitter');
var client = new Twitter(keys.twitterKeys);

var params = {screen_name: 'FlyinginSF'};
function clientGet() {
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      for(i = 0; i < 10; i++){
      console.log(tweets[i].created_at);
      // You call fs.appendFile a lot in this file and most all of it is repeated code
      // so I'd suggest moving the bulk of that logic into it's own function like so:
      // function appendFile( content ) {
      //   fs.appendFile('log.txt', content, 'utf8', function(err){if (err) throw err;});
      // }
      // then you'd just need to run:
      // append( tweets[i].created_at + "\n" )

      fs.appendFile('log.txt', tweets[i].created_at + "\n", 'utf8', function(err){if (err) throw err;});
      console.log(tweets[i].text);
      fs.appendFile('log.txt', tweets[i].text + "\n", 'utf8', function(err){if (err) throw err;});
      fs.appendFile('log.txt', "---------------------\n", 'utf8', function(err){if (err) throw err;});
      };
    } else {
      console.log(error);
    }
  });
}; // clientGet


//Spotify
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotifyKeys);
// this song variable is only used inside of the spotifySearch function
// so I'd suggest declaring it inside of the function instead of out here
// on the global scope
var song;
function spotifySearch(input){
  // you could also use a ternary operator here:
  // song = input ? ( "'"+input+"'" ) : "The Sign"

  if (!input){
    //if the song input in empty then assign "the Sign" to the song variable
    song = "The Sign";
  } else {
    song = "'"+input+"'"; // add " " for search query
  }
  spotify.search({ type: 'track', query: song, limit: 1}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    } else {
      // Nice job assigning this deeply nested data to a more aptly named variable
      var albumInfo = data.tracks.items[0].album;
      console.log("Artist(s): " + albumInfo.artists[0].name);
      console.log("Album: " + albumInfo.name);
      console.log("Song: " + data.tracks.items[0].name);
      console.log("Url: " + albumInfo.external_urls.spotify);
      //I'm sure ther is much prettier way to do this, but it's 11pm and I don't care. 
      fs.appendFile('log.txt', "Artist(s): " + albumInfo.artists[0].name + "\n", 'utf8', function(err){if (err) throw err;});
      fs.appendFile('log.txt', "Album: " + albumInfo.name + "\n", 'utf8', function(err){if (err) throw err;});
      fs.appendFile('log.txt', "Song: " + data.tracks.items[0].name + "\n", 'utf8', function(err){if (err) throw err;});
      fs.appendFile('log.txt', "Url: " + albumInfo.external_urls.spotify + "\n", 'utf8', function(err){if (err) throw err;});
      fs.appendFile('log.txt', "---------------------\n", 'utf8', function(err){if (err) throw err;});
    }
  }); // spotify.search\
};// spofitySearch


// Movie Search 
function movieSearch(title){
  // var input = process.argv[3]; //take first word into the movie name 
  if (!title){
    // if movie search is empty then set movieName to "mr nobody"
    var movieName = "Mr. Nobody";
  } else {
    var movieName = title;
  }
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
  request(queryUrl, function(error, response, body) {
    if (error) {
      return console.log('Error: ', error)
    } else {
      body = JSON.parse(body);
      console.log("Title: " + body.Title );
      console.log("Year: " + body.Year);
      console.log("imdb Rating:: " + body.imdbRating);
      console.log("Rotten Tomato Rating: " + body.Ratings[1].Value);
      console.log("Country: " + body.Country);
      console.log("Language: " + body.Language);
      console.log("Plot: " + body.Plot);
      console.log("Actors: " + body.Actors); 
      //I'm sure ther is much prettier way to do this, but it's 11pm and I don't care. 
      fs.appendFile('log.txt', "Title: " + body.Title + "\n" + "Year: " + body.Year + "\n" + "imdb Rating:: " + body.imdbRating + "\n" + "Rotten Tomato Rating: " + body.Ratings[1].Value + "\n" + "Country: " + body.Country + "\n" + "Language: " + body.Language + "\n" + "Plot: " + body.Plot + "\n" + "Actors: " + body.Actors + "\n",  'utf8', function(err){if (err) throw err;});
      fs.appendFile('log.txt', "---------------------\n", 'utf8', function(err){if (err) throw err;});
    }
  }); // request
}; //movieSearch

// I think the command variable is in a fine spot since you're passing it to 
// this function, but I'd probably just move the input variable inside the function.
var input; //are these in the right spot? 
var command = process.argv[2]
function commandFunction(command){
  // I have to say this is really crazy thing I did here. 
  // if the input hasn't created from the random.text file, 
  // meaning it's not a looped back from "do what it says"
  // then create the input from process.argv

  // A more concise way to gather the trailing arguments as a string would be the following:
  // input = process.argv.slice(3).join(' ')
  if(!input){
    input = process.argv[3] //take the first word into the songInput
    for(i = 4; i < process.argv.length; i++){
      input += " " + process.argv[i]; //construct song name with spaces between words 
    } // closing for
  }

  if (command === "my-tweets"){
    clientGet();
  } else if (command === "spotify-this-song"){
    spotifySearch(input);
  } else if (command === "movie-this"){
    movieSearch(input);
  } else if (command === "do-what-it-says"){
    fs.readFile('random.txt', 'utf8', function(err, data) {  
      if (err) throw err;
      //take string from the text file and make commands and input
      // I don't really see any need to reassign data to str here - if you wanted
      // the variable to be str, then you could have used it to name the second
      // argument to your callback function. Also, you can use the `.split`
      // method here like so:
      // var command = str.split(',')[0]
      // var input = str.split(',')[1]
      // check out the doce here --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
      var str = data;
      var pos = str.search(",");
      var res = str.slice(0, pos);
      input = str.slice(pos+1, str.length) // creating input here from the random text file 
      command = res;
      commandFunction(command); //i wonder if this counts as recursion
    });
  }
  fs.appendFile('log.txt', command + "\n", 'utf8', function(err){if (err) throw err;});
}; //commandFunction

commandFunction(command);


