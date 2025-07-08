// Load tasks from localStorage on page load
window.onload = function () {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTasks.forEach(task => createTaskElement(task.text, task.completed));
};

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  createTaskElement(taskText, false);
  saveTasks();
  taskInput.value = '';
}

function createTaskElement(text, completed) {
  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  if (completed) li.classList.add('completed');

  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.onclick = () => {
    li.classList.toggle('completed');
    saveTasks();
  };

  const span = document.createElement('span');
  span.innerText = text;

  const deleteBtn = document.createElement('div');
  deleteBtn.innerText = 'X';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  li.appendChild(circle);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
}

function saveTasks() {
  const tasks = [];
  const listItems = document.querySelectorAll('#taskList li');
  listItems.forEach(li => {
    const text = li.querySelector('span').innerText;
    const completed = li.classList.contains('completed');
    tasks.push({ text, completed });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
