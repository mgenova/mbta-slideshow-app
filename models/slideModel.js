var thinky = require('thinky')();
var r = thinky.r;
var type = thinky.type;


// Create the model
var Slide = thinky.createModel("slide", {
	title:type.string().required(),
    image: type.string(),
	alt: type.string(),
    caption: type.string(),
	createdAt: type.date().default(r.now())
});

// Ensure that an index createdAt exists
Slide.ensureIndex("createdAt");

module.exports = Slide;
