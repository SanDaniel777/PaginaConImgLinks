const input = document.getElementById('tareaInput');
const boton = document.getElementById('btnAgregar');
const lista = document.getElementById('listaTareas');


document.addEventListener('DOMContentLoaded', cargarTareas);


boton.addEventListener('click', () => {
    const texto = input.value.trim();
    if (texto === '') return;

    agregarTarea(texto);
    guardarTareas();
    input.value = '';
});

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

function cargarTareas() {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    tareasGuardadas.forEach(t => agregarTarea(t.texto, t.completada));
}
