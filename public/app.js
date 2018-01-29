$(document).ready(() => {
    $.getJSON('/api/todos')
    .then((data) => {
      console.log(data);
    });
}); //
