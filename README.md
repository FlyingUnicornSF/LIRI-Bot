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


## Code Example

Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

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
