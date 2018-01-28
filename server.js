//Require Global
const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser')

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const todoRoutes = require('./routes/todos');
app.use('/api/todos', todoRoutes);

//Routes
app.get('/', (req, res) => {
  res.send('Landing');
});

//Listener
app.listen(PORT, () => {
  console.log('Todo API running on port: ' + PORT);
});
