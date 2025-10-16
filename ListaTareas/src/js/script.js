const input = document.getElementById('tareaInput');
const boton = document.getElementById('btnAgregar');
const lista = document.getElementById('listaTareas');

// Cargar tareas guardadas
document.addEventListener('DOMContentLoaded', cargarTareas);

// Agregar tarea
boton.addEventListener('click', () => {
    const texto = input.value.trim();
    if (texto === '') return;

    agregarTarea(texto);
    guardarTareas();
    input.value = '';
});

// Función para agregar tarea al DOM
function agregarTarea(texto, completada = false) {
    const li = document.createElement('li');
    li.textContent = texto;

    if (completada) li.classList.add('completada');

    li.addEventListener('click', () => {
        li.classList.toggle('completada');
        guardarTareas();
    });

    lista.appendChild(li);
}

// Guardar tareas en localStorage
function guardarTareas() {
    const tareas = [];
    lista.querySelectorAll('li').forEach(li => {
        tareas.push({
            texto: li.textContent,
            completada: li.classList.contains('completada')
        });
    });
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

// Cargar tareas desde localStorage
function cargarTareas() {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    tareasGuardadas.forEach(t => agregarTarea(t.texto, t.completada));
}
