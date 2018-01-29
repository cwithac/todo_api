$(document).ready(() => {
    $.getJSON('/api/todos')
    .then(addTodos)
}); //

const addTodos = (todos) => {
  todos.forEach(todo => {
    const newTodo = $('<li>' + todo.name + '</li>').addClass('task');
    if (todo.completed) {
      newTodo.addClass('done');
    }
    $('.list').append(newTodo);
  })
};
