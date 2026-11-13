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