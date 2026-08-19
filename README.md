# Todo List

Aplicación web simple de lista de tareas (Todo List) desarrollada con HTML, CSS y JavaScript puro, como parte del Desafío del Módulo 03 (Métodos y Arreglos) de Fullstack JS.

## Acceso 

https://cesarscl.github.io/Metodos-de-Arreglos/


## Funcionalidades

- Agregar nuevas tareas escribiendo en el input y presionando el botón "Agregar" o la tecla Enter.
- Marcar/desmarcar una tarea como completada mediante un checkbox.
- Eliminar una tarea de la lista.
- Ver un resumen con el total de tareas y el total de tareas realizadas.
- Mensaje de "No hay tareas pendientes" cuando la lista está vacía.

## Estructura del proyecto

```
.
├── index.html
├── asset/
│   ├── script.js
│   └── style.css
└── README.md
```

## Tecnologías

- HTML5
- CSS3
- JavaScript

## Cómo usarlo

Abre el archivo `index.html` en tu navegador. No requiere instalación de dependencias ni servidor.

## Detalles técnicos

Las tareas se manejan como un arreglo de objetos en memoria (`{ id, descripcion, completado }`) y se manipulan utilizando métodos de arreglos de JavaScript:

- `forEach` para renderizar la lista de tareas.
- `filter` para calcular el total de tareas realizadas.
- `findIndex` para localizar una tarea por su `id` al cambiar su estado o eliminarla.
- `splice` para eliminar una tarea del arreglo.
- `push` para agregar una nueva tarea.
