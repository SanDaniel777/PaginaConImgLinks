function revisarFormulario() {
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let fecha = document.getElementById("fecha").value.trim();
    let terminos = document.getElementById("terminos").checked;
    let mensaje = document.getElementById("mensaje");
    let generoSeleccionado = document.querySelector('input[name="genero"]:checked');

    if (nombre === "" || apellido === "" || fecha === "" || !generoSeleccionado || !terminos) {
        mensaje.className = "mensaje error";
        mensaje.innerHTML = "Faltan campos por llenar.";
    } else {
        mensaje.className = "mensaje exito";
        mensaje.innerHTML = "Todos los campos están completos.";
    }
}

document.getElementById("revisar").addEventListener("click", revisarFormulario);
