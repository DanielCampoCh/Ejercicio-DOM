let todos = [
  { id: '1', title: 'Comprar leche', dueDate: '2026-12-01', completed: false }
];

render();

function addTodo() {
  const textbox = document.getElementById('todo-title');
  const title = textbox.value.trim();
  const datePicker = document.getElementById('date-picker');
  const dueDate = datePicker.value;

  if (!title || !dueDate) return alert('Completa los campos');

  todos.push({
    id: Date.now().toString(),
    title: title,
    dueDate: dueDate,
    completed: false
  });

  textbox.value = '';
  datePicker.value = '';
  render();
}

function render() {
  const listContainer = document.getElementById('todo-list');
  listContainer.innerHTML = '';

  todos.forEach(todo => {
    const item = document.createElement('div');
    item.classList.add('todo-item');
    if (todo.completed) item.classList.add('completed');

    const span = document.createElement('span');
    span.innerText = `${todo.title} (${todo.dueDate})`;

    item.appendChild(span);
    listContainer.appendChild(item);
  });
}

function toggleCompleted(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) todo.completed = !todo.completed;
  render();
}

function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
  render();
}

function editTodo(id) {
  const todo = todos.find(t => t.id === id);
  if (!todo) return;
  const nuevo = prompt('Editar tarea:', todo.title);
  if (nuevo) {
    todo.title = nuevo.trim();
    render();
  }
}

function render() {
  const listContainer = document.getElementById('todo-list');
  listContainer.innerHTML = '';

  todos.forEach(todo => {
    const item = document.createElement('div');
    item.classList.add('todo-item');
    if (todo.completed) item.classList.add('completed');

    const leftSide = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.onchange = () => toggleCompleted(todo.id);

    const span = document.createElement('span');
    span.innerText = ` ${todo.title} - ${todo.dueDate}`;
    leftSide.appendChild(checkbox);
    leftSide.appendChild(span);

    const rightSide = document.createElement('div');
    const editBtn = document.createElement('button');
    editBtn.innerText = 'Editar';
    editBtn.onclick = () => editTodo(todo.id);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X';
    deleteBtn.onclick = () => deleteTodo(todo.id);

    rightSide.appendChild(editBtn);
    rightSide.appendChild(deleteBtn);

    item.appendChild(leftSide);
    item.appendChild(rightSide);
    listContainer.appendChild(item);

    
  });
}