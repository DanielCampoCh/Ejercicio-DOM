# Taller DOM + API con Node.js y Express

Aplicación web sencilla para practicar la manipulación del DOM y la comunicación entre el navegador y una API creada con Node.js y Express. Permite administrar tareas y contactos desde la misma página.

## Autores

- Daniel Campo
- Sebastián Medellín

## ¿Qué implementamos?

- Una interfaz en HTML y CSS con formularios para agregar tareas y contactos.
- Manipulación del DOM con JavaScript para mostrar y actualizar la información.
- Un servidor Express que entrega la página y expone rutas para tareas y contactos.
- Operaciones para consultar, agregar, editar y eliminar tareas y contactos.
- Validaciones básicas, como exigir el título de una tarea y el nombre y teléfono de un contacto.
- Comunicación entre la página y la API usando `fetch` y datos JSON.

Los datos de ejemplo y los nuevos registros se mantienen en memoria; al reiniciar el servidor, vuelven a su estado inicial.

## Cómo ejecutar el proyecto

Se necesita tener instalado [Node.js](https://nodejs.org/) (incluye npm).

1. Abre una terminal en la carpeta del proyecto.
2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor:

   ```bash
   npm run dev
   ```

   También puedes iniciarlo sin Nodemon con `npm start`.

4. Abre [http://localhost:3000](http://localhost:3000) en el navegador.

No se requiere un paso de compilación: Express sirve los archivos de `public` y el navegador ejecuta el JavaScript que manipula el DOM.

## Rutas principales de la API

| Recurso | Operaciones |
| --- | --- |
| `/tareas` | `GET` listar, `POST` agregar |
| `/tareas/:id` | `GET` consultar, `PUT` editar, `DELETE` eliminar |
| `/contactos` | `GET` listar, `POST` agregar |
| `/contactos/:id` | `GET` consultar, `PUT` editar, `DELETE` eliminar |

## Aprendizajes

Practicamos cómo estructurar una página, seleccionar y actualizar elementos del DOM, responder a eventos de formularios, iniciar un proyecto con Node.js y conectar el frontend con rutas de una API Express. También trabajamos con solicitudes HTTP, JSON y validaciones básicas.

## Uso de inteligencia artificial

Usamos la IA como apoyo para resolver dudas sobre la conexión con la API y algunas implementaciones. La preparación del entorno con Node.js y el trabajo de estructura e integración del DOM fueron realizados por el equipo.
