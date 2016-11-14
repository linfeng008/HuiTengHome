var mongoose = require('mongoose');
var ActiveSchema = require('../schemas/activity');
var Active = mongoose.model('Activity',ActiveSchema);

module.exports = Active;