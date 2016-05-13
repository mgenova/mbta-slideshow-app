var thinky = require('thinky')();
var r = thinky.r;
var type = thinky.type;


// Create the model
var Slideshow = thinky.createModel("slideshow", {
	title:type.string(),
    slides: type.array(),
	description: type.string(),
	createdAt: type.date().default(r.now())

});


// Ensure that an index createdAt exists
Slideshow.ensureIndex("createdAt");

module.exports = Slideshow;
