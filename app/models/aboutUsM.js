var mongoose = require('mongoose');
var AboutUsSchema =require('../schemas/AboutUs');
var AboutUs = mongoose.model('AboutUs',AboutUsSchema);

module.exports = AboutUs;