var mongoose =require('mongoose');
var JoinSchema = require('../schemas/joinUs');
var JoinUs = mongoose.model('JoinUs',JoinSchema);

module.exports = JoinUs;
