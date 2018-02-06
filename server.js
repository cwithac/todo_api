//Require Global
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser')

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const todoRoutes = require('./routes/todos');
app.use('/api/todos', todoRoutes);
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

//Routes
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

//Listener
app.listen(PORT, () => {
  console.log('Todo API running on port: ' + PORT);
});
