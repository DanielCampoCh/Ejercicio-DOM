// Frontend que consume la API con fetch (GET, POST, PUT, DELETE)

async function api(url, method = 'GET', body) {
  const opciones = { method, headers: { 'Content-Type': 'application/json' } };
  if (body) opciones.body = JSON.stringify(body);
  const respuesta = await fetch(url, opciones);
  if (respuesta.status === 204) return null;
  const datos = await respuesta.json();
  if (!respuesta.ok) throw new Error(datos.error || 'Error en la petición');
  return datos;
}

function crearItem({ texto, completado, onToggle, onEdit, onDelete }) {
  const item = document.createElement('div');
  item.classList.add('todo-item');
  if (completado) item.classList.add('completed');

  const leftSide = document.createElement('div');
  if (onToggle) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = completado;
    checkbox.onchange = onToggle;
    leftSide.appendChild(checkbox);
  }
  const span = document.createElement('span');
  span.innerText = texto;
  leftSide.appendChild(span);

  const rightSide = document.createElement('div');
  const editBtn = document.createElement('button');
  editBtn.innerText = 'Editar';
  editBtn.onclick = onEdit;
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'X';
  deleteBtn.onclick = onDelete;
  rightSide.append(editBtn, deleteBtn);

  item.append(leftSide, rightSide);
  return item;
}

// ===================== TAREAS =====================
async function renderTareas() {
  const lista = document.getElementById('todo-list');
  const tareas = await api('/tareas');
  lista.innerHTML = '';
  tareas.forEach(tarea => {
    lista.appendChild(crearItem({
      texto: ` ${tarea.titulo}${tarea.fechaLimite ? ' - ' + tarea.fechaLimite : ''}`,
      completado: tarea.completada,
      onToggle: () => actualizarTarea(tarea.id, { completada: !tarea.completada }),
      onEdit: () => {
        const nuevo = prompt('Editar tarea:', tarea.titulo);
        if (nuevo && nuevo.trim()) actualizarTarea(tarea.id, { titulo: nuevo.trim() });
      },
      onDelete: () => eliminarTarea(tarea.id)
    }));
  });
}

async function actualizarTarea(id, cambios) {
  try { await api(`/tareas/${id}`, 'PUT', cambios); renderTareas(); }
  catch (e) { alert(e.message); }
}

async function eliminarTarea(id) {
  try { await api(`/tareas/${id}`, 'DELETE'); renderTareas(); }
  catch (e) { alert(e.message); }
}

document.getElementById('todo-form').addEventListener('submit', async (evento) => {
  evento.preventDefault();
  const titulo = document.getElementById('todo-title');
  const fecha = document.getElementById('date-picker');
  if (!titulo.value.trim()) return alert('Escribe el título de la tarea');
  try {
    await api('/tareas', 'POST', { titulo: titulo.value.trim(), fechaLimite: fecha.value || null });
    titulo.value = '';
    fecha.value = '';
    renderTareas();
  } catch (e) { alert(e.message); }
});

// ===================== CONTACTOS =====================
async function renderContactos() {
  const lista = document.getElementById('contact-list');
  const contactos = await api('/contactos');
  lista.innerHTML = '';
  contactos.forEach(contacto => {
    lista.appendChild(crearItem({
      texto: `${contacto.nombre} - ${contacto.telefono}${contacto.email ? ' - ' + contacto.email : ''}`,
      onEdit: () => {
        const nombre = prompt('Nombre:', contacto.nombre);
        if (nombre === null) return;
        const telefono = prompt('Teléfono:', contacto.telefono);
        if (telefono === null) return;
        const email = prompt('Email:', contacto.email ?? '');
        if (email === null) return;
        actualizarContacto(contacto.id, {
          nombre: nombre.trim() || contacto.nombre,
          telefono: telefono.trim() || contacto.telefono,
          email: email.trim() || null
        });
      },
      onDelete: () => eliminarContacto(contacto.id)
    }));
  });
}

async function actualizarContacto(id, cambios) {
  try { await api(`/contactos/${id}`, 'PUT', cambios); renderContactos(); }
  catch (e) { alert(e.message); }
}

async function eliminarContacto(id) {
  try { await api(`/contactos/${id}`, 'DELETE'); renderContactos(); }
  catch (e) { alert(e.message); }
}

document.getElementById('contact-form').addEventListener('submit', async (evento) => {
  evento.preventDefault();
  const nombre = document.getElementById('contact-name');
  const telefono = document.getElementById('contact-phone');
  const email = document.getElementById('contact-email');
  if (!nombre.value.trim() || !telefono.value.trim()) {
    return alert('El nombre y el teléfono son obligatorios');
  }
  try {
    await api('/contactos', 'POST', {
      nombre: nombre.value.trim(),
      telefono: telefono.value.trim(),
      email: email.value.trim() || null
    });
    nombre.value = '';
    telefono.value = '';
    email.value = '';
    renderContactos();
  } catch (e) { alert(e.message); }
});

// Carga inicial
renderTareas();
renderContactos();