const mongoose = require('mongoose');
mongoose.set('debug', true);
const mongoURI = process.env.MONGODB_URI ||'mongodb://localhost/udemy_todoapi';
mongoose.connect(mongoURI, { useMongoClient: true, promiseLibrary: global.Promise });

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');
