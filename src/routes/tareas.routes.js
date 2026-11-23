const express = require('express');
const router = express.Router();

let tareas = [
  { id: 1, titulo: 'Aprender Express', fechaLimite: '2026-11-25', completada: false },
  { id: 2, titulo: 'Crear una API REST', fechaLimite: '2026-11-27', completada: false },
  { id: 3, titulo: 'Probar la API', fechaLimite: '2026-11-30', completada: false }
];
let siguienteId = 4;

router.get('/', (req, res) => {
  res.json(tareas);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === id);
  if (!tarea) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }
  res.json(tarea);
});

router.post('/', (req, res) => {
  const { titulo, fechaLimite } = req.body ?? {};
  if (!titulo || !String(titulo).trim()) {
    return res.status(400).json({ error: 'El título es obligatorio' });
  }
  const nuevaTarea = {
    id: siguienteId++,
    titulo: String(titulo).trim(),
    fechaLimite: fechaLimite || null,
    completada: false
  };
  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === id);
  if (!tarea) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }
  const { titulo, fechaLimite, completada } = req.body ?? {};
  if (titulo !== undefined && !String(titulo).trim()) {
    return res.status(400).json({ error: 'El título no puede quedar vacío' });
  }
  tarea.titulo = titulo !== undefined ? String(titulo).trim() : tarea.titulo;
  tarea.fechaLimite = fechaLimite ?? tarea.fechaLimite;
  tarea.completada = completada ?? tarea.completada;
  res.json(tarea);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const indice = tareas.findIndex(t => t.id === id);
  if (indice === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }
  tareas.splice(indice, 1);
  res.status(204).send();
});

module.exports = router;