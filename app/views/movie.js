
var Backbone = require('backbone');
var _ = require('underscore');


var MovieView = Backbone.View.extend({

  template: _.template('<%= title %>'),

  render: function() {
    var tmpl = this.template(this.model.toJSON());
    this.$el.html(tmpl);
    return this;
  }


});

module.exports = MovieView;
