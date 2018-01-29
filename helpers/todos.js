const db = require('../models');

exports.getTodos = (req, res) => {
  db.Todo.find()
  .then((todos) => {
    res.json(todos);
  })
  .catch((err) => {
    res.send(err);
  });
};

exports.createTodo = (req, res) => {
  db.Todo.create(req.body)
  .then((createdTodo) => {
    res.status(201).json(createdTodo)
  })
  .catch((err) => {
    res.send(err);
  });
};

exports.showTodo = (req, res) => {
  db.Todo.findById(req.params.id)
  .then((foundTodo) => {
    res.json(foundTodo)
  })
  .catch((err) => {
    res.send(err);
  });
};

exports.updateTodo = (req, res) => {
  db.Todo.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
  .then((todo) => {
    res.json(todo)
  })
  .catch((err) => {
    res.send(err);
  });
};

exports.deleteTodo = (req, res) => {
  db.Todo.remove({_id: req.params.id})
  .then(() => {
    res.json({message: 'Deleted'})
  })
  .catch((err) => {
    res.send(err);
  });
};

module.exports = exports;
