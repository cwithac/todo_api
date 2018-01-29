$(document).ready(() => {

//GET
    $.getJSON('/api/todos')
    .then(addTodos)

    $('#todoInput').keypress((event) => {
      if (event.which === 13) {
        createTodo();
      };
    });

//PUT
    $('.list').on('click', 'li', (e) => {
      const $this = $(e.currentTarget);
      const $completed = $this.data('completed');
      const $dataID = $this.data('id');
      const isDone = !$this.data('completed');
      const updateData = {completed: isDone};
      $.ajax({
        method: 'PUT',
        url: '/api/todos/' + $dataID,
        data: updateData
      })
      .then((todo) => {
        $this.toggleClass('done')
        $this.data('completed', isDone)
      })
    });

//DELETE
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

//GET
const addTodos = (todos) => {
  todos.forEach(todo => {
    insertTodo(todo);
  })
};

//POST
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
    newTodo.data('completed', todo.completed);
    if (todo.completed) {
      newTodo.addClass('done');
    }
    $('.list').append(newTodo);
};
