const express = require('express');
const app = express();
const PORT = 3001;

app.listen(PORT, function() {
  console.log('Todo API running on port: ' + PORT);
})
