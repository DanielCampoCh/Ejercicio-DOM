const express = require('express');
const path = require('path');

const tareasRoutes = require('./routes/tareas.routes');
const contactosRoutes = require('./routes/contactos.routes');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json())

app.use(express.static(path.join(__dirname, '..', 'public')));


app.get('/api', (req, res) => {
  res.json({
    mensaje: 'Bienvenido a la API de Tareas y Contactos usando Express y Node.js',
    recursos: ['/tareas', '/contactos']
  });
});

app.use('/tareas', tareasRoutes);
app.use('/contactos', contactosRoutes);


app.use((req, res) => {
  res.status(404).json({ error: `Ruta ${req.method} ${req.originalUrl} no encontrada` });
});

app.use((err, req, res, next) => {
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'El cuerpo de la petición no es un JSON válido' });
  }
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});