document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#create-task-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const description = document.querySelector('#new-task-description').value;
    buildToDo(description);
    form.reset();
  });
});

function buildToDo(todo) {
  const li = document.createElement('li');

  const span = document.createElement('span'); //  Holds the task text separately
  span.textContent = todo;

  const btn = document.createElement('button');
  btn.textContent = 'x';
  btn.style.color = 'white';
  btn.style.backgroundColor = 'red';
  btn.style.fontSize = '15px';
  btn.addEventListener('click', handleDelete);

  li.appendChild(span);  //  Add text
  li.appendChild(btn);   //  Then add delete button

  document.querySelector('#tasks').appendChild(li);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
