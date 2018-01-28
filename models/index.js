const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/udemy_todoapi', { useMongoClient: true, promiseLibrary: global.Promise });

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');
