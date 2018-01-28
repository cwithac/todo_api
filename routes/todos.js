const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  db.Todo.find()
  .then((todos) => {
    res.json(todos);
  })
  .catch((err) => {
    res.send(err);
  });
});

router.post('/', (req, res) => {
  db.Todo.create(req.body)
  .then((createdTodo) => {
    res.status(201).json(createdTodo)
  })
  .catch((err) => {
    res.send(err);
  });
});

module.exports = router;
