$(document).ready(() => {

    $.getJSON('/api/todos')
    .then(addTodos)

    $('#todoInput').keypress((event) => {
      if (event.which === 13) {
        createTodo();
      };
    });

    $('.list').on('click', 'span', (e) => {
      const $this = $(e.currentTarget);
      $this.parent().remove()
    })

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
    const newTodo = $('<li>' + todo.name + '<span>x</span></li>').addClass('task');
    if (todo.completed) {
      newTodo.addClass('done');
    }
    $('.list').append(newTodo);
};
