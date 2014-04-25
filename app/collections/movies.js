var Backbone = require('backbone');

var Movies = Backbone.Collection.extend({

  url: '/api/movies'

});

module.exports = Movies;
