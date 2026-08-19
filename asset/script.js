// Arreglo de objetos con al menos 3 tareas iniciales (Requerimiento 6)
const tareas = [
  { id: 16, descripcion: "Hacer mercado", completado: false },
  { id: 60, descripcion: "Estudiar para la prueba", completado: false },
  { id: 24, descripcion: "Sacar a pasear a Tobby", completado: false },
];

const inputTarea = document.getElementById("input-tarea");
const btnAgregar = document.getElementById("btn-agregar");
const listaTareas = document.getElementById("lista-tareas");
const totalTareasEl = document.getElementById("total-tareas");
const totalRealizadasEl = document.getElementById("total-realizadas");

// Renderiza la lista de tareas recorriendo el arreglo con forEach (Requerimiento 6)
function renderTareas() {
  listaTareas.innerHTML = "";

  if (tareas.length === 0) {
    listaTareas.innerHTML = '<li class="vacio">No hay tareas pendientes</li>';
  } else {
    tareas.forEach(function (tarea) {
      const li = document.createElement("li");

      const idSpan = document.createElement("span");
      idSpan.className = "col-id";
      idSpan.textContent = tarea.id;

      const descSpan = document.createElement("span");
      if (tarea.completado) {
        descSpan.className = "col-tarea tarea-completada";
      } else {
        descSpan.className = "col-tarea";
      }
      descSpan.textContent = tarea.descripcion;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "col-check";
      checkbox.checked = tarea.completado;
      checkbox.addEventListener("change", function () {
        cambiarEstado(tarea.id);
      });

      const btnBorrar = document.createElement("button");
      btnBorrar.className = "btn-borrar col-borrar";
      btnBorrar.textContent = "✖";
      btnBorrar.addEventListener("click", function () {
        borrarTarea(tarea.id);
      });

      li.appendChild(idSpan);
      li.appendChild(descSpan);
      li.appendChild(checkbox);
      li.appendChild(btnBorrar);

      listaTareas.appendChild(li);
    });
  }

  actualizarResumen();
}

// Contar el total de tareas y el total de tareas realizadas (Requerimientos 3 y 5)
function actualizarResumen() {
  totalTareasEl.textContent = tareas.length;

  const realizadas = tareas.filter(function (tarea) {
    return tarea.completado;
  });
  totalRealizadasEl.textContent = realizadas.length;
}

// Obtener el próximo id disponible recorriendo el arreglo con forEach
function obtenerProximoId() {
  let maximo = 0;

  tareas.forEach(function (tarea) {
    if (tarea.id > maximo) {
      maximo = tarea.id;
    }
  });

  return maximo + 1;
}

// Agregar una nueva tarea al arreglo (Requerimiento 1)
function agregarTarea() {
  const descripcion = inputTarea.value.trim();

  if (descripcion === "") {
    return;
  }

  const nuevaTarea = {
    id: obtenerProximoId(),
    descripcion: descripcion,
    completado: false,
  };

  tareas.push(nuevaTarea);
  inputTarea.value = "";
  inputTarea.focus();

  renderTareas();
}

// Borrar una tarea del arreglo por su id (Requerimiento 2)
function borrarTarea(id) {
  const indice = tareas.findIndex(function (tarea) {
    return tarea.id === id;
  });

  if (indice !== -1) {
    tareas.splice(indice, 1);
    renderTareas();
  }
}

// Cambiar el estado completado de una tarea buscando por índice (Requerimiento 4)
function cambiarEstado(id) {
  const indice = tareas.findIndex(function (tarea) {
    return tarea.id === id;
  });

  if (indice !== -1) {
    tareas[indice].completado = !tareas[indice].completado;
    renderTareas();
  }
}

btnAgregar.addEventListener("click", agregarTarea);
inputTarea.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    agregarTarea();
  }
});

renderTareas();
