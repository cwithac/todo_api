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

//Routes
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

//Listener
app.listen(PORT, () => {
  console.log('Todo API running on port: ' + PORT);
});
