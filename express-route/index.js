'use strict';
var util = require('util'),
	yeoman = require('yeoman-generator');


var RouteGenerator = yeoman.generators.NamedBase.extend({
	createRouteFile: function() {
		this.slugifiedName = this._.slugify(this.name);

		this.template('_route.js', 'app/routes/' + slugifiedName + '.js')
	}
});

module.exports = RouteGenerator;