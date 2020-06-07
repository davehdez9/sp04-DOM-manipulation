//Variables
const formAdd = document.querySelector('.form-add');
const inputTask = document.querySelector('.input-task');
const taskList = document.querySelector('.task-list');

document.addEventListener('DOMContentLoaded', getTodos);

formAdd.addEventListener('submit', function (e) {
  e.preventDefault();

  const newTask = document.createElement('li');
  const removeTask = document.createElement('button');
  removeTask.innerText = 'delete';

  newTask.innerText = inputTask.value;
  saveTodo(inputTask.value);
  newTask.appendChild(removeTask);

  taskList.appendChild(newTask);
  inputTask.value = '';
});

taskList.addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    const todo = e.target.parentElement.remove();
  } else if (e.target.tagName === 'LI') {
    e.target.style.textDecoration = 'line-through';
  }
});

function saveTodo(todo) {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.forEach(function (todo) {
    const newTask = document.createElement('li');
    const removeTask = document.createElement('button');
    removeTask.innerText = 'delete';

    newTask.innerText = todo;

    newTask.appendChild(removeTask);

    taskList.appendChild(newTask);
  });
}

function removeTodos(todo) {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
}
