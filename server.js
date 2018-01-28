const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('API')
});

app.listen(PORT, () => {
  console.log('Todo API running on port: ' + PORT);
});
