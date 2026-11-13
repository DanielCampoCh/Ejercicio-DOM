# DOM Javascript Manipulation

El [DOM](https://developer.mozilla.org/es/docs/Glossary/DOM), o Document Object Model (Modelo de Objeto de Documento), es una interfaz de programación que los navegadores web utilizan para representar y manipular documentos HTML y XML. Básicamente, el DOM es una representación en forma de árbol del contenido de una página web, donde cada nodo en el árbol es un objeto que representa una parte del documento, como un elemento HTML, un atributo o un texto, que se define asi:

* Los elementos HTML como **objetos**
* Las **propiedades** de todos los elementos HTML
* Los **métodos** para acceder a todos los elementos HTML
* Los **eventos** para todos los elementos HTML

En otras palabras: el **DOM de HTML es un estándar para obtener, cambiar, agregar o eliminar elementos HTML**.

![Document Object Model](https://velog.velcdn.com/images%2Flucylou%2Fpost%2F39fa3109-6e5a-404e-b5a2-27a3af71810d%2Fdom_tree_structure_2.png)

## Ejercicio 1: Selección de Elementos por ID

Selecciona un elemento por su ID único y cambia su contenido utilizando JavaScript. En este ejercicio, aprenderás a utilizar `getElementById` para acceder a un elemento específico en el DOM y modificar su contenido.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio 1: Selección de Elementos por ID</title>
  </head>
  <body>
    <div id="miElemento">Texto inicial</div>

    <script>
      const elemento = document.getElementById('miElemento')
      elemento.textContent = 'Nuevo texto'
    </script>

  </body>
</html>
``````

## Ejercicio 2: Selección de Elementos por Clase

Selecciona todos los elementos con una clase específica y cambia sus estilos usando JavaScript. Este ejercicio te muestra cómo utilizar `getElementsByClassName` para seleccionar varios elementos y aplicarles cambios en el estilo.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio 2: Selección de Elementos por Clase</title>
  </head>
  <body>
    <div class="claseEspecifica">Elemento 1</div>
    <div class="claseEspecifica">Elemento 2</div>
    <div class="claseEspecifica">Elemento 3</div>

    <script>
      const elementos = document.getElementsByClassName('claseEspecifica')
      for (const elemento of elementos) {
        elemento.style.backgroundColor = 'blue'
      }
    </script>
  </body>
</html>
```

## Ejercicio 3: Selección de Elementos con `querySelector`

Utiliza `querySelector` para seleccionar un elemento de un formulario y cambia su valor utilizando JavaScript. Aprenderás cómo seleccionar un elemento específico de un formulario y modificar su contenido.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio 3: Selección de Elementos con `querySelector`</title>
  </head>
  <body>
    <input type="text" id="miInput" value="Valor inicial" />

    <script>
      const inputElement = document.querySelector('input[type="text"]')
      inputElement.value = 'Nuevo valor'
    </script>
  </body>
</html>
```

## Ejercicio 4: Selección de Elementos con `querySelectorAll`

Utiliza `querySelectorAll` para seleccionar todos los elementos de un tipo específico y ocultarlos. Aprenderás cómo seleccionar varios elementos y aplicar una acción a todos ellos.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio 4: Selección de Elementos con `querySelectorAll`</title>
  </head>
  <body>
    <p>Primer párrafo</p>
    <p>Segundo párrafo</p>
    <p>Tercer párrafo</p>

    <script>
      const elementos = document.querySelectorAll('p')
      elementos.forEach((elemento) => {
        elemento.style.display = 'none'
      })
    </script>
  </body>
</html>
```

## Ejercicio 5: Cambio de Contenido con `textContent`

Cambia el texto contenido dentro de un elemento utilizando `textContent` en JavaScript. Este ejercicio te mostrará cómo modificar el texto visible en un elemento HTML.

```html
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio 5: Cambio de Contenido con `textContent`</title>
  </head>
  <body>
    <div id="miElemento">Texto inicial</div>

    <script>
      const elemento = document.getElementById('miElemento')
      elemento.textContent = 'Nuevo texto'
    </script>
  </body>
</html>
```

## Ejercicio 6: Cambio de Contenido con `innerHTML`

Modifica el contenido HTML de un elemento utilizando `innerHTML` en JavaScript. Aprenderás cómo agregar contenido HTML adicional a un elemento existente.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio 6: Cambio de Contenido con `innerHTML`</title>
  </head>
  <body>
    <div id="miElemento">Texto inicial</div>

    <script>
      const elemento = document.getElementById('miElemento')
      elemento.innerHTML = '<strong>Nuevo contenido HTML</strong>'
    </script>
  </body>
</html>
```

## Ejercicio 7: Cambio de Atributos con `setAttribute`

Utiliza `setAttribute` para establecer o modificar el valor de un atributo en un elemento HTML. En este ejercicio, aprenderás a cambiar los atributos de un elemento.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio 7: Cambio de Atributos con `setAttribute`</title>
  </head>
  <body>
    <div id="miElemento">Elemento con atributo</div>

    <script>
      const elemento = document.getElementById('miElemento')
      elemento.setAttribute('data-nuevo', 'valor')
    </script>
  </body>
</html>
```

## Ejercicio 8: Cambio de Estilos con `style`

Cambia los estilos de un elemento utilizando la propiedad `style` en JavaScript. Aprenderás a aplicar estilos dinámicamente a un elemento.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio 8: Cambio de Estilos con `style`</title>
  </head>
  <body>
    <div id="miElemento">Elemento con estilo</div>

    <script>
      const elemento = document.getElementById('miElemento')
      elemento.style.backgroundColor = 'red'
    </script>
  </body>
</html>
```

## Ejercicio 9: Manipulación de Clases con `classList`

Agrega una clase a un elemento utilizando `classList` en JavaScript. Este ejercicio te mostrará cómo manipular las clases de un elemento.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio 9: Manipulación de Clases con `classList`</title>
  </head>
  <body>
    <div id="miElemento">Elemento con clase</div>

    <script>
      const elemento = document.getElementById('miElemento')
      elemento.classList.add('nuevaClase')
    </script>
  </body>
</html>
```

## Ejercicio 10: Agregar Elemento con `appendChild`

Utiliza `appendChild` para agregar un nuevo elemento como hijo de otro elemento existente en el DOM. Aprenderás a crear y agregar elementos dinámicamente.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio 10: Agregar Elemento con `appendChild`</title>
  </head>
  <body>
    <div id="contenedor">Contenido existente</div>
    <button id="miBoton">Agregar Elemento</button>

    <script>
      const nuevoElemento = document.createElement('div')
      nuevoElemento.textContent = 'Nuevo elemento'
      const contenedor = document.getElementById('contenedor')
      contenedor.appendChild(nuevoElemento)
    </script>
  </body>
</html>
```

## Ejercicio 11: Eliminar Elemento con `removeChild`

Utiliza `removeChild` para eliminar un elemento hijo de su elemento padre en el DOM. Aprenderás a quitar elementos del árbol DOM.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio 11: Eliminar Elemento con `removeChild`</title>
  </head>
  <body>
    <div id="contenedor">
      <div id="elementoAEliminar">Elemento a eliminar</div>
    </div>

    <script>
      const elementoAEliminar = document.getElementById('elementoAEliminar')
      const padre = elementoAEliminar.parentElement
      padre.removeChild(elementoAEliminar)
    </script>
  </body>
</html>
```

## Ejercicio 12: Asociar Evento de Click

Asocia un evento de clic a un botón y muestra un mensaje cuando se hace

clic en el botón. Aprenderás cómo responder a eventos de usuario.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio 12: Asociar Evento de Clic</title>
  </head>
  <body>
    <button id="miBoton">Haz clic</button>

    <script>
      const boton = document.getElementById('miBoton')
      boton.addEventListener('click', () => {
        alert('¡Hiciste clic en el botón!')
      })
    </script>
  </body>
</html>
```

## Ejercicio 13: Prevenir la Acción por Defecto de un Enlace

Utiliza `preventDefault` para evitar que un enlace navegue a otra página cuando se hace clic. Este ejercicio te mostrará cómo controlar el comportamiento predeterminado de un evento.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio 13: Prevenir la Acción por Defecto de un Enlace</title>
  </head>
  <body>
    <a id="miEnlace" href="https://www.ejemplo.com">Enlace</a>

    <script>
      const enlace = document.getElementById('miEnlace')
      enlace.addEventListener('click', (evento) => {
        evento.preventDefault()
        alert('Enlace bloqueado')
      })
    </script>
  </body>
</html>
```

## Ejercicio 14: Detener la Propagación de Evento

Utiliza `stopPropagation` para evitar que un evento se propague a elementos padre. Aprenderás cómo evitar que los eventos se propaguen en el árbol DOM.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio 14: Detener la Propagación de Evento</title>
  </head>
  <body>
    <div id="elementoPadre">
      <div id="elementoHijo">Haz clic aquí</div>
    </div>

    <script>
      const elementoHijo = document.getElementById('elementoHijo')
      elementoHijo.addEventListener('click', (evento) => {
        evento.stopPropagation()
        alert('Evento hijo')
      })

      const elementoPadre = document.getElementById('elementoPadre')
      elementoPadre.addEventListener('click', () => {
        alert('Evento padre')
      })
    </script>
  </body>
</html>
```

## Ejercicio 15: Delegación de Eventos

Utiliza la delegación de eventos para manejar clics en varios elementos de una lista a través de un elemento padre común. Este ejercicio te muestra cómo simplificar el manejo de eventos en elementos múltiples.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio 15: Delegación de Eventos</title>
  </head>
  <body>
    <ul id="miLista">
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
    </ul>

    <script>
      const lista = document.getElementById('miLista')
      lista.addEventListener('click', (evento) => {
        if (evento.target.tagName === 'LI') {
          alert('Clic en un elemento de la lista')
        }
      })
    </script>
  </body>
</html>
```

## Ejercicio 16: Temporizador de Evento Personalizado

Crea un temporizador que dispare un evento personalizado después de cierto tiempo.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio 16: Temporizador de Evento Personalizado</title>
  </head>
  <body>
    <button id="miBoton">Iniciar Temporizador</button>

    <script>
      const boton = document.getElementById('miBoton')

      function iniciarTemporizador() {
        setTimeout(() => {
          const eventoPersonalizado = new Event('eventoPersonalizado')
          boton.dispatchEvent(eventoPersonalizado)
        }, 3000) // 3 segundos
      }

      boton.addEventListener('eventoPersonalizado', () => {
        alert('¡Evento personalizado disparado!')
      })

      boton.addEventListener('click', () => {
        iniciarTemporizador()
      })
    </script>
  </body>
</html>
```

## Ejercicio 17: Manejo de Evento de Carga de Imagen

Maneja el evento de carga de una imagen y muestra un mensaje cuando la imagen se carga.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio 17: Manejo de Evento de Carga de Imagen</title>
  </head>
  <body>
    <img id="miImagen" src="imagen.jpg" alt="Imagen" />

    <script>
      const imagen = document.getElementById('miImagen')

      imagen.addEventListener('load', () => {
        alert('La imagen se ha cargado correctamente')
      })
    </script>
  </body>
</html>
```

## Ejercicio 18: Evento Personalizado y Disparo

Crea un evento personalizado y asígneselo a un elemento, luego escucha ese evento y realiza una acción cuando se dispara.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio 18: Evento Personalizado y Disparo</title>
  </head>
  <body>
    <button id="miBoton">Disparar Evento Personalizado</button>

    <script>
      const boton = document.getElementById('miBoton')

      function crearEventoPersonalizado() {
        const eventoPersonalizado = new Event('eventoPersonalizado')
        boton.dispatchEvent(eventoPersonalizado)
      }

      boton.addEventListener('eventoPersonalizado', () => {
        alert('¡Evento personalizado disparado!')
      })

      boton.addEventListener('click', () => {
        crearEventoPersonalizado()
      })
    </script>
  </body>
</html>
```

## Ejercicio 19: Evento de Cambio de Tamaño de Ventana

Utiliza eventos del navegador como `resize` para realizar cambios en la página cuando ocurran estos eventos.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejercicio 19: Evento de Cambio de Tamaño de Ventana</title>
  </head>
  <body>
    <div id="miDiv">Tamaño de ventana: Desconocido</div>

    <script>
      const div = document.getElementById('miDiv')

      function actualizarTamañoVentana() {
        div.textContent = `Tamaño de ventana: ${window.innerWidth} x ${window.innerHeight}`
      }

      window.addEventListener('resize', actualizarTamañoVentana)
    </script>
  </body>
</html>
```

# Crear una Aplicación de To-Do List con JavaScript

## Objetivos:
* Aprender a estructurar una aplicación web básica.
* Practicar la manipulación del DOM.
* Comprender cómo usar eventos en JavaScript.

### Paso 0: Estructura Básica del Proyecto.

Crear la estructura básica de archivos:
* index.html
* styles.css
* script.js

### Paso 1: HTML - Estructura de la Aplicación.

* Crear el esqueleto básico de la aplicación en index.html.
* Elementos necesarios: un campo de entrada, un botón para añadir tareas, y una lista para mostrar las tareas.

### Paso 2: CSS - Estilizar la Aplicación.
* Añadir estilos básicos en styles.css para mejorar la apariencia.

### Paso 3: JavaScript - Funcionalidad de la Aplicación.
* Añadir funcionalidad para crear tareas.
* Manejar eventos de clic para añadir y eliminar tareas.

### Paso 4: Extensiones y Mejoras.
* Añadir funcionalidad para editar tareas.
* Añadir funcionalidad para marcar tareas como completadas.
* Estilizar tareas completadas (por ejemplo, con un texto tachado).
* Introducir la idea de separar la lógica en funciones reutilizables.

### Aqui les comparto un ejemplo muy basico en un solo archivo seguir los pasos anteriores:

```html
<html>
  <head>
    <title>My Todo App</title>
  </head>
  <body>
    <input id="todo-title" type="text" />
    <input id="date-picker" type="date" />
    <button onclick="addTodo()">Add Todo</button>

    <div id="todo-list"></div>

    <script>
      const todos = [{
        title: 'Get groceries',
        dueDate: '2021-10-04'
      }, {
        title: 'Wash car',
        dueDate: '2021-02-03'
      }, {
        title: 'Make dinner',
        dueDate: '2021-03-04'
      }];

      render();

      function addTodo() {
        const textbox = document.getElementById('todo-title');
        const title = textbox.value;

        const datePicker = document.getElementById('date-picker');
        const dueDate = datePicker.value;
        todos.push({
          title: title,
          dueDate: dueDate
        });

        render();
      }

      function render() {
        // reset our list
        document.getElementById('todo-list').innerHTML = '';

        todos.forEach(function (todo) {
          const element = document.createElement('div');
          element.innerText = todo.title + ' ' + todo.dueDate;
          const todoList = document.getElementById('todo-list');
          todoList.appendChild(element);
        });
      }
    </script>
  </body>
</html>
```

Ejemplos visuales [aqui...](https://www.google.com/search?sca_esv=811d106c3f469370&rlz=1C1GCEA_enCO1028CO1028&q=todo+list+ui&udm=2&fbs=AEQNm0CbCVgAZ5mWEJDg6aoPVcBgWizR0-0aFOH11Sb5tlNhd3zC4y7ZXTSrvvSBSNjw8fViXBe1-ue1pgc4W77YHGSo5xYtnFlb-xea5tkJyrw0Do8O9gqTn9BzEXsuvJpkbVS1wIMY7vu1e0b-JXvLM1mKkcWHJXyE97vme8BfOc9C1Jg4ZUsZDKWxZpJzX5BysAxGChC9_jnFz3vRXos_9HZ50-EJOg&sa=X&ved=2ahUKEwiNn7jlwbmJAxXNRjABHZeAOtIQtKgLegQIEhAB&biw=2048&bih=991&dpr=1.25)


# Recursos Adicionales:
* [MDN Web Docs](https://developer.mozilla.org/es/)
* [JavaScript.info](https://javascript.info/)
* [Eloquent JavaScript](https://eloquentjavascript.net/)
