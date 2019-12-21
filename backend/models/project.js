'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    lang: [String],
    year: Number
});

module.exports = mongoose.model('Project', ProjectSchema);