const express = require('express');
const router = express.Router();

// Base de datos temporal en memoria
let contactos = [
  { id: 1, nombre: 'Ana Gómez', telefono: '3001234567', email: 'ana.gomez@correo.com' },
  { id: 2, nombre: 'Carlos Ruiz', telefono: '3109876543', email: 'carlos.ruiz@correo.com' }
];
let siguienteId = 3;

// Validación sencilla de email
const emailValido = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// 1. Obtener todos los contactos (GET)
router.get('/', (req, res) => {
  res.json(contactos);
});

// 1.1 Obtener un contacto por id (GET)
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const contacto = contactos.find(c => c.id === id);
  if (!contacto) {
    return res.status(404).json({ error: 'Contacto no encontrado' });
  }
  res.json(contacto);
});

// 2. Crear un nuevo contacto (POST)
router.post('/', (req, res) => {
  const { nombre, telefono, email } = req.body ?? {};
  if (!nombre || !telefono) {
    return res.status(400).json({ error: 'El nombre y el teléfono son obligatorios' });
  }
  if (email && !emailValido(email)) {
    return res.status(400).json({ error: 'El email no tiene un formato válido' });
  }
  const nuevoContacto = {
    id: siguienteId++,
    nombre: String(nombre).trim(),
    telefono: String(telefono).trim(),
    email: email || null
  };
  contactos.push(nuevoContacto);
  res.status(201).json(nuevoContacto);
});

// 3. Actualizar un contacto (PUT)
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const contacto = contactos.find(c => c.id === id);
  if (!contacto) {
    return res.status(404).json({ error: 'Contacto no encontrado' });
  }
  const { nombre, telefono, email } = req.body ?? {};
  if (email && !emailValido(email)) {
    return res.status(400).json({ error: 'El email no tiene un formato válido' });
  }
  contacto.nombre = nombre ?? contacto.nombre;
  contacto.telefono = telefono ?? contacto.telefono;
  contacto.email = email !== undefined ? email : contacto.email;
  res.json(contacto);
});

// 4. Eliminar un contacto (DELETE)
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const indice = contactos.findIndex(c => c.id === id);
  if (indice === -1) {
    return res.status(404).json({ error: 'Contacto no encontrado' });
  }
  contactos.splice(indice, 1);
  res.status(204).send();
});

module.exports = router;