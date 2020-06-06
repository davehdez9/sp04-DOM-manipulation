const formAdd = document.querySelector('.form-add');
const inputTask = document.querySelector('.input-task');
const taskList = document.querySelector('.task-list');

formAdd.addEventListener('submit', function (e) {
  e.preventDefault();
  const newTask = document.createElement('li');
  const removeTask = document.createElement('button');
  removeTask.innerText = 'delete';

  newTask.innerText = inputTask.value;
  newTask.appendChild(removeTask);
  inputTask.value = '';
  taskList.appendChild(newTask);
});

taskList.addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
  } else if (e.target.tagName === 'LI') {
    e.target.style.textDecoration = 'line-through';
  }
});
