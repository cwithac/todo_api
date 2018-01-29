$(document).ready(() => {

    $.getJSON('/api/todos')
    .then(addTodos)

    $('#todoInput').keypress((event) => {
      if (event.which === 13) {
        createTodo();
      };
    });

    $('.list').on('click', 'li', (e) => {
      console.log('click');
    });

    $('.list').on('click', 'span', (e) => {
      e.stopPropagation();
      const $this = $(e.currentTarget);
      const $dataID = $this.parent().data('id');
      $.ajax({
        method: 'DELETE',
        url: '/api/todos/' + $dataID
      })
      .then((data) => {
        $this.parent().remove()
      })
      .catch((err) => {
        console.log(err);
      })
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
    const newTodo = $('<li>' + todo.name + '<span>x</span></li>').addClass('task');
    newTodo.data('id', todo._id);
    if (todo.completed) {
      newTodo.addClass('done');
    }
    $('.list').append(newTodo);
};
