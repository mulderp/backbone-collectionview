var Backbone = require('backbone');
var $ = require('jquery-untouched');
Backbone.$ = $;

var Movies = require('collections/movies');
var movies = new Movies();

var MoviesList = require('views/moviesList');
var MovieView = require('views/movie');


var moviesList = new MoviesList({
  selectable : true,
  collection : movies,
  modelView : MovieView
});

$(document).ready(function() {
  var moviesDiv = $( "ul#movies" );
  moviesList.setElement(moviesDiv);
  moviesList.listenTo(movies, 'sync', moviesList.render)
});
movies.fetch();
