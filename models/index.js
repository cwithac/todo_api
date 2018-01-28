const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.createConnection('mongodb://localhost/udemy_todoapi');

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');
