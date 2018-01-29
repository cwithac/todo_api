$(document).ready(() => {

    $.getJSON('/api/todos')
    .then(addTodos)

    $('#todoInput').keypress((event) => {
      if (event.which === 13) {
        createTodo();
      };
    });

}); //

const addTodos = (todos) => {
  todos.forEach(todo => {
    insertTodo(todo);
  })
};

const createTodo = () => {
  const input = $('#todoInput').val();
  $.post('/api/todos', {name: input})
  .then((todo) => {
    $('#todoInput').val('');
    insertTodo(todo)
  })
  .catch((err) => {
    console.log(err);
  });
};

const insertTodo = (todo) => {
    const newTodo = $('<li>' + todo.name + '</li>').addClass('task');
    if (todo.completed) {
      newTodo.addClass('done');
    }
    $('.list').append(newTodo);
};
