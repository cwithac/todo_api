//Require Global
const express = require('express');
const app = express();
const PORT = 3001;

//Middleware
const todoRoutes = require('./routes/todos');
app.use('/api/todos', todoRoutes);

//Routes
app.get('/', (req, res) => {
  res.send('Landing')
});

//Listener
app.listen(PORT, () => {
  console.log('Todo API running on port: ' + PORT);
});
