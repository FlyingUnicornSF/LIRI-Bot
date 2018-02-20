## Synopsis
Liri-bot is a node application that takes a set of command and use API to get and display what is found.
LIRI will display
 - from Twitter API: my latest tweets 
 
    command: ```$node liri.js my-tweets```
 - from Spofity API: 
 
    command: ```$node liri.js spotify-this-song '<song name here>'```
    
        *Artist(s)
        *The song's name
        *A preview link of the song from Spotify 
        *The album that the song is from 
  
      * If no song is provided then your program will default to "The Sign" by Ace of Base.
 - from OMDb API (The Open Movie Database):
 
    command: ```node liri.js movie-this '<movie name here>'```
        
        * Title of the movie.
        * Year the movie came out.
        * IMDB Rating of the movie.
        * Rotten Tomatoes Rating of the movie.
        * Country where the movie was produced.
        * Language of the movie.
        * Plot of the movie.
        * Actors in the movie.
        
 - Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
 
  command: ```node liri.js do-what-it-says```

        *It runs spotify-this-song for "I Want it That Way," as follows the text in random.txt.
- Liri also keep log of the output in log.txt.

## Code Example
Use node-spotify-api (API library for the Spotify REST API) to search songs in Spofity
```var Spotify = require('node-spotify-api');```
```var spotify = new Spotify(keys.spotifyKeys);```

To get movies 
```  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
  request(queryUrl, function(error, response, body) {
    if (error) {
      return console.log('Error: ', error)
    } else {
      body = JSON.parse(body); ```
      
      
## Motivation

A short description of the motivation behind the creation and maintenance of the project. This should explain **why** the project exists.

## Installation

Provide code examples and explanations of how to get the project.

## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

Describe and show how to run the tests with code examples.

## Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.

## License

A short snippet describing the license (MIT, Apache, etc.)
