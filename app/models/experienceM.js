var mongoose = require('mongoose');
var ExperienceSchema = require('../schemas/experience');
var Experience = mongoose.model('Experience',ExperienceSchema);

module.exports = Experience;