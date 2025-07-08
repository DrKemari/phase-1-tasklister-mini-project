document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const description = e.target['new-task-description'].value;
    const user = e.target['user'].value;
    const duration = e.target['duration'].value;
    const dueDate = e.target['dueDate'].value;
    const priority = e.target['priority'].value;
    const taskDetails = `
    <strong>Task:</strong> ${description} | 
    <strong>User:</strong> ${user} | 
    <strong>Duration:</strong> ${duration} hrs | 
    <strong>Due:</strong> ${dueDate} | 
    <strong>Priority:</strong> ${priority} `;
    buildToDo(taskDetails,priority);
    form.reset();
  });
}); 

function buildToDo(todo,priority) {
  const li = document.createElement('li');  
  const btn = document.createElement('button');

  btn.addEventListener('click', handleDelete);
  btn.textContent = 'x';
  btn.style.color='white';
  btn.style.backgroundColor='red';
  btn.style.fontSize='15px';
  li.innerHTML = todo;
 //Set color based on priority
 switch(priority.toLowerCase()) {
  case 'high':
    li.style.color = 'red';
    break;
  case 'medium':
    li.style.color = 'orange';
    break;
  case 'low':
    li.style.color = 'green';
    break;
}

  li.appendChild(btn);

  console.log(li); 

  document.querySelector('#tasks').appendChild(li);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
